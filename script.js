const textArea = document.getElementById("text-area")
textArea.addEventListener("keyup", function(e){
    localStorage.setItem("textAreaText", e.target.value);
})
// handle fontWeight button
document.getElementById("bold").addEventListener("click", function(){
    if (textArea.style.fontWeight === "bold") {
        textArea.style.fontWeight = "normal";
        localStorage.setItem("fontWeight", "normal");
    } else {
        textArea.style.fontWeight = "bold";
        localStorage.setItem("fontWeight", "bold");
    }
//
})

// handle textDecoration button
document.getElementById("under-line").addEventListener("click", function(){
    if(textArea.style.textDecoration === "underline"){
        textArea.style.textDecoration = "none";
        localStorage.setItem("textDecoration", "none");
    }else{
        textArea.style.textDecoration = "underline";
        localStorage.setItem("textDecoration", "underline");
    }

})

// handle fontStyle button
document.getElementById("italic").addEventListener("click", function(){
    if(textArea.style.fontStyle === "italic"){
        textArea.style.fontStyle = "normal";
        localStorage.setItem("fontStyle", "normal")
    }else{
        textArea.style.fontStyle = "italic";
        localStorage.setItem("fontStyle","italic");
    }

})


// handle textLeft button
document.getElementById("text-left").addEventListener("click", function(){
    textArea.style.textAlign = "left";
    localStorage.setItem("textAlign", "left");
})

// handle textRight button
document.getElementById("text-center").addEventListener("click", function(){
    textArea.style.textAlign = "center";
    localStorage.setItem("textAlign", "center");
})

// handle textLeft button
document.getElementById("text-right").addEventListener("click", function(){
    textArea.style.textAlign = "right";
    localStorage.setItem("textAlign", "right");
})

// handle number input 
const numberInput = document.getElementById("number-input")
numberInput.addEventListener("click", function(){
    textArea.style.fontSize = numberInput.value +"px";
    localStorage.setItem("fontSize", numberInput.value+"px");
})

// Function to change the color dynamically
function changeColor(color) {
    textArea.style.color = color;
    localStorage.setItem("color", color);
}

function getData(){
    textArea.value = localStorage.getItem("textAreaText");
    textArea.style.fontWeight = localStorage.getItem("fontWeight");
    textArea.style.textDecoration = localStorage.getItem("textDecoration");
    textArea.style.fontStyle = localStorage.getItem("fontStyle");
    textArea.style.textAlign = localStorage.getItem("textAlign");
    textArea.style.fontSize = localStorage.getItem("fontSize");
    textArea.style.color = localStorage.getItem("color");
    document.getElementById("number-input").value = localStorage.getItem("fontSize");
    document.getElementById("colorPicker").value = localStorage.getItem("color");
}
getData();