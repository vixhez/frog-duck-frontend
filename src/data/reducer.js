import { showAllDucks, showAllFrogs } from "./actions/state";

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

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_FROGS": return getFrogs(state, action);
        case "GET_DUCKS": return getDucks(state, action);
        case "SUBMIT_QUIZ": return submitQuiz(state, action);
        case "SHOW_ALL_DUCKS": return showAllDucksReducer(state, action);
        case "SHOW_ALL_FROGS": return showAllFrogsReducer(state, action);
        default: return state;
    }

};

export default reducer;