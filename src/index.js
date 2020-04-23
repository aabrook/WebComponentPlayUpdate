import "./styles.css";

import { html } from "hybrids";

export const settings = {
  counter: 0
};

export const render = settings => {
  return {
    ...settings,
    render: ({ counter }) => html`
      <div>${counter}</div>
    `
  };
};
