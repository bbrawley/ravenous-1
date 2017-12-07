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
            return Yelp.getAccessToken().then(() => {return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {headers: 
              {Authorization:`Bearer ${accessToken}`}
             })
          }).then(response => 
             response.json()).then(jsonResponse =>{
                if(jsonResponse.businesses){
                    console.log(jsonResponse.businesses);
                    return jsonResponse.businesses.map(business => (
                        {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_Count,
                        }
                    )
                  )
                }
            })
            
        }    
      }
    
                
                export default Yelp;