/* == BACK TO TOP == */
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* == BACK TO TOP == */


/* == ANIMATION CSS == */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 1;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("showreveal");
    }
  }
}

window.addEventListener("scroll", reveal);
/* == ANIMATION CSS == */

//Create A Responsive Menu Hide Show Side Menu
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".links");

// Onclick For Menu Bar
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}

/* == BANNER TEXT CHANGE == */
document.addEventListener("DOMContentLoaded", function () {
  const words = ["Change", "Solutions", "Challenges"];
  let wordIndex = 0; // Index to track the current word
  let letterIndex = 0; // Index to track the current letter within the word
  const speed = 100; // Typing speed in milliseconds (adjust as needed)
  const span = document.getElementById("changing-text");

  function typeLetter() {
    const currentWord = words[wordIndex];
    if (letterIndex < currentWord.length) {
      span.textContent += currentWord.charAt(letterIndex);
      letterIndex++;
      setTimeout(typeLetter, speed);
    } else {
      setTimeout(deleteLetter, 2000); // Wait for 2 seconds before deleting the word
    }
  }

  function deleteLetter() {
    if (span.textContent.length > 0) {
      span.textContent = span.textContent.slice(0, -1);
      setTimeout(deleteLetter, speed / 2); // Backspacing speed is half of typing speed
    } else {
      letterIndex = 0;
      wordIndex = (wordIndex + 1) % words.length; // Cycle through the words
      setTimeout(typeLetter, speed); // Start typing the next word
    }
  }

  // Start the text-changing process
  typeLetter();
});

/* == || BANNER TEXT CHANGE == */