document
      .getElementById('Add-money-btn')
      .addEventListener('click', function (event) {
        event.preventDefault();

        const pin = document.getElementById('pin').value;
        console.log(pin);

        const addAmount = document.getElementById('input-add-money').value;
        const convertedAddNum = parseFloat(addAmount)
       

        const accountNum = document.getElementById('account-number').value;

        const balance = document.getElementById('available-amount').innerText;
        const convertedBalance = parseInt(balance)
        
        if (accountNum === '12345678910' && pin === '1234') {
          const sum = convertedAddNum + convertedBalance;
          document.getElementById('available-amount').innerText = sum;
          console.log(convertedAddNum);
          console.log(convertedBalance)

        }
      });