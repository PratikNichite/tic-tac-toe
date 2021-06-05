const ff = document.querySelector("#ff");
const fs = document.querySelector("#fs");
const ft = document.querySelector("#ft");

const sf = document.querySelector("#sf");
const ss = document.querySelector("#ss");
const st = document.querySelector("#st");

const tf = document.querySelector("#tf");
const ts = document.querySelector("#ts");
const tt = document.querySelector("#tt");

let count = 0;
let won = false;
let tie = false;

const logic_ttt = function () {
  if (
    (ff.textContent == fs.textContent &&
      ff.textContent == ft.textContent &&
      ft.textContent != "") ||
    (sf.textContent == ss.textContent &&
      ss.textContent == st.textContent &&
      st.textContent != "") ||
    (tf.textContent == ts.textContent &&
      ts.textContent == tt.textContent &&
      tt.textContent != "") ||
    (ff.textContent == ss.textContent &&
      ss.textContent == tt.textContent &&
      tt.textContent != "") ||
    (ft.textContent == ss.textContent &&
      ss.textContent == tf.textContent &&
      tf.textContent != "") ||
    (ff.textContent == sf.textContent &&
      sf.textContent == tf.textContent &&
      tf.textContent != "") ||
    (fs.textContent == ss.textContent &&
      ss.textContent == ts.textContent &&
      ts.textContent != "") ||
    (ft.textContent == st.textContent &&
      st.textContent == tt.textContent &&
      tt.textContent != "")
  ) {
    document.querySelector(".player1").style.visibility = "hidden";
    document.querySelector(".player2").style.visibility = "hidden";
    document.querySelector(".player-win").style.visibility = "visible";
    document.querySelector(".player-win").textContent =
      count % 2 == 0 ? "Player 2 Wins!" : "Player 1 Wins!";
    document.querySelector(".player-win").style.backgroundColor =
      count % 2 == 0 ? "green" : "blue";
    won = true;
  } else if (count >= 9) {
    document.querySelector(".player1").style.visibility = "hidden";
    document.querySelector(".player2").style.visibility = "hidden";
    document.querySelector(".player-win").style.visibility = "visible";
    document.querySelector(".player-win").textContent = "IT'S A TIE";
    document.querySelector(".player-win").style.backgroundColor = "red";
    tie = false;
  }
};

const check_color = function (element) {
  if (
    element.style.backgroundColor != "blue" &&
    element.style.backgroundColor != "green" &&
    won == false &&
    tie == false
  ) {
    if (count % 2 == 0) {
      document.querySelector(".player1").style.visibility = "hidden";
      document.querySelector(".player2").style.visibility = "visible";
      element.textContent = "X";
      element.style.backgroundColor = "blue";
      element.style.color = "white";
      count++;
      logic_ttt();
    } else {
      document.querySelector(".player2").style.visibility = "hidden";
      document.querySelector(".player1").style.visibility = "visible";
      element.textContent = "O";
      element.style.backgroundColor = "green";
      element.style.color = "white";
      count++;
      logic_ttt();
    }
  }
};

ff.addEventListener("click", () => {
  check_color(ff);
});

fs.addEventListener("click", () => {
  check_color(fs);
});

ft.addEventListener("click", () => {
  check_color(ft);
});

sf.addEventListener("click", () => {
  check_color(sf);
});

ss.addEventListener("click", () => {
  check_color(ss);
});

st.addEventListener("click", () => {
  check_color(st);
});

tf.addEventListener("click", () => {
  check_color(tf);
});

ts.addEventListener("click", () => {
  check_color(ts);
});

tt.addEventListener("click", () => {
  check_color(tt);
});
