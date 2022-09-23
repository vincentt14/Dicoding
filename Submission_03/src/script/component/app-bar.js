class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-fluid headers" id="judul-bar">
            <span class="navbar-brand h1">FOOD PEDIA</span>
            <h2> <i>- A wikipedia for your <span class="beda">favorite</span> foods -</i> </h2>
            <div class="mx-auto text-success haer">
                <hr>
            </div>
        </div>
        `;
  }
}

customElements.define('app-bar', AppBar);