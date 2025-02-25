document.getElementById('addmoney-btn').addEventListener('click', function(event){
    event.preventDefault();
  const amount = document.getElementById('amount').value;
  const convertedAmount = parseFloat(amount);
  const pinNumber = document.getElementById('pin-number').value;
  const convertedPin = parseInt(pinNumber);
  const mainBalance = document.getElementById('main-balance').innerText;
  const convertedBalance = parseFloat(mainBalance);
  const accountNumber = document.getElementById('account-number').value;
  if(amount && accountNumber){
    if(convertedPin === 1234){
        sum = convertedAmount + convertedBalance;
        document.getElementById('main-balance').innerText = sum;
      }
      else{
        alert('please input your valid PIN number')
      }
  }
  else{
    alert('Enter amount');
  }
})