const template = document.createElement('template');

template.innerHTML = `
  <style>
    .shadow-class {
      color: blue;
    }
    #out {
      color: blue;
    }
  </style>
  <div>
    Inside shadow DOM without CSS inside shadow.
  </div>
  <div class="shadow-class">
    Inside shadow DOM with CSS inside shadow.
  </div>
`;

class NormalElement extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('normal-element', NormalElement);
