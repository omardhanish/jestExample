const initialState = {
    counter: 0
}

const CounterScrenTwoRed = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREASE_COUNTER_2':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER_2':
            return { counter: state.counter - 1 }
    }
    return state
}

export default CounterScrenTwoRed