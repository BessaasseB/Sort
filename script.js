let text = [];
let textArea = document.querySelector("#imputArea");
let sortedText;

function getText(){
    text = document.querySelector("#imputArea").value
    sortedText = text.split(", ");
    sortedText.sort();
    textArea.value = sortedText;
    console.log(sortedText);
}




