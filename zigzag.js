/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    // Edge case
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Create an array for each row
    let rows = new Array(numRows).fill("");

    let currentRow = 0;
    let direction = -1;

    // Traverse the string
    for (let char of s) {
        rows[currentRow] += char;

        // Change direction at the top and bottom rows
        if (currentRow === 0 || currentRow === numRows - 1) {
            direction *= -1;
        }

        currentRow += direction;
    }

    // Combine all rows
    return rows.join("");
}

// Example
const s = "PAYPALISHIRING";
const numRows = 3;

console.log(convert(s, numRows));