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
      <table>
        <tr><td>Friend</td><td></td></tr>
      ${(friends || '').split('\\n').map(([name, avatar]) => `
        <tr><td>${name}</td><td><img src="${avatar}"></tr>
      `)}
      </table>
    `
    root.appendChild(p);
  }
}
var XComponent = customElements.define('friends-list', FriendsList);

