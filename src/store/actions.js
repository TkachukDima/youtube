export const ACTION_LOADING_FIRST_PAGE = 'ACTION_LOADING_FIRST_PAGE';
export const ACTION_ERROR_PAGE = 'ACTION_ERROR_PAGE';
export const ACTION_ON_PLAY_THIS_VIDEO = 'ACTION_ON_PLAY_THIS_VIDEO';
export const ACTION_SEARCH_VIDEO = 'ACTION_SEARCH_VIDEO';
export const ACTION_NOT_FOUND_VIDEO = 'ACTION_NOT_FOUND_VIDEO';
export const ACTION_CHANGE_LABEL = 'ACTION_CHANGE_LABEL';


export const loadingFirstPage = (data) => {
  return {
    type: ACTION_LOADING_FIRST_PAGE,
    payload: data
  }
};

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