import { userActioTypes } from './user.types'

export const setCurrentUser = user => ({
    type : userActioTypes.SET_CURRENT_USER ,
    payload : user
});