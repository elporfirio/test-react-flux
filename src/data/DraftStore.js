import { ReduceStore } from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class DraftStore extends ReduceStore {
  constructor(){
    super(Dispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action){
    switch(action.type) {
      case ActionTypes.ADD_TODO:
        return '';
      case ActionTypes.UPDATE_DRAFT:
        return action.text;
      default:
          return state;
    }
  }
}

export default new DraftStore();
