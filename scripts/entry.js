
import React from 'react';
import ReactDOM from 'react-dom';
import App from './application';

require('../css/main.css');

function initApp() {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
}

initApp();
