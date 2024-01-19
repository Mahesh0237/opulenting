export const incNumber = () => {
    return {
        type: 'INCREMENT'
    }
}
export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}
export const resetNumber = () => {
    return {
        type: "reset"
    }
}


export const setAuthStatus = (isLoggedIn) => {
    if (isLoggedIn) {
        localStorage.setItem('userAuthStatusnew', 'true');
    } else {
        localStorage.removeItem('userAuthStatusnew');
    }

    return {
        type: 'SET_AUTH_STATUS',
        payload: isLoggedIn,
    }
}


export const setUserTypeUpdate = (status) => {
    if (status) {
        localStorage.setItem('userTypeUpdateNew', 'true');
    } else {
        localStorage.removeItem('userTypeUpdateNew');
    }

    return {
        type: 'set_user_type',
        payload: status
    }
}


