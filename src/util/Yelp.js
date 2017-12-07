const clientId = 'qMDSzDASESDTJCTQkBGJHA';
const secret = 'sZx4lSehU1qXrxuDn2yXyF4ajAGoNWbu5mNWtcnM3M151T4OCbFaIulmJYTonWrc';
let accessToken;
      
const Yelp = {
  getAccessToken() {
      if(accessToken){
          return new Promise(resolve => resolve(accessToken));
            }
      else{
         return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
               {method: 'POST'}).then(response => {
                  return response.json();
                }).then(jsonResponse => {
             accessToken = jsonResponse.access_token;
            })
          }
        },
     search(term, location, sortBy) {
            return Yelp.getAccessToken().then(() => {return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=TERM&location=LOCATION&sort_by=SORT_BY',
             {headers: 
              {Authorization:`Bearer ${accessToken}`}
             })
          }).then(response => 
             response.json()).then(jsonResponse =>{
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map(business => (
                        {
                            id: business.id,
                            imageSrc: business.imageSrc,
                            name: business.name,
                            address: business.address,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zipCode,
                            category: business.category,
                            rating: business.rating,
                            reviewCount: business.reviewCount,
                        }
                    )
                  )
                }
            })
            
        }    
      }
    
                
                export default Yelp;