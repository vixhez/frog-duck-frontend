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