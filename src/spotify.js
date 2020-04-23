import { html } from "hybrids";

export const render = settings => {
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
