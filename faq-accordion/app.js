let prev_paraID = 'p-q1';
let prev_plusID = 'plus-q1';
let prev_minusID = 'minus-q1';

switchDisplay = (questionID) => {
    // Store ID values from selected question.
    let paraID = 'p-' + questionID;
    let plusID = 'plus-' + questionID;
    let minusID = 'minus-' + questionID;

    if (prev_paraID === paraID && document.getElementById(paraID).style.display !== 'none') {
        // If user clicked an open accordian, close it.
        document.getElementById(paraID).style.display = 'none';
        document.getElementById(plusID).style.display = 'flex';
        document.getElementById(minusID).style.display = 'none';
    } else {
        // If user clicked a closed accordian, close previous and open new.
        // Close previous accordian.
        document.getElementById(prev_paraID).style.display = 'none';
        document.getElementById(prev_plusID).style.display = 'flex';
        document.getElementById(prev_minusID).style.display = 'none';

        // Open new accordian.
        document.getElementById(paraID).style.display = 'flex';
        document.getElementById(plusID).style.display = 'none';
        document.getElementById(minusID).style.display = 'flex';
    }

    // Save current state for future comparison.
    prev_paraID = paraID;
    prev_plusID = plusID;
    prev_minusID = minusID;
}