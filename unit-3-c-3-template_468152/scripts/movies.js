// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// let inpuValu=document.getElementById("amount").value;
// localStorage.setItem("walletAmount",JSON.stringify(inpuValu))
let money = JSON.parse(localStorage.getItem("walletAmount"));
document.getElementById("wallet").innerText = money;

let key = "af36340e";
let id;
let actual;
async function getData() {
  let searchInput = document.getElementById("search").value;

  try {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&s=${searchInput}`
    );
    // console.log('res:', res)
    let data = await res.json();
    console.log("data:", data);
    actual = data.Search;
    if (actual != undefined) {
      appendFunc(actual);
    }
  } catch (error) {
    console.log("error:", error);
  }
}
let container = document.getElementById("movies");

function appendFunc(data) {
  data.forEach(({ Title, Poster }, index) => {
    let div = document.createElement("div");
    let p = document.createElement("h2");
    p.innerText = Title;
    let image = document.createElement("img");
    image.src = Poster;
    let button = document.createElement("button");
    button.innerText = "Book Now";
    button.setAttribute("class", "book_now");
    button.addEventListener("click", function () {
      localStorage.setItem("moviesdetails", JSON.stringify(data[index]));
      window.location.href = "checkout.html";
    });
    div.append(image, p, button);
    container.append(div);
  });
}
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
