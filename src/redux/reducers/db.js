const initialState = {
    items: [],
    isLoaded: false
}
const db = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DB':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
    
            }
        default:
            return state;
    }
}

export default db;
