import axios from '../axios-config';

export const getFrogs = () => {
    return (dispatch) => {
        axios.get('frogs').then(({ data }) => {
            dispatch({ type: "GET_FROGS", data: data.data });
        });
    }
}

export const getDucks = () => {
    return (dispatch) => {
        axios.get('ducks').then(({ data }) => {
            dispatch({ type: "GET_DUCKS", data: data.data });
        });
    }
}