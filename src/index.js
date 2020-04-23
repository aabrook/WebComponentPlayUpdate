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

import { html, define } from 'https://unpkg.com/hybrids@4.3.7/src';

export function increaseCount(host) {
  host.count += 1;
}

export const SimpleCounter = {
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `,
};

define('simple-counter', SimpleCounter);
