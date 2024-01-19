const initialState = {
    isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_STATUS':
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        default:
            return state;
    }
};

