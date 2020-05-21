// templates --> main.js

import {html} from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

const dplNotice = (state) => {
  const title = encodeURIComponent('Extraction failed');
  return state.parserMessage === '' ? '' : html`
    <span class="error">${state.parserMessage}</span>
    <a href="https://github.com/ndaidong/oembed-parser/issues/new?title=${title}" target="_blank">Report</a>
  `;
};

const showJsonResult = (json) => {
  return json === '' ? '' : unsafeHTML(`
    <iframe id="ifcontent"></iframe>
  `);
};

const clearInput = () => {
  const inputUrl = document.getElementById('inputUrl');
  inputUrl.value = '';
};

const onSubmit = (e, state) => {
  e.preventDefault();
  const btnExtract = document.getElementById('btnExtract');
  if (btnExtract.classList.contains('disable')) {
    return false;
  }
  const inputUrl = document.getElementById('inputUrl');
  const url = inputUrl.value.trim();
  const {
    link = '',
  } = state;
  if (link === url) {
    return false;
  }
  window.App.parse(url, btnExtract);
};


export const tplMain = (state) => {
  return html`<main>
    <form @submit=${(e) => onSubmit(e, state)}">
      <fieldset class="input">
        <legend>Enter link to valid oEmbed URL:</legend>
        <input
          type="url"
          @dblclick=${clearInput}
          id="inputUrl"
          placeholder="https://..."
        >
        <button type="submit" id="btnExtract">Extract</button>
      </fieldset>
    </form>
    <div class="notice">
      ${dplNotice(state)}
    </div>
    <fieldset class="output">
      <legend>Result will display here:</legend>
      <div class="result-box">
        ${showJsonResult(state.oEmbedJson)}
      </div>
    </fieldset>
  </main>`;
};

