document.getElementById('addmoney-card').addEventListener('click', function(){
    document.getElementById('add-money-box').style.display = "block";
    document.getElementById('cash-out-box').style.display = "none";
})
document.getElementById('cashout-card').addEventListener('click', function(){
    document.getElementById('add-money-box').style.display = "none";
    document.getElementById('cash-out-box').style.display = "block";
})