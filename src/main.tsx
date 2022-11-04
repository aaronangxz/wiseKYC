import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import store from 'modules/store';
import App from 'layouts/index';

import 'tdesign-react/es/style/index.css';
import './styles/theme.less';
import './styles/index.less';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

renderApp();
