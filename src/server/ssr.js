import fs from 'fs';
import { basename, join } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { resetIdCounter } from 'react-tabs';
// Redux
// import {push} from 'react-router-redux';
import createStore from '../universal/redux/createStore';
const history = require('history').createMemoryHistory();

// Components
import Html from './Html.js';

function renderApp(url, res, store, assets) {
	const context = {};
	
	resetIdCounter();
	const html = renderToString(
		<Html
			title='Cabin of Pilot'
			store={store}
			url={url}
			context={context}
			assets={assets}
		/>
	);

	res.send('<!DOCTYPE html>'+html);
}

export const renderPage = function (req, res) {
	const store  = createStore(history);

	const assets = require('../../build/assets.json');

	assets.manifest.text = fs.readFileSync(
		join(__dirname, '..', '..', 'build', basename(assets.manifest.js)),
		'utf-8'
	);

	renderApp(req.url, res, store, assets);
};

export const renderDevPage = function (req, res) {
	const store = createStore(history);
	renderApp(req.url, res, store);
};

export default renderPage;
