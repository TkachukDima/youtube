import ServiceApi from '../service/service';

export const ACTION_LOADING_FIRST_PAGE = 'ACTION_LOADING_FIRST_PAGE';
export const ACTION_ERROR_PAGE = 'ACTION_ERROR_PAGE';
export const ACTION_ON_PLAY_THIS_VIDEO = 'ACTION_ON_PLAY_THIS_VIDEO';
export const ACTION_SEARCH_VIDEO = 'ACTION_SEARCH_VIDEO';
export const ACTION_NOT_FOUND_VIDEO = 'ACTION_NOT_FOUND_VIDEO';
export const ACTION_CHANGE_LABEL = 'ACTION_CHANGE_LABEL';
export const ACTION_LOADIN_SPINNER = 'ACTION_LOADIN_SPINNER';



export const loadingFirstPage = (data) => ({
    type: ACTION_LOADING_FIRST_PAGE,
    payload: data
  });

export const loadingErrorPage = (data) => {
  return {
    type: ACTION_ERROR_PAGE,
    payload: data
  }
};

export const playThisVideo = (data) => {
  return {
    type: ACTION_ON_PLAY_THIS_VIDEO,
    payload: data
  }
};

export const searchVideoContent = (data) => {
  return {
    type: ACTION_SEARCH_VIDEO,
    payload: data
  }
};

export const notFoundVideoContent = (data) => {
  return {
    type: ACTION_NOT_FOUND_VIDEO,
    payload: data
  }
};

export const onChangeInputLabel = (data) => {
  return {
    type: ACTION_CHANGE_LABEL,
    payload: data
  }
};

export const loadingSpinner = () => {
  return {
    type: ACTION_LOADIN_SPINNER,
    payload: true
  }
};

const serviceApi = new ServiceApi();

const getInfoMainVideo = (id) => {
  return serviceApi.getInfoMainVideo(id);
};

const getCommentsVideo = (id) => {
  return serviceApi.getComments(id);
};


export const searchVideos = (text) => {
  
  return async (dispatch) => {
    
    try {
      const res = await serviceApi.getSearchVideo(text);
        
      if(res.length) {
        const [{id, title, channelTitle, imgUrl, publishedAt}, ...rest] = res;
        const comm = await getCommentsVideo(id);
        const mainVideo = await getInfoMainVideo(id);
        
        dispatch(
          searchVideoContent({
            comments: comm,
            videoList: rest,
            idMainVideo: id,
            infoMainVideo: mainVideo[0],
            titleMainVideo: title,
            channelTitleMainVideo: channelTitle,
            imgUrlMainVideo: imgUrl,
            publishedAt: publishedAt,
            loading: false,
            searchResult: false
          })
        );
      } else {
        dispatch(notFoundVideoContent({ searchResult: true }));    
      };
    } catch {
      dispatch(loadingErrorPage({
        error: true,
        loading: false
      })
      );
    }
  }
  
};

export const getVideoListInfo = (id) => {
  
  return async (dispatch) => {
  
    try {
      const mainVideo = await getInfoMainVideo(id);
      const comm = await getCommentsVideo(id);
      const res = await serviceApi.getRelatedVideo(id);
      
      dispatch(loadingFirstPage({
                comments: comm,
                infoMainVideo: mainVideo[0],
                videoList: res,
                loading: false,
                searchResult: false
              })
      );
    } catch {
      dispatch(loadingErrorPage({
        error: true,
        loading: false
      })
      );
    }
  };

  
};

export const onPlayThisVideo = (id) => {

  return async (dispatch) => {
    try {
      dispatch(loadingSpinner());
      const comm = await getCommentsVideo(id);
      const mainVideo = await getInfoMainVideo(id);
      const res = await serviceApi.getRelatedVideo(id);
      dispatch(
        playThisVideo({
          comments: comm,
          videoList: res,
          idMainVideo: id,
          infoMainVideo: mainVideo[0],
          loading: false,
          searchResult: false
        })
      );

    } catch {
      dispatch(loadingErrorPage({
        error: true,
        loading: false
      })
      );
    }
  }
}