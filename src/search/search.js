import React, {Component} from 'react';
import './search.css';


class Search extends Component {
  
  state = {
    label: ''
  };

  onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      })
  }

  onSubmit = (e) => {
      e.preventDefault();
      const textSearch = this.state.label.split(' ').join('+');
      this.props.searchVideos(textSearch);
      this.setState({
        label: ""
      });
  }
  
  render() {

    // console.log(this.state.label);

    return (
            
            <form className="form-search"
                  onSubmit={ this.onSubmit } 
                  >
                 <input type="text" 
                        placeholder="Пошук"
                        onChange={ this.onLabelChange }
                        value={ this.state.label }
                  />
                 <button type="submit" className="btn-default">
                        Search
                  </button>
            </form>
    );
  }
}

export default Search;