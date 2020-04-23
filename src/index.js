class Counter extends HTMLElement {
  getAttributes() {
    return this.getAttributeNames().reduce((names, name) => ({ ...names, [name]: this.getAttribute(name) }), {})
  }

  constructor() {
    super()

    const { title } = this.getAttributes()
    var root = this.attachShadow({mode: 'open'});
    const p = document.createElement('p')
    p.innerHTML = `<h1>${title || Title}</h1>`
    root.appendChild(p);
  }
}
var XComponent = customElements.define('my-counter', Counter);
