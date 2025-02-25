document.getElementById('cashout-btn')
  .addEventListener('click', function(event){
    event.preventDefault();
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    if(convertedPin === 1234){
        sum = convertedBalance - convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        alert('Please input your valid pin number');
    }
})