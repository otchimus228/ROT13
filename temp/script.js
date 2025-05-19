const russianLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
const russianUpper = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
const englishLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const englishUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function rot13(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        let index = russianLower.indexOf(char);

        if (index !== -1) {
            const newIndex = (index + 13) % russianLower.length;
            result += russianLower[newIndex];
            continue;
        }

        index = russianUpper.indexOf(char);
        if (index !== -1) {
            const newIndex = (index + 13) % russianUpper.length;
            result += russianUpper[newIndex];
            continue;
        }

        index = englishLower.indexOf(char);
        if (index !== -1) {
            const newIndex = (index + 13) % englishLower.length;
            result += englishLower[newIndex];
            continue;
        }

        index = englishUpper.indexOf(char);
        if (index !== -1) {
            const newIndex = (index + 13) % englishUpper.length;
            result += englishUpper[newIndex];
            continue;
        }

        result += char; // Если символ не найден в алфавитах, оставляем его как есть
    }
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    const inputTextArea = document.getElementById('inputText');
    const outputDiv = document.getElementById('outputArea');
    const processButton = document.getElementById('processButton');

    processButton.addEventListener('click', () => {
        const inputText = inputTextArea.value;
        const encodedText = rot13(inputText);
        outputDiv.textContent = encodedText;
    });
});