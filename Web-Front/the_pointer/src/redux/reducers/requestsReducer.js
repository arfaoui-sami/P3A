import * as Actions from '../actions/constantes'


const initialState = {
    id: null,
    isLoading: false,
    tasks: [],
    error: null
};


const RequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADING_TASKS:
            return {
                ...state,
                isLoading: true,
            };
        case Actions.TASKS_LOADED:
            return {
                ...state,
                isLoading: false,
                tasks: action.payload
            };
        case Actions.TASKS_LOADED_SUCCESS:
            return {
                ...state
            }
        case Actions.LOADED_TASKS_FAIL:
            return {};
        case Actions.UPDATE_TASKS_STATUS:
            return {
                ...state
            };
        case Actions.UPDATE_TASKS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default: return state;

    }
}


export default RequestReducer