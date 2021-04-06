import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchSushi = (category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });
    axios.get(`sushi?${category !== null ?` category=${category}` : ''}`)
        .then(({data}) => {
            dispatch(setSushis(data));
        });
};

export const setSushis = (items) => ({
    type: 'SET_SUSHIS',
    payload: items,
});