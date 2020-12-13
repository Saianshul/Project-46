class Form1 {
    constructor() {
        this.title = createElement('h2');
        this.button1 = createButton('Single Player');
        this.button2 = createButton('Multiplayer');
    }

    hide() {
        this.title.hide();
        this.button1.hide();
        this.button2.hide();
    }

    display() {
        this.title.html("Gravity Guy");
        this.title.position(displayWidth/2 - 50, 0);

        this.button1.position(displayWidth/2 - 110, displayHeight/2 - 50);
        this.button2.position(displayWidth/2 + 50, displayHeight/2 - 50);

        this.button1.mousePressed(() => {
            this.button1.hide();
            this.button2.hide();
        });

        this.button2.mousePressed(() => {
            this.button1.hide();
            this.button2.hide();

            gameState = 1;
        });
    }
}