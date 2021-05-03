document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.querySelector("#counter");
    const counterMinus = document.querySelector("#minus");
    const counterPlus = document.querySelector("#plus");
    let count = 0;
    updateDisplay();
    counterMinus.addEventListener("click", (event) => {
        count--;
        updateDisplay();
    });
    counterPlus.addEventListener("click", (event) => {
        count++;
        updateDisplay();
    });
    function updateDisplay() {
        counterDisplay.innerHTML = count;
    };
    

    const form = document.querySelector("#comment-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("#comment-input");
        if(input.value /*no need for !== "" because !== (is not) & "": is an empty string, which is a falsey value; double negative is a positive, so it can be removed  */) {
          newComment (input.value);
          event.target.reset();
        }
      });
    });
    
    function newComment (comment) {
      const list = document.querySelector("#addedComments"); // ul element
      list.innerHTML += `<li>${comment}</li>`;
      // ALTERNATE WAY BELOW
    //   const item = document.createElement("/li"); // li element only in JS 
    //   item.innerText = comment;
    //   list.append(item);
    };