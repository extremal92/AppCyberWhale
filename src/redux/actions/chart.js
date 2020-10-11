import axios from 'axios'

export const setLoadet = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchChart = () => (dispatch) => {
    dispatch(setLoadet(false));
    axios.get('http://localhost:3001/chart')
    .then(({ data }) => {
        dispatch(setChart(data));
    });
};

export const setChart = (items) => ({
    type: 'SET_CHART',
    payload: items,
})
