const template = document.createElement('template');

template.innerHTML = `
  <style>
    .shadow-class {
      color: blue;
    }
  </style>
  <div>
    This is in shadow DOM.
  </div>
  <div class="shadow-class">
    This is in shadow with shadow CSS.
  </div>
`;

class AShadow extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('a-shadow', AShadow);
