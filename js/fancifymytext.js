const alertMessage = () => {
    alert("Hello, world!");
}

const increaseFontSize = () => {
    document.getElementById("text").style.fontSize = "24px";
}

const modifyTextAreaText = () => {
    let textArea = document.getElementById("text")
    let txt_array = textArea.value.split('.');
    for (var i = 0; i < txt_array.length - 1; i++) {
        txt_array[i] = txt_array[i] + "-Moo";
    }
    textArea.value = txt_array.join(".").toUpperCase();
}

// Add event listener to radio buttons to determine fieldset style
const modifyTextAreaStyle = (src) => {
    alert('Text Area Style Modified');

    let textArea = document.getElementById('text');

    if (src.value === "FancyShmancy" && src.checked) {
        textArea.setAttribute("style", "font-weight: bold; color: blue; text-decoration: underline;");
    } else if (src.value === "BoringBetty" && src.checked) {
        textArea.setAttribute("style", "font-weight: normal; color: black; text-decoration: none;");
    }
}