import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/* MATERIALIZE */
import 'materialize-css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
/* == */
import Container from './containers/Container';
import Actions from './data/Actions';

ReactDOM.render(<Container />, document.getElementById('root'));


Actions.addTodo('una task');
Actions.addTodo('dos task');
Actions.addTodo('tres task');

registerServiceWorker();
