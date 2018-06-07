import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '../assets/style/globalStyles';

import Providers from './providers';

const root = document.getElementById('root');

const render = (Providers) => {
	ReactDOM.render(
		<AppContainer>
			<Providers/>
		</AppContainer>,
		root
	);
};
render(Providers);

if(module.hot){
	module.hot.accept('./providers.jsx', () => {
		render(root);
	});
}
