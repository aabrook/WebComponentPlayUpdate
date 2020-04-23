import "./styles.css";

import { html } from "hybrids";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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
