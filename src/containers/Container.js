import Actions from '../data/Actions';
import EditStore from '../data/EditStore';
import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import Store from '../data/Store';
import DraftStore from '../data/DraftStore';

const getStores = () => {
  return [
    DraftStore,
    Store
  ];
};

const getState = () => {
  return {
    todos: Store.getState(),
    draft: DraftStore.getState(),
    editing: EditStore.getState(),

    /** Form Actions **/
    onSubmitNewDraft: Actions.addTodo,
    onChangeNewDraft: Actions.updateDraft,
    /** == **/

    onDeleteTodo: Actions.deleteTodo,
    onToggleTodo: Actions.toggleTodo,

    /** Footer **/
    onDeleteCompletedTodos: Actions.deleteCompletedTodos,
    /** == **/

    /** Header **/
    onToggleAllTodos: Actions.toggleAllTodos,
    /** == **/

    /** Edit **/
    onStartEdit: Actions.startEdit,
    onEndEdit: Actions.endEdit,
    onSubmitUpdatedDraft: Actions.saveUpdatedTodo,
    /** == **/
  }
};

export default Container.createFunctional(AppView, getStores, getState);
