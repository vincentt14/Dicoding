class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar bg-light pb-4">
        <div class="container-fluid">
          <form class="d-flex mx-auto" role="search">
            <input class="form-control me-2" type="search" placeholder="Search Food Name" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    `;
  }
}

customElements.define('search-bar', SearchBar);