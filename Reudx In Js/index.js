import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";


const store = createStore(reducer , applyMiddleware(logger.default));

function reducer (state = {amount : 1} , action) // state and action in params
{
  if (action.type === "increment")
  {
    return {amount : state.amount + 1}
  }
  return state // Returning the new state
}

setInterval(()=>{
  store.dispatch({type : "increment"});
  
  console.log(store.getState());
  
},2000)


