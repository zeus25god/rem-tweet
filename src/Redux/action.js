import { Do_Tweet } from './types'
import { Msg } from './types'
export const doTweet = () => {
    return {
        type: Do_Tweet
    }
}
export const doMsg = () => {
    return {
        type: Msg
    }
}