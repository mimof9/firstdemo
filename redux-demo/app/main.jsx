import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import reducer from './reducer';

// 通过Redux提供的createStore方法创建store 该方法接收reducer作为参数
// Store
const store = createStore(reducer);

// 为了把store传入组件，必须使用Redux提供的Provider组件在应用的最外面，包裹一层
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.body.appendChild(document.createElement('div'))
);
