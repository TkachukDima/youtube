import React, {Component} from 'react';
import './search.css';

import {connect} from 'react-redux';
import * as actions from '../store/actions';
class Search extends Component {

  onLabelChange = (e) => {
      this.props.onChangeInputLabel(e.target.value);
  }

  onSubmit = (e) => {
      e.preventDefault();
      const textSearch = this.props.label.split(' ').join('+');
      if(textSearch.length) {
        this.props.onChangeInputLabel("");
        this.props.searchVideos(textSearch);
        
      }
  }
  
  render() {

    const {label} = this.props;

    return (
            <form className="form-search "
                  onSubmit={ this.onSubmit } 
                  >
                 <div className="input-group">
                  <input type="text"
                          className="form-control" 
                          placeholder="Пошук"
                          onChange={ this.onLabelChange }
                          value={ label }
                    />
                  <button type="submit" className="btn-default">
                      <span className="input-group-addon"> <i className="fa fa-search"></i> </span>
                  </button>
                 </div>
            </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    label: state.label
  };
};

export default connect(mapStateToProps, actions)(Search);