import React from 'react';
import './BusinessList.css';
import Business from  '../Business/Business';


class BusinessList extends React.Component{
    render(){
        return (
        <div className="BusinessList">
            {
            this.props.businesses.map(b => {
            return <Business businessId={this.props.business.id}/>
                }
              )
            }
           </div>
         ) 
      }
    }

export default BusinessList;