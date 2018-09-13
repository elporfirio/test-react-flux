import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  addTodo(text) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_TODO,
      text,
    })
  },
  deleteTodo(id) {
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_TODO,
      id,
    })
  },
  toggleTodo(id) {
    Dispatcher.dispatch({
      type: ActionTypes.TOGGLE_TODO,
      id,
    })
  },
  updateDraft(text) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_DRAFT,
      text,
    })
  },
  deleteCompletedTodos(){
    Dispatcher.dispatch({
      type: ActionTypes.REMOVE_FINISHED_TODOS,
    })
  },
  toggleAllTodos(){
    Dispatcher.dispatch({
      type: ActionTypes.TOGGLE_ALL,
    })
  },
  startEdit(id){
    Dispatcher.dispatch({
      type: ActionTypes.START_EDIT_TODO,
      id,
    })
  },
  endEdit(){
    Dispatcher.dispatch({
      type: ActionTypes.END_EDIT_TODO,
    })
  },
  saveUpdatedTodo(text){
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_EDIT_TODO,
      text,
    })
  }
};

export default Actions;
