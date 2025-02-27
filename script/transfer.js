document.getElementById("transfer-btn")
  .addEventListener('click', function(event){ 
    event.preventDefault();
   const accountNumber = document.getElementById("transfer-account-number").value;
   const pin = getInputValueById("transfer-pin");
   const amount = getInputValueById("transfer-amount");
   const mainBalance = getInnerTextById("main-balance");
   console.log(accountNumber,pin,amount,mainBalance);

   const transId1 = Math.floor(Math.random() * (5000));
    const transId2 = Math.floor(Math.random() * (5000));
    const transId3 = Math.floor(Math.random() * (5000));

   if(amount > mainBalance || amount <= 0){
    alert("Please Input A Valid Amount")
    return;
   }
   if(accountNumber.length === 11){
    if(pin === 1234){
        sum = mainBalance - amount;
        setInnerTextByIdAndValue("main-balance", sum);

        const container = document.getElementById("transContainer");
        const div = document.createElement("div")
      div.classList.add("bg-base-100", "rounded-2xl")
      div.innerHTML = `
      <div class = "p-4 mb-4">
      <p>Transfer Money</p>
      <p>TK : ${amount}</p>
      <p>Account number : ${accountNumber}</p>
      <p>Transaction ID : S${transId1}MR${transId2}N${transId3}RB </p>
      </div>
      `
      container.appendChild(div);
    }
    else{
        alert("Please give me your valid pin 1234");
    }
   }
   else{
    alert("Please give me your valid 11 digits agent number");
   }
  })