function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    document.getElementById("display").value += operator;
}

function appendDecimal() {
    document.getElementById("display").value += ".";
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function percent() {
}

function toggleSign() {
}

function calculate() {
    const display = document.getElementById("display");

    const lyrics = [
        { text: "I'm gonna", delay: 500 },
        { text: "swallow", delay: 700 },
        { text: "my pride", delay: 1000 },
        { text: "Say I'm sorry", delay: 2000 },
        { text: "Stop pointing", delay: 1000 },
        { text: "fingers", delay: 1000 },
        { text: "The blame", delay: 500 },
        { text: "Is on me", delay: 1500 },
        { text: "I want a new", delay: 1000 },
        { text: "life", delay: 700 },
        { text: "and I want it", delay: 1000 },
        { text: "with you", delay: 1500 },
        { text: "If you feel", delay: 1000 },
        { text: "the same", delay: 1000 },
        { text: "don't ever let", delay: 1000 },
        { text: "it go", delay: 1200 },
        { text: "you gotta believe", delay: 1500 },
        { text: "in the spirit", delay: 1000 },
        { text: "of love", delay: 1000 },
        { text: "It'll heal", delay: 1000 },
        { text: "all things", delay: 1000 },
        { text: "it won't hurt", delay: 1000 },
        { text: "anymore", delay: 1000 },
    ];

    let white = false;

    const flicker = setInterval(() => {
        if (white) {
            display.style.backgroundColor = "white";
            display.style.color = "black";
        } else {
            display.style.backgroundColor = "black";
            display.style.color = "white";
        }

        white = !white;
    }, 100);

    let line = 0;

    function showLine() {
        if (line >= lyrics.length) {
            clearInterval(flicker);

            display.style.backgroundColor = "";
            display.style.color = "";

            return;
        }

        display.value = lyrics[line].text;

        setTimeout(() => {
            line++;
            showLine();
        }, lyrics[line].delay);
    }

    showLine();
}