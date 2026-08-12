//UI

//TODO: right now, you have to double curry to get
//the curry box. Compare your course javascript projects
//and figure out how to use classes with your Gemini code
class UI {
  static displayCurryBox() {
    //Gemini
    const curryBtn = document.getElementById("curry-btn");
    const curryUI = document.getElementById("curry-UI");

    const curryBox = document.createElement("div");
    curryBox.id = "curry-box";
    curryBox.textContent = "Would you like a taco?";
    curryBox.style.display = "none";

    curryUI.appendChild(curryBox);

    curryBtn.addEventListener("click", () => {
      if (curryBox.style.display === "none") {
        curryBox.style.display = "block";
      } else {
        curryBox.style.display = "none";
      }
    });
  }
}

// Events
document.querySelector("#curry-btn").addEventListener("click", (e) => {
  UI.displayCurryBox();
});
