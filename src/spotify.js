// import { html, define } from "hybrids";
//
// export const settings = {
//   source: '',
//   height: 300,
//   width: 380
// };
//
// export const render = ()=> {
//   return {
//     ...settings,
//     render: ({ source, width, height }) => html`
//       <iframe
//         src="${source}"
//         width="${width}"
//         height="${height}"
//         frameborder="0"
//         allowtransparency="true"
//         allow="encrypted-media"
//       ></iframe>
//     `
//   };
// };

// define('spotify-button', render())

class SpotifyPlaylist extends HTMLElement {
  getAttributes() {
    return this.getAttributeNames().reduce((names, name) => ({ ...names, name: this.getAttribute(name) }), {})
  }

  constructor() {
    super()

    const { source, height, width } = this.getAttributes()

    var root = this.attachShadow({mode: 'open'});
    const p = document.createElement('div')
    const html = `<iframe
        src="${source}"
        width="${width}"
        height="${height}"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    `
    p.innerHTML = html
    root.appendChild(p);
  }
}

customElements.define('spotify-playlist', SpotifyPlaylist);
