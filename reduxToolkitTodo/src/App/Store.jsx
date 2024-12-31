import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});



//redux is a diff library of js ,
// redux-toolkit is a better version of redux and
//  react-redux is implementation which used to vired with react
// it is used to pass the data from parent element to child element using store , like context API 

/** 
steps to use it
1.make a store using config ,all data present here
2.make slice it provide functionality using reducers ,it needed three props name,initaialState and reducers
3.use according to our need ,
if we need to send something to store we use useDispatch and when we need to get somethng then we useSelector 
4.we dirextly implement through main.jsx file ,we need to wrap the app using provider and give it props like store and it value


*/