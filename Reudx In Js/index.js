import { createStore } from "redux";
const store = createStore(reducer);


function reducer (state = {amount : 1} , action) // state and action in params
{
  if (action.type === "increment")
  {
    return {amount : state.amount + 1}
  }
  return state // Returning the new state
}


store.dispatch({type : "increment"});



setInterval(()=>{
  
  console.log(store.getState());// .getState is the method to check global state
},2000)


