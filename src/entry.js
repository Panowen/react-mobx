import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import 'antd/dist/antd.css';
import './style/app.scss';
import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Component/>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('Accepting the updated printMe module!');
    render(App);
  });
}
