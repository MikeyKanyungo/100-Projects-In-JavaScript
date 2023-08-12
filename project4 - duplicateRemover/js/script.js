function removeDuplicates() {

    // mapping the input and output fields
    const inputElement = document.getElementById('inputArray');
    const outputElement = document.getElementById('outputArray');

    // Get the input array from the text area
    //the split(',') method makes sure double digit and above 
    // numbers can also be detected as double digit and not read one by one
    const inputArray = inputElement.value.split(',').map(Number);

    // Remove duplicates by converting the array to a set
    const uniqueArray = [...new Set(inputArray)];

    // Display the unique array to the outpur field
    outputElement.textContent = uniqueArray.join(', ');
}