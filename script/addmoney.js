// document.getElementById('addmoney-btn').addEventListener('click', function(event){
//     event.preventDefault();
//   const amount = document.getElementById('amount').value;
//   const convertedAmount = parseFloat(amount);
//   const pinNumber = document.getElementById('pin-number').value;
//   const convertedPin = parseInt(pinNumber);
//   const mainBalance = document.getElementById('main-balance').innerText;
//   const convertedBalance = parseFloat(mainBalance);
//   const accountNumber = document.getElementById('account-number').value;
//   if(amount && accountNumber){
//     if(convertedPin === 1234){
//         sum = convertedAmount + convertedBalance;
//         document.getElementById('main-balance').innerText = sum;
//       }
//       else{
//         alert('please input your valid PIN number')
//       }
//   }
//   else{
//     alert('Enter amount');
//   }
// })

document.getElementById('addmoney-btn')
   .addEventListener('click',function(event){ 
     event.preventDefault();
     const amount = getInputValueById('amount');
     const pinNumber = getInputValueById('pin-number');
     const accountNumber = document.getElementById('account-number').value;
     const mainBalance = getInnerTextById('main-balance');
     const transId1 = Math.floor(Math.random() * (5000));
    const transId2 = Math.floor(Math.random() * (5000));
    const transId3 = Math.floor(Math.random() * (5000));

     if(amount < 0){
      alert("Please input A valid amount")
      return;
     }
     if(accountNumber.length === 11){
      if(pinNumber === 1234){
        const sum = mainBalance + amount;
        // document.getElementById('main-balance').innerText = sum;
        setInnerTextByIdAndValue('main-balance', sum);

      const container = document.getElementById("transContainer");
      const selectBank = document.getElementById("selected-bank").value;
      
      const div = document.createElement("div")
      div.classList.add("bg-base-100", "rounded-2xl")
      div.innerHTML = `
      <div class = "p-4 mb-4">
      <p>Add money from ${selectBank}</p>
      <p>TK : ${amount}</p>
      <p>Account number : ${accountNumber}</p>
      <p>Transaction ID : TR${transId1}FB${transId2}CD${transId3}X </p>
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