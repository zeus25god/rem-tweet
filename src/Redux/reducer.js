import { Do_Tweet } from './types'
const initState = {
    notw: 0,
    twmsg: []
}
const twet = (state = initState, action) => {
    switch (action.type) {
        case Do_Tweet:
            return {
                ...state,
                notw: state.notw + 1
            }
        default:
            return state
    }

}
export default twet