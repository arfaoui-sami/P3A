import * as Actions from '../actions/constantes'


const initialState = {
    token: localStorage.getItem('jwt'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    error: null
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOGOUT_SUCCESS:
            return {
                token: localStorage.getItem('jwt'),
                isAuthenticated: null,
                isLoading: false,
                user: null
            };
        case Actions.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case Actions.USER_LOADED:
            return {
                ...state,
                token: action.token,
                isAuthenticated: true,
                isLoading: false,
                user: { id: action.user.data._id, name: action.user.data.name, type: action.user.data.type },
                error: null

            };


        case Actions.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
                user: { id: action.payload.id, name: action.payload.name, type: action.payload.type },
                error: null
            };
        case Actions.AUTH_ERROR:
        case Actions.LOGIN_FAIL:
            return {
                ...state,

                isAuthenticated: false,
                isLoading: false,
                user: null,
                error: action.payload

            };
        default: return state;




    }
}
export default UserReducer