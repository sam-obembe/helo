const initialState = {
  username: "",
  id: "",
  profilepic:"",
}

//actionTypes
const UPDATE_USER_INFO = "UPDATE_USER_INFO"



//actionCreators
export const updateUserInfo = (id,username,profilepic)=>{
  return{
    type: UPDATE_USER_INFO,
    payload: {
      id,
      username,
      profilepic
    }
  }
}

export default function reducer(state=initialState,action){
  switch(action.type){
    case UPDATE_USER_INFO:
      return Object.assign({}, state, action.payload)
    default: return state
  }
}