let  comments = [
    "hello",
    "world"
   ]
export default function commentReducer(state = comments,action){
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,action.comment]
    default:
      return state;
  }
}
