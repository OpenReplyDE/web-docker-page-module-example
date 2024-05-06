import "./page-module.css";

export const html = `
  <div class="card" >
    <h1>Page Module</h1>
    <p>This is a page module</p>
  </div>
`;
class PageModule extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}

if (!window.customElements.get("page-module")) {
  window.customElements.define("page-module", PageModule);
} else {
  console.warn("Page Module already defined");
}
