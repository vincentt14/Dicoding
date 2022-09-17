class JudulApp extends HTMLElement {
    // constructor() {
    //     super();
    //     this.shadowDOM = this.attachShadow({
    //         mode: 'open'
    //     });
    // }

    connectedCallback() {
        this.render();
    }

    render() {
        // this.shadowDOM.innerHTML = `
        this.innerHTML = `
        <div class="container-fluid bg-light headers">
            <span class="navbar-brand h1">FOOD PEDIA</span>
            <h2> <i>- A wikipedia for your <span class="beda">favorite</span> foods -</i> </h2>
            <div class="mx-auto text-success haer">
            <hr>
            </div>
        </div>
        `;
    }
}

customElements.define('judul-app', JudulApp);