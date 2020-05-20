// helpers -> writer.js

const CSS = `
  html, body {
    margin: 0px;
    padding: {PADDING}px;
    background-color: #000033;
    color: #ffa;
    font-family: courier;
    overflow: auto;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
  img {
    max-width: 100%;
  }
`;

const setContent = (json, ifr) => {
  const padding = json.match(/^<iframe(.*)<\/iframe>/i) ? 0 : 10;
  const css = CSS.replace('{PADDING}', padding);
  const ed = ifr.contentWindow.document;
  ed.open();
  ed.write(`
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        <pre><code class="json">${json}</code></pre>
      </body>
    </html>`);
  ed.close();
};


export default {
  setContent,
};
