import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    bestMatch:'best_match',
    highestRated: 'rating',
    mostReviewed:'review_count', 
}

const getSortByClass(sortByOption)=> {
    if(this.state === sortByOption){
        return 'active';
    } else{
        return '';
    }
}

const handleSortByChange(sortByOption)=> {
    
}
class SearchBar extends React.Component{
    constructor(){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match';
        },
    }
  renderSortByOptions() {
       return Object.keys(sortByOptions).map(sortByOption =>{
           const sortByOptionValue = sortByOptions[sortByOption];
           return <li key={sortByOptionValue}>{sortByOption}</li>;
       });
   }
    
    render(){
        return(
        <div className="SearchBar">
              <div className="SearchBar-sort-options">
                <ul>
                  {this.renderSortByOptions()}
                </ul>
              </div>
              <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
              </div>
              <div className="SearchBar-submit">
                <a>Let's Go</a>
              </div>
            </div>
                    );
    }
}

export default SearchBar;