import axios from '../axios-config';

export const getFrogs = () => {
    return (dispatch) => {
        axios.get('frogs').then(({ data }) => {
            dispatch({ type: "GET_FROGS", data: data.data });
        });
    }
}