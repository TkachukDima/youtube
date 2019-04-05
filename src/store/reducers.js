import {ACTION_LOADING_FIRST_PAGE, 
        ACTION_ERROR_PAGE, 
        ACTION_ON_PLAY_THIS_VIDEO, 
        ACTION_SEARCH_VIDEO,
        ACTION_NOT_FOUND_VIDEO,
        ACTION_CHANGE_LABEL} from './actions';



const initialState = {
      comments: false,
      videoList: false,
      idMainVideo: "ppOFiX-T_yM",
      infoMainVideo: null,
      titleMainVideo: '',
      channelTitleMainVideo: '',
      imgUrlMainVideo: '',
      publishedAt: '',
      loading: true,
      searchResult: false,
      error: false,
      label: ''
};

export const reducer = (state = initialState, action) => {
  
   switch (action.type) {
      case ACTION_LOADING_FIRST_PAGE :
          return {
                ...state, ...action.payload                  
          };
      
      case ACTION_ERROR_PAGE :
          return {
                ...state, ...action.payload                  
          };
      
      case ACTION_ON_PLAY_THIS_VIDEO :
          return {
                ...state, ...action.payload                  
          };
      case ACTION_SEARCH_VIDEO :
          return {
                ...state, ...action.payload                  
          };
      case ACTION_NOT_FOUND_VIDEO :
          return {
                ...state, ...action.payload                  
          };
      case ACTION_CHANGE_LABEL :
          return {
                ...state, 
                label: action.payload                  
          };

      default:
          return state;

  }
    
  // return state;
}

