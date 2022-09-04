const initialState = {
    counter: 0
}

const SplashReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}

export default SplashReducer