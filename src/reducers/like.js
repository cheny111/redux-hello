let  likes = [
  '1','2'
   ]
export default function likeReducer(state = likes,action){
  switch (action.type) {
    case 'xxx':
      return [...state,action.comment]
    default:
      return state;
  }
}
