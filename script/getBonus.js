document.getElementById('get-bonus-btn')
  .addEventListener('click', function(event) { 
    event.preventDefault();
    const bonusPin = document.getElementById('bonus-pin').value;
    const mainBalance = getInnerTextById('main-balance');
    const bonusAmount = Math.floor(Math.random() * (40 - 10 + 1)) +10;

    if(bonusPin.length === 6){
        const sum = mainBalance + bonusAmount;
        setInnerTextByIdAndValue("main-balance", sum);

        const container = document.getElementById("transContainer");
      const div = document.createElement("div")
      div.classList.add("bg-base-100", "rounded-2xl")
      div.innerHTML = `
      <div class = "p-4 mb-4">
      <p>You Got Bonus</p>
      <p>TK : ${bonusAmount}</p>
      <p>Thanks for connect with me...!</p>
      </div>
      `
      container.appendChild(div);
    }else{
        alert('Please Input 6 digits coupon number');
    }
  })