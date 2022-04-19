class Message {
    private _el: HTMLDivElement;

    constructor() {
        this.hydrate = this.hydrate.bind(this);
        this.update = this.update.bind(this);
    }

    mount(el: HTMLElement) {
        if (!this._el) {
            this._el = document.createElement('div');
            this._el.className = 'message';
            this._el.innerText = 'Hello World!';
        }

        if (this._el.parentNode === el) {
            return;
        }

        el.appendChild(this._el);
        this.hydrate();
    }

    update() {
        this._el ? this._el.innerText = "Clicked!" : null;
    }

    hydrate() {
        this._el.addEventListener('click', this.update);
    }
}

export default Message;