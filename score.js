const s1 = document.querySelector("#one");
const s2 = document.querySelector("#two");
const btnPlayer1 = document.querySelector("#btn1");
const btnPlayer2 = document.querySelector("#btn2");
const btnReset = document.querySelector("#btn3");
const btnGoal = document.querySelector("#count");
const btnSet = document.querySelector(".btn");
const result = document.querySelector("#para1");

btnSet.addEventListener("click", function (event) {
  const goalValue = parseInt(btnGoal.value);
  if (btnGoal.value === "" || goalValue === 0) {
    s1.innerText === "0";
    s2.innerText === "0";
    return;
  }
  if (goalValue !== 0) {
    if (event.target === btnPlayer1) {
      s1.textContent = parseInt(s1.textContent) + 1;
      if (parseInt(s1.textContent) === goalValue) {
        s1.style.color = "green";
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
        btnGoal.disabled = true;
        result.innerText = "Player 1 wins";
        result.style.backgroundColor = "green";
        result.style.textAlign = "center";
      }
    } else if (event.target === btnPlayer2) {
      s2.textContent = parseInt(s2.textContent) + 1;
      if (parseInt(s2.textContent) === goalValue) {
        s2.style.color = "green";
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
        btnGoal.disabled = true;
        result.innerText = "Player 2 wins";
        result.style.backgroundColor = "green";
        result.style.textAlign = "center";
      }
    } else if (event.target === btnReset) {
      s1.innerText = "0";
      s2.innerText = "0";
      s2.style.color = "";
      s1.style.color = "";
      btnGoal.value = "";
      // Enable the buttons again
      btnPlayer1.disabled = false;
      btnPlayer2.disabled = false;
      btnGoal.disabled = false;
      result.innerText = "Ping-Pong Score Keeper";
      result.style.backgroundColor = "";
      result.style.textAlign = "";
    }
  }
});
