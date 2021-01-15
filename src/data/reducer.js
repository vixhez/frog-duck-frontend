const getFrogs = (state, action) => ({
    ...state,
    frogs: action.data,
    // frogObject: {
    //     regularName: action.data.regular_name,
    //     latinName: action.data.latin_name,
    //     description: action.data.description,
    //     conservation: action.data.conservation,
    //     location: action.data.location,
    //     extroversion: +action.data.extroversion,
    //     colourfulness: +action.data.colourfulness,
    //     kindness: +action.data.kindness,
    //     activeness: +action.data.activeness,
    // }
});

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_FROGS": return getFrogs(state, action);
        default: return state;
    }

};

export default reducer;