var run = false;

async function* sequence() {
    yield {"text": "senior box|", "wait": 500};
    yield {"text": "senior bo|", "wait": 600};
    yield {"text": "senior bo<span id=\"highlighted\">c</span>|", "wait": 100};
    yield {"text": "senior bo<span id=\"highlighted\">ck</span>|", "wait": 100};
    yield {"text": "senior bo<span id=\"highlighted\">cks</span>|", "wait": 100};
    yield {"text": "senior bo<span id=\"highlighted\">cks </span>|", "wait": 100};
    yield {"text": "senior bo<span id=\"highlighted\">cks :</span>|", "wait": 100};
    yield {"text": "senior bo<span id=\"highlighted\">cks :3</span>|", "wait": 100};
    yield {"text": "senior bo<span id=\"highlighted\">cks :3</span>", "wait": 500};
}

const element = document.getElementById("fptTitle");

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

element.addEventListener("animationend", async () => {
    if (!run) {
        run = true;
        for await (const i of sequence()) {
            await timeout(i.wait);
            element.innerHTML = i.text;
        } 
    }
});