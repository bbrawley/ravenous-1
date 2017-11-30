import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        
         const sortByOptions = {
        bestMatch:'best_match',
        highestRated: 'rating',
        mostReviewed:'review_count', 
      }
    }

    const handleSortByChange = (sortByOption)=> {
        this.setState({sortBy: sortByOption});
    }

    const handleTermChange = (event)=>{
        this.setState({term: event.target.value})
    }

    const handleLocationChange = (event) => {
        this.setState({location: event.target.value})
    }
    
    const handleSearch = (event) =>{
        this.props.searchYelp(this.state.term, this.state.location,  this.state.sortBy);
        event.preventDefault();
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
                <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                <input onChange={this.handleLocationChange} placeholder="Where?" />
              </div>
              <div className="SearchBar-submit" onClick=this.handleSearch>
                <a>Let's Go</a>
              </div>
            </div>
                    );
    }
}

export default SearchBar;