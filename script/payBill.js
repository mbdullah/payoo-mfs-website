document.getElementById('pay-bill-btn')
  .addEventListener('click', function(event) { 
     event.preventDefault();
     const accountNumber = document.getElementById('biller-account-number').value;
    const pin = getInputValueById('pay-pin-number');
    const amount = getInputValueById('pay-amount');
    const mainBalance = getInnerTextById('main-balance');

    const transId1 = Math.floor(Math.random() * (5000));
    const transId2 = Math.floor(Math.random() * (5000));
    const transId3 = Math.floor(Math.random() * (5000));

    if(amount > mainBalance){
      alert("Please input A valid amount")
      return;
    }
    if(accountNumber.length === 11){
        if(pin === 1234){
          const sum = mainBalance - amount ;
          setInnerTextByIdAndValue('main-balance', sum);
          
          const container = document.getElementById("transContainer");
      const selectBank = document.getElementById("selected-bank2").value;
      
      const div = document.createElement("div")
      div.classList.add("bg-base-100", "rounded-2xl")
      div.innerHTML = `
      <div class = "p-4 mb-4">
      <p>Pay Bill from ${selectBank}</p>
      <p>TK : ${amount}</p>
      <p>Biller Account Number : ${accountNumber}</p>
      <p>Transaction ID : D${transId1}MN${transId2}SR${transId3}Q </p>
      </div>
      `
      container.appendChild(div);


      }
      else{
        alert("Please give me your valid pin 1234")
      }
     }
     else{
      alert("Please give me your valid 11 digits account number");
     }
  })