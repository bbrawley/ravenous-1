import React from 'react';
import './BusinessList.css';
import Business from  '../Business/Business';


class BusinessList extends React.Component{
    render(){
                console.log(this);
        return (
        <div className="BusinessList">
            {
            this.props.businesses.map(b => {
            return <Business business={b}/>
                }
              )
            }
           </div>
         ) 
      }
    }

export default BusinessList;