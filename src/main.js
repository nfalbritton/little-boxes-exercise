import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';

let wrapperParagraph = 'Lorem ipsum dolor sit amet...'

ReactDOM.render(
  <div>
    <Wrapper
      header='I am the Wrapper'
      paragraph={wrapperParagraph}
    />
  </div>,
  document.getElementById('app')
);
