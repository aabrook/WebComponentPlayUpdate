import "./styles.css";

import { html, define } from "hybrids";

export const settings = {
  counter: 0
};

export const render = settings => {
  return {
    ...settings,
    render: ({ counter }) => html`
      <div>
        My suhweet counter: ${counter}
      </div>
    `
  };
};

define('counter', render())
