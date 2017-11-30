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
    this.setState({sortBy: sortByOption});
}

const handleTermChange(event)=>{
    this.setState({term: event.target.value})
}

const handleLocationChange(event)=> {
    this.setState({location: event.target.value})
}
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match';
        };
        
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
    }
    
  renderSortByOptions() {
       return Object.keys(sortByOptions).map(sortByOption =>{
           const sortByOptionValue = sortByOptions[sortByOption];
           return <li className={getSortByClass(sortByOptionValue)} onClick={handleSortByChange.bind(this.sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
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