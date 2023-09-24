import {legacy_createStore as createStore} from 'redux'
import myReducer from './Reducer/myReducer';

let myreduxstore = createStore(myReducer);
console.log(myreduxstore.getState());

myreduxstore.subscribe(()=>{
    console.log(myreduxstore.getState());
})
export default myreduxstore;