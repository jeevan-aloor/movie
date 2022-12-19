// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let money = JSON.parse(localStorage.getItem("walletAmount"));

document.getElementById("wallet").innerText = money;
let display = JSON.parse(localStorage.getItem("moviesdetails")) || [];

console.log("display:", display);
let displayContainer = document.getElementById("movie");
let arr = [];
arr.push(display);
console.log("arr:", arr);

function displayAppend(arr) {
  arr.forEach(({ Title, Poster }) => {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = Title;
    let poster = document.createElement("img");
    poster.src = Poster;
    div.append(h1, poster);
    displayContainer.append(div);
  });
}
displayAppend(arr);

function bookingMovie() {
  let name = document.getElementById("user_name").value;
  let ceat = document.getElementById("number_of_seats").value;
  if (money < ceat * 100) {
    alert("Insufficient Balance !");
  } else if (money >= ceat * 100) {
    alert("Booking Successful!");
    localStorage.setItem("walletAmount", JSON.stringify(money - ceat * 100));
    let display = JSON.parse(localStorage.getItem("walletAmount")) || 0;
    document.getElementById("wallet").innerText = display;
    location.reload()
  }
}
