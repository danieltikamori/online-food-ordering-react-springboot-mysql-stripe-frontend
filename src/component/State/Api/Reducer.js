const initialState = {
  version: 'v1'
};

 export const apiVersions = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_API_VERSION':
          return { ...state, version: action.payload };
      case 'RESET_API_VERSION':
          return { ...state, version: 'v1' };
      default:
          return state;
  }
};

export default apiVersions;