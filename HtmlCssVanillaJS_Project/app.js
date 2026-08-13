//UI

//TODO: Compare your course javascript projects
//and figure out how to use classes with program
class UI {
  static addCurryBox() {
    //Gemini
    const curryBtn = document.getElementById("curry-btn");
    const curryUI = document.getElementById("curry-UI");

    const curryBox = document.createElement("div");
    curryBox.id = "curry-box";
    curryBox.textContent = "Would you like a taco?";
    curryBox.style.display = "none";

    curryUI.appendChild(curryBox);
  }
}

/* Events */
document.querySelector("#curry-btn").addEventListener("click", (e) => {
  // We use stopPropagation to prevent this click from instantly
  // triggering the document click listener below.
  //(suggested by Gemini)
  e.stopPropagation();

  UI.addCurryBox();

  if (curryBox.style.display === "none") {
    //displays curry message
    curryBox.style.display = "block";
  } else {
    curryBox.style.display = "none";
  }

  //Julian
  //
  //This is to clear the box when pressed outside
  document.addEventListener("click", (event) => {
    if (curryBox.style.display === "block") {
      if (!curryBox.contains(event.target)) {
        curryBox.style.display = "none";
      }
    }
  });
});
