document.getElementById('cash-out-box').style.display = "none";
document.getElementById('transaction-box').style.display = "none";
document.getElementById('addmoney-card').addEventListener('click', function(){
    // document.getElementById('add-money-box').style.display = "block";
    // document.getElementById('cash-out-box').style.display = "none";

    handleToggle('add-money-box', "block");
    handleToggle('cash-out-box', "none");
    handleToggle('transaction-box', "none");
})
document.getElementById('cashout-card').addEventListener('click', function(){
    // document.getElementById('add-money-box').style.display = "none";
    // document.getElementById('cash-out-box').style.display = "block";

    handleToggle('add-money-box', "none");
    handleToggle('cash-out-box', "block");
    handleToggle('transaction-box', "none");
})