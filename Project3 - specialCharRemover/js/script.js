function removeSpecialCharacters(){

    //Get the input content
    const inputString = document.getElementById('inputString').value;

    //use regex (regular expressions) to look for any character which are not a numbers alphabet letters
    const regex = /[^a-zA-Z 0-9]/g;

    // this removes all instances of characters which are not part of the regex 
    const cleanString = inputString.replace(regex, '');

    // returns the cleaned string to the 'output field in the HTML'
    document.getElementById('output').textContent = cleanString;
}