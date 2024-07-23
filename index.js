let string = prompt('Enter some string');
let charsToRemove = prompt('Enter some chars that you want to remove').split(',').map(function(char) {
    return char.trim();
});

console.log(charsToRemove);

function removeChars(str, charsToRemove) {
    let result = '';

    for (let i = 0; i < str.length; i++) {

        if (!charsToRemove.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}

console.log(removeChars(string, charsToRemove));