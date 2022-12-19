// Store the wallet amount to your local storage with key "amount"
function addWallet() {
  let inpuValu = document.getElementById("amount").value;
  localStorage.setItem("walletAmount", JSON.stringify(inpuValu));
  let money = JSON.parse(localStorage.getItem("walletAmount"));
  document.getElementById("wallet").innerText = money;
}
Location.reload;
// let money = JSON.parse(localStorage.getItem("walletAmount"));
//     document.getElementById("wallet").innerText = money;
