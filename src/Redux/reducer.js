import { Do_Tweet, Msg } from './types'
const initState = {
    notw: 0,
    msgw: []
}
const twet = (state = initState, action) => {
    switch (action.type) {
        case Do_Tweet:
            return {
                ...state,
                notw: state.notw + 1
            }
        case Msg:
            return {
                ...state,
                msgw: state.msgw + ''
            }
        default:
            return state
    }

}

export default twet