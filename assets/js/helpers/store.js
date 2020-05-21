// helpers -> store.js

import {escapeHTML} from 'bellajs';

const createStore = () => {
  const state = {
    title: 'oEmbed Parser',
    author: '@ndaidong',
    authorLink: 'https://twitter.com/ndaidong',
    overlayMessage: '',
    parserMessage: '',
    oEmbedJson: '',
    link: '',
  };


  const setOEmbed = (oEmbedJson) => {
    oEmbedJson.html = escapeHTML(oEmbedJson.html);
    state.oEmbedJson = JSON.stringify(oEmbedJson, undefined, '  ');
    return state;
  };

  const unsetOEmbed = () => {
    state.parserMessage = '';
    state.oEmbedJson = '';
    state.link = '';
    return state;
  };

  const getState = () => {
    return state;
  };

  const init = async () => {
    unsetOEmbed();
    return getState();
  };

  return {
    init,
    setParserMessage: (txt) => {
      state.parserMessage = txt;
      return state;
    },
    setOEmbed,
    unsetOEmbed,
    getState,
  };
};

export default createStore();
