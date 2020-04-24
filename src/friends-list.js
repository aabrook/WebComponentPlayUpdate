class FriendsList extends HTMLElement {
  getAttributes() {
    return this.getAttributeNames().reduce((names, name) => ({ ...names, [name]: this.getAttribute(name) }), {})
  }

  constructor() {
    super()

    const { title, friends } = this.getAttributes()
    var root = this.attachShadow({mode: 'open'});
    const p = document.createElement('div')
    p.innerHTML = `
      <h1>${title || 'Title'}</h1>
      ${(friends || '').split('\n').map(friend => friend)}
    `
    root.appendChild(p);
  }
}
var XComponent = customElements.define('friends-list', FriendsList);

