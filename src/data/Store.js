import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import Counter from '../utils/Counter';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

import Todo from './Todo';

class Store extends ReduceStore {
  constructor(){
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action){
    switch(action.type) {
      case ActionTypes.ADD_TODO:
        if(!action.text){
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Todo({
          id,
          text: action.text,
          complete: false,
        }));
      case ActionTypes.REMOVE_TODO:
        return state.delete(action.id);
      case ActionTypes.TOGGLE_TODO:
        return state.update(action.id,
          todo => todo.set('complete', !todo.complete));
      case ActionTypes.REMOVE_FINISHED_TODOS:
        return state.filter(todo => !todo.complete);
      case ActionTypes.TOGGLE_ALL:
        const completed = state.every(todo => todo.complete);
        return state.map(todo => todo.set('complete', !completed));
      default:
          return state;
    }
  }
}

export default new Store();
