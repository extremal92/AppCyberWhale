const initialState = {
    items: [],
    isLoaded: false
}
const chart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHART':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
    
            }
        default:
            return state;
    }
}

export default chart;
