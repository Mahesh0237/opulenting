
const initialState = {
    userTypeUpdateNew: false,
};

export const userUpdate = (state = initialState, action) => {
    switch (action.type) {
        case 'set_user_type':
            return {
                ...state,
                userTypeUpdateNew: action.payload,
            };
        default:
            return state;
    }
};