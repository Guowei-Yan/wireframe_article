import { createStore } from 'redux'

function counterReducer(state = { value: 6 }, action:any) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 3 }
    case 'counter/decremented':
      return { value: state.value - 3 }
    default:
      return state
  }
}

let Store = createStore(counterReducer)
export default Store;