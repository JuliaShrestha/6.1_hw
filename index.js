/* 
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' 
поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
*/

function isValid () {

let string;

do {
    string = prompt('Enter some string');
    if (string === null) {
        alert('You canceled!');
        return null;
    }
} while (string.trim().length === 0);

let charsToRemoveInput = prompt('Enter some chars that you want to remove');

if (charsToRemoveInput === null) {
    alert('You canceled!');
    return null;
}

let charsToRemove = charsToRemoveInput = prompt('Enter some chars that you want to remove').split(',').map(function(char) {
    return char.trim();
});

if (charsToRemove.length === 0) {
    alert('Enter valid chars!');
    return null;
}

return {string, charsToRemove};
}

function removeChars(str, charsToRemove) {
    let result = '';

    for (let i = 0; i < str.length; i++) {

        if (!charsToRemove.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}

const result = isValid();
if (result !== null) {
    const { string, charsToRemove } = result;
    console.log(removeChars(string, charsToRemove));
}