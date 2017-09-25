import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export {default as Menu} from './components/Menu/Menu.js';
export {default as Button} from './components/Button/Button.js';