document.getElementById('cashout-btn')
  .addEventListener('click', function(event){
    event.preventDefault();
    // const pin = document.getElementById('cashout-pin').value;
    // const convertedPin = parseInt(pin);
    // const amount = document.getElementById('cashout-amount').value;
    // const convertedAmount = parseFloat(amount);
    // const mainBalance = document.getElementById('main-balance').innerText;
    // const convertedBalance = parseFloat(mainBalance);

    const accountNumber = document.getElementById('agent-number').value;
    const pin = getInputValueById('cashout-pin');
    const amount = getInputValueById('cashout-amount');
    const mainBalance = getInnerTextById('main-balance');

    if(amount > mainBalance){
      alert("Please input A valid amount")
      return;
    }
    if(accountNumber.length === 11){
        if(pin === 1234){
          const sum = mainBalance - amount ;
          setInnerTextByIdAndValue('main-balance', sum);
          
          const container = document.getElementById("transContainer");
      const div = document.createElement("div")
      div.classList.add("bg-base-100", "rounded-2xl")
      div.innerHTML = `
      <div class = "p-4 mb-4">
      <p>Cash Out</p>
      <p>TK : ${amount}</p>
      <p>Account number : ${accountNumber}</p>
      </div>
      `
      container.appendChild(div);
        }
        else{
          alert("Please give me your valid pin 1234")
        }
       }
    else{
        alert("Please give me your valid 11 digits agent number");
       }
})