/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    console.log("Window Loaded!");

    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleClick);

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", resetText);

    let textSizeRadio = document.querySelectorAll("input[name='text-size']");
    textSizeRadio.forEach(element => {element.addEventListener("change", updateTextSize)});

    let textCapsCheckbox = document.getElementById("all-caps");
    textCapsCheckbox.addEventListener("click", setTextToCaps)
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    console.log("Button Clicked!");
    let userInput = document.getElementById("input-text");
    let resultText = shiftCipher(userInput);
    document.getElementById("result").textContent = resultText;
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
  */
  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function resetText() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  function updateTextSize() {
    let text = document.getElementById("input-text");
    text.style.fontSize = document.querySelector("input[name='text-size']:checked").value;
  }

  function setTextToCaps() {
    let text = document.getElementById("input-text");
    // Ternary function for determining if text should be lower or upper based on check value
    text.style.textTransform = (document.getElementById("all-caps").checked) ? 'uppercase' : 'none';
  }

})();
