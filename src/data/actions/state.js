export const submitQuiz = (data) => {
    return {
        type: "SUBMIT_QUIZ",
        data: data,
    }
}

export const showAllDucks = (data) => {
    return {
        type: "SHOW_ALL_DUCKS"
    }
}

export const showAllFrogs = (data) => {
    return {
        type: "SHOW_ALL_FROGS"
    }
}

export const fetchDuckAlterEgo = (data) => {
    return {
        type: "FETCH_DUCK_ALTER_EGO"
    }
}

export const fetchFrogAlterEgo = (data) => {
    return {
        type: "FETCH_FROG_ALTER_EGO"
    }
}