        // this function converts binary to text
        function binaryToText(binary) {
            let text = " ";

            // this splits the string into 8-bit characters 
            const binarySplits = binary.match(/.{1,8}/g);
            

            // this checks each group of 8-bits and converts it into letters of the English alphabet
            binarySplits.forEach(function (bin) {
                const decimal = parseInt(bin, 2);
                text += String.fromCharCode(decimal);
            }); 
            
            return text;
        }        


        

        // this function converts from text to binary
        function textToBinary (text) {
            let binary = " "; 
            for (let i = 0; i < text.length; i++) {
                const charCode = text.charCodeAt(i);
                const binaryChar = charCode.toString(2);
                binary += binaryChar.padStart(8, "0"); //pad to 8bits
            }

            return binary;
        }


        document.getElementById("translateBtn").addEventListener("click", function (){

            const inputElement = document.getElementById("input");
            const outputElement = document.getElementById("output");
            const input = inputElement.value.trim();

            if (/^[01\s]+$/.test(input)) { 
                // the above regex (regular expression) checks if the input field 
                // contains only 0s, 1s and spaces. if it does, treat it as binary.
                const text = binaryToText(input);
                outputElement.textContent = "Translated Text: " + text;
            } 
            
            else {
                // it should be treated as text and converted to binary
                const binary = textToBinary(input);
                outputElement.textContent = "Binary Code: " + binary;
            }
        });