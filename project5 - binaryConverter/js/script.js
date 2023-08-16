        // this function converts binary to text
        function binaryToText(binary) {
            let text = "";
            binary.split("").forEach(function (bin) {
                const decimal = parseInt(bin, 2);
                text += String.fromCharCode(decimal);
            }); 

            return text;
        }

        // this function converts from text to binary
        function textToBinary (text) {
            let binary = ""; 
            for (let i = 0; i < text.lenght; i++) {
                const CharCode = text.charCodeAt(i);
                const binaryChar = CharCode.toString(2);
                binary += binaryChar.padStart(8, "0") + ""; //pad to 8bits
            }

            return binary;
        }
    