import { html, define } from "hybrids";

export const settings = {
  source: '',
  height: 300,
  width: 380
};

export const render = ()=> {
  console.log('rendering the spotify button')
  return {
    ...settings,
    render: ({ source, width, height }) => html`
      <iframe
        src="${source}"
        width="${width}"
        height="${height}"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    `
  };
};

define('spotify-button', render())
