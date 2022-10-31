const amountHolder = document.querySelector("#amount");
const givenAmountHolder = document.querySelector("#given");
const checkButton = document.querySelector(`#calculate`);
const table = document.querySelector("#table");
const row = document.querySelector("#row");

checkButton.addEventListener("click", () => {
    let billAmount = amountHolder.value;
    let givenAmount = givenAmountHolder.value;

    let notesCount = calculateNotes(billAmount, givenAmount);
    console.log(notesCount);
    displayNote(notesCount);
});

function displayNote(notesCount) {
    const obj = {
        2000: "a",
        500: "b",
        200: "c",
        100: "d",
        50: "e",
        20: "f",
        10: "g",
        5: "h",
        1: "i",
    };
    for (const [key, value] of notesCount) {
        document.querySelector(`#${obj[key]}`).textContent = value;
        console.log(key, value);
    }
}

function calculateNotes(billAmount, givenAmount) {
    let map = new Map();
    let returnAmount = givenAmount - billAmount;
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
    let index = 0;
    while (returnAmount > 0) {
        let cnt = Math.floor(returnAmount / notes[index]);
        map.set(notes[index], cnt);
        returnAmount -= cnt * notes[index];
        index++;
    }
    return map;
}
