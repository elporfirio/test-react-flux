import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class EditStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action){
    switch(action.type){
      case ActionTypes.START_EDIT_TODO:
        return action.id;

      case ActionTypes.END_EDIT_TODO:
        return '';

      default:
        return state;
    }
  }
}

export default new EditStore();
