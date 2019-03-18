import React, {Component} from 'react';
import './search.css';


class Search extends Component {
  render() {
    return (
            <form className="form-search">
                 <input type="text" placeholder="Пошук" />
                 <button type="submit" className="btn-default">
                        Search
                  </button>
            </form>
    );
  }
}

export default Search;