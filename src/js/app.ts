class TextSwitcher {
    element: Element;
    texts: string[];
    period: number;
    text: string = '';
    isDeleting: boolean = false;
    loopNum: number = 0;

    constructor(element: Element, texts: string[], period: number = 2000) {
        this.element = element;
        this.texts = texts;
        this.period = period;
        this.tick();
    }

    tick() {
        const fullText = this.texts[this.loopNum];
        if (this.isDeleting) {
            this.text = fullText.substr(0, this.text.length - 1);
        } else {
            this.text = fullText.substr(0, this.text.length + 1);
        }
        this.element.innerHTML = '<span class="cursor__wrapper">' + this.text + '</span>';
        let delta = 300 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.text == fullText) {
            delta = this.period;
            this.isDeleting = true;
        } else if(this.isDeleting && this.text.length == 0) {
            this.isDeleting = false;
            if (this.loopNum + 1 >= this.texts.length) {
                this.loopNum = 0;
            } else {
                this.loopNum++;
            }
            delta = 500;
        }
        setTimeout(() => this.tick(), delta);
    }
}

window.onload = function () {
    const elements = document.getElementsByClassName('text-switcher');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let text = elements[i].getAttribute('data-texts');
        const texts: string[] = text.split('|');
        const period: number = parseInt(elements[i].getAttribute('data-period'), 10) || 2000;
        if (texts) {
            new TextSwitcher(element, texts, period);
        }
    }
};