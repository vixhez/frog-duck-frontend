const getFrogs = (state, action) => ({
    ...state,
    frogs: action.data,
});

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_FROGS": return getFrogs(state, action);
        default: return state;
    }
  
  };
  
  export default reducer;