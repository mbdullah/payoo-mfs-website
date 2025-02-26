document.getElementById("transactions-card")
  .addEventListener("click", function(){
    handleToggle("add-money-box", "none");
    handleToggle("cash-out-box", "none");
    handleToggle("transaction-box", "block");
  })