
import axios from 'axios'

export const setLoadet = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchDb = (category, sortBy) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false
    });
    axios.get(`http://localhost:3001/database?${category !== null ? `_sort=${category}` : '' }&_start=0&_limit=${sortBy.type}`)
    .then(({ data }) => {
        dispatch(setDb(data));
    });
};

export const setDb = (items) => ({
    type: 'SET_DB',
    payload: items,
})
