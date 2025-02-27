document.getElementById('cash-out-box').style.display = "none";
document.getElementById('transaction-box').style.display = "none";
document.getElementById('transfer-box').style.display = "none";
document.getElementById('get-bonus-box').style.display = "none";
document.getElementById('pay-bill-box').style.display = "none";

document.getElementById('addmoney-card').addEventListener('click', function(){
    // document.getElementById('add-money-box').style.display = "block";
    // document.getElementById('cash-out-box').style.display = "none";

    handleToggle('add-money-box', "block");
    handleToggle('cash-out-box', "none");
    handleToggle('transaction-box', "none");
    handleToggle('transfer-box', "none");
    handleToggle('get-bonus-box', "none");
    handleToggle('pay-bill-box', "none");
})
document.getElementById('cashout-card').addEventListener('click', function(){
    // document.getElementById('add-money-box').style.display = "none";
    // document.getElementById('cash-out-box').style.display = "block";

    handleToggle('add-money-box', "none");
    handleToggle('cash-out-box', "block");
    handleToggle('transaction-box', "none");
    handleToggle('transfer-box', "none");
    handleToggle('get-bonus-box', "none");
    handleToggle('pay-bill-box', "none");
})

document.getElementById("transactions-card").addEventListener('click', function(){ 
    handleToggle('add-money-box', "none");
    handleToggle('cash-out-box', "none");
    handleToggle('transaction-box', "block");
    handleToggle('transfer-box', "none");
    handleToggle('get-bonus-box', "none");
    handleToggle('pay-bill-box', "none");
})

document.getElementById("transfer-card").addEventListener('click', function(){ 
    handleToggle('add-money-box', "none");
    handleToggle('cash-out-box', "none");
    handleToggle('transaction-box', "none");
    handleToggle('transfer-box', "block");
    handleToggle('get-bonus-box', "none");
    handleToggle('pay-bill-box', "none");
})

document.getElementById("get-bonus-card").addEventListener('click', function(){ 
    handleToggle('add-money-box', "none");
    handleToggle('cash-out-box', "none");
    handleToggle('transaction-box', "none");
    handleToggle('transfer-box', "none");
    handleToggle('get-bonus-box', "block");
    handleToggle('pay-bill-box', "none");
})

document.getElementById("pay-bill-card").addEventListener('click', function(){ 
    handleToggle('add-money-box', "none");
    handleToggle('cash-out-box', "none");
    handleToggle('transaction-box', "none");
    handleToggle('transfer-box', "none");
    handleToggle('get-bonus-box', "none");
    handleToggle('pay-bill-box', "block");
})


// logout btn====>
    document.getElementById('logout-btn').addEventListener('click', function( ) {
        window.location.href = "./index.html"
    })