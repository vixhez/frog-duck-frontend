const getFrogs = (state, action) => ({
    ...state,
    frogs: action.data,
    frogsLoaded: true,
});

const getDucks = (state, action) => ({
    ...state,
    ducks: action.data,
    ducksLoaded: true,
});

const submitQuiz = (state, action) => ({
    ...state,
    quizComplete: true,
})

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_FROGS": return getFrogs(state, action);
        case "GET_DUCKS": return getDucks(state, action);
        default: return state;
    }

};

export default reducer;