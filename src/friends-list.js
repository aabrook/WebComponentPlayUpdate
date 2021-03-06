class FriendsList extends HTMLElement {
  getAttributes() {
    return this.getAttributeNames().reduce((names, name) => ({ ...names, [name]: this.getAttribute(name) }), {})
  }

  constructor() {
    super()

    const { className, title, friends, width } = this.getAttributes()
    var root = this.attachShadow({mode: 'open'});
    const p = document.createElement('div')
    p.innerHTML = `
      <h1>${title || 'Title'}</h1>
      <table class="${className || ''}" style="width:${width || '320px'}">
        <tr><td>Friends</td><td></td></tr>
      ${(friends || '')
        .split('\\n')
        .map(result => result.split(';'))
        .map(([name, avatar]) => `
          <tr><td><img src="${avatar}" height="50" width="50"><td>${name}</td></tr>
        `)}
      </table>
    `
    root.appendChild(p);
  }
}
var XComponent = customElements.define('friends-list', FriendsList);

