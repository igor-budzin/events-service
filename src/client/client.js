import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Components
import App from './containers/AppContainer.js';
// Redux
import { Provider } from 'react-redux';
import createStore from '../universal/redux/createStore.js';
const history = require('history').createBrowserHistory();

const store = createStore(history);

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

renderApp(App);

// Hot reload
if (module.hot) {
  module.hot.accept('./containers/AppContainer.js', () => {
    const nextApp = require('./containers/AppContainer.js');
    renderApp(nextApp);
  });
}

