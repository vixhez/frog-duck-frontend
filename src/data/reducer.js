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
    traitInputs: action.data.traitInputs,
    quizComplete: true,

    extroversionScore:
        state.extroversionScore +
        ((action.data.traitInputs.extroversion1 !== 'high' ? (action.data.traitInputs.extroversion1 === 'medium' ? 0 : -2.5) : 2.5) + (action.data.traitInputs.extroversion2 !== 'high' ? (action.data.traitInputs.extroversion2 === 'medium' ? 0 : -2.5) : 2.5)),
    generosityScore:
        state.generosityScore +
        ((action.data.traitInputs.generosity1 !== 'high' ? (action.data.traitInputs.generosity1 === 'medium' ? 0 : -2.5) : 2.5) + (action.data.traitInputs.generosity2 !== 'high' ? (action.data.traitInputs.generosity2 === 'medium' ? 0 : -2.5) : 2.5)),
    activenessScore:
        state.activenessScore +
        ((action.data.traitInputs.activeness1 !== 'high' ? (action.data.traitInputs.activeness1 === 'medium' ? 0 : -2.5) : 2.5) + (action.data.traitInputs.activeness2 !== 'high' ? (action.data.traitInputs.activeness2 === 'medium' ? 0 : -2.5) : 2.5)),
    colourfulnessScore:
        state.colourfulnessScore +
        ((action.data.traitInputs.colourfulness1 !== 'high' ? (action.data.traitInputs.colourfulness1 === 'medium' ? 0 : -2.5) : 2.5) + (action.data.traitInputs.colourfulness2 !== 'high' ? (action.data.traitInputs.colourfulness2 === 'medium' ? 0 : -2.5) : 2.5))
});

const showAllDucksReducer = (state, action) => ({
    ...state,
    showAllDucks: true,
    quizComplete: true
});

const showAllFrogsReducer = (state, action) => ({
    ...state,
    showAllFrogs: true,
    quizComplete: true
})

const fetchDuckAlterEgo = (state, action) => {
    let threeFiltersRemaining = state.ducks.filter(duck =>
        duck.extroversion === (Math.ceil(state.extroversionScore) || Math.ceil(state.extroversionScore + 1) || Math.ceil(state.extroversionScore - 1)));

    let twoFiltersRemaining = threeFiltersRemaining.filter(duck =>
        duck.generosity === (Math.ceil(state.generosityScore) || Math.ceil(state.generosityScore + 1) || Math.ceil(state.generosityScore - 1)));


    let oneFilterRemaining = twoFiltersRemaining.filter(duck =>
        duck.activeness === (Math.ceil(state.activenessScore) || Math.ceil(state.activenessScore + 1) || Math.ceil(state.activenessScore - 1)));

    let alterEgoResult = oneFilterRemaining.filter(duck =>
        duck.colourfulness === (Math.ceil(state.colourfulnessScore) || Math.ceil(state.colourfulnessScore + 1) || Math.ceil(state.colourfulnessScore - 1)));

    return {
        ...state,
        duckAlterEgo: alterEgoResult
    }
}

const fetchFrogAlterEgo = (state, action) => {
    let threeFiltersRemaining = state.frogs.filter(frog =>
        frog.extroversion === (Math.ceil(state.extroversionScore) || Math.ceil(state.extroversionScore + 1) || Math.ceil(state.extroversionScore - 1)));

    let twoFiltersRemaining = threeFiltersRemaining.filter(frog =>
        frog.generosity === (Math.ceil(state.generosityScore) || Math.ceil(state.generosityScore + 1) || Math.ceil(state.generosityScore - 1)));


    let oneFilterRemaining = twoFiltersRemaining.filter(frog =>
        frog.activeness === (Math.ceil(state.activenessScore) || Math.ceil(state.activenessScore + 1) || Math.ceil(state.activenessScore - 1)));

    let alterEgoResult = oneFilterRemaining.filter(frog =>
        frog.colourfulness === (Math.ceil(state.colourfulnessScore) || Math.ceil(state.colourfulnessScore + 1) || Math.ceil(state.colourfulnessScore - 1)));

    return {
        ...state,
        frogAlterEgo: alterEgoResult
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_FROGS": return getFrogs(state, action);

        case "GET_DUCKS": return getDucks(state, action);

        case "SUBMIT_QUIZ": return submitQuiz(state, action);

        case "SHOW_ALL_DUCKS": return showAllDucksReducer(state, action);

        case "SHOW_ALL_FROGS": return showAllFrogsReducer(state, action);

        case "FETCH_DUCK_ALTER_EGO": return fetchDuckAlterEgo(state, action);

        case "FETCH_FROG_ALTER_EGO": return fetchFrogAlterEgo(state, action);

        default: return state;
    }

};

export default reducer;