export const initialState = {
    token: null,
    sideBarToggle: false,
    list: [],
    selectedVideo: null,
    userName: "",
    searchResult: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SIDE_BAR_TOGGLE":
        return { ...state, sideBarToggle: action.payload };
      case "SET_VIDEO_LIST":
        return { ...state, list: action.payload };
      case "SET_VIDEO":
        return { ...state, selectedVideo: action.payload };
      case "SET_NAME":
        return { ...state, userName: action.payload };
      case "SET_TOKEN":
        return { ...state, token: action.payload };
      case "SET_SEARCH_SONG":
        return { ...state, searchResult: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;