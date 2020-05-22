const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
      
        default:
            return state;
    }
}
export const setUserData = (id, email, login ) => ({ type: SET_USER_DATA, data: {id, email, login } });


export default authReducer;