# Redux In JavaScript


## Creating Store
1. Store is the main thing used in Redux.
2. Store can be accessed all over the application.
3. Store always needs a reducer.

`import { createStore } from "redux";`

`const store = createStore(reducer);`

## Reducer
1. Reducer is a function.
2. Reducer takes the previous state and action, and returns the new state.

```javascript
function reducer(state = { amount: 1 }, action) {
  return state; // Returning the new state
}
```

`console.log(store.getState()); // .getState() is the method to check the global state`

## Actions

Action is event dependent thing in Redux it's a very simple thing to create simply in curly braces you have to define the action type and dispatch `{type : "increment" }`

## Dispatch

Dispatch is some thing like event have you seen before in JavaScript this the basically when you actually call and what to call in action `store.dispatch({type : "increment" })`


## Full Example 

```javascript
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



```


## ApplyMiddleware

applymiddleware is another important concept in Redux .

## 1. applymiddleware using with redux logger

Redux Logger provide us the full detail of our global state when ever any change revert in reducer

1. First of all you have to a npm package `redux-logger`
2. import redux logger `import logger from "redux-logger";`
3. Configure this with the Store `const store = createStore(reducer , applyMiddleware(logger.default));`


## Code:


```javascript
import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";


const store = createStore(reducer , applyMiddleware(logger.default));
```





