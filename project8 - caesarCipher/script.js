    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function caesar(text, shift, direction) {
        let newText = '';

        if (direction === 'decode') {
            shift *= -1;
        }

        for (let i = 0; i < text.length; i++) {
            const char = text[i].toLowerCase();
            if (alphabet.includes(char)) {
                const position = alphabet.indexOf(char);
                const newPosition = (position + shift + 26) % 26;
                newText += alphabet[newPosition];
            } else {
                newText += char;
            }
        }

        document.getElementById('outputText').value = `The ${direction}ed text is ${newText}.`;
    }

    function encode() {
        const text = document.getElementById('inputText').value;
        const shiftValue = parseInt(document.getElementById('shiftValue').value);
        caesar(text, shiftValue, 'encode');
    }

    function decode() {
        const text = document.getElementById('inputText').value;
        const shiftValue = parseInt(document.getElementById('shiftValue').value);
        caesar(text, shiftValue, 'decode');
    }
