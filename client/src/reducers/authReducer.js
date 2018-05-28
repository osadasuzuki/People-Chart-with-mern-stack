import {USER_AUTHENTICATE, USER_REGISTER} from '../actions/types';

export default function(state=null,action){

  switch(action.type){
    default:
      return state;
    
    case USER_AUTHENTICATE:
      return action.payload || false ;

    case USER_REGISTER:
      return action.payload || false ;
      
  }
}