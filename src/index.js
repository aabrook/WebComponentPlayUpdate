// import "./styles.css";
//
// import { html, define } from "hybrids";
//
// export const settings = {
//   counter: 0
// };
//
// export const render = settings => {
//   return {
//     ...settings,
//     render: ({ counter }) => html`
//       <div>
//         My suhweet counter: ${counter}
//       </div>
//     `
//   };
// };
//
// define('counter', render())
//
var XComponent = customElements.define('counter', {
    prototype: Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function() {
          var root = this.createShadowRoot();
          const p = document.createElement('p')
          p.innerHTML = '<h1>Sup!</h1>'
          root.appendChild(clone);
        }
      }
    })
  });
