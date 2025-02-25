document
  .getElementById('Add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const balance = document.getElementById('available-amount').innerText;
    const convertBalance = parseFloat(balance);
    const accountNum = document.getElementById('account-number').value;
    const convertAccountNum = parseInt(accountNum);

    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);

    const addAmount = document.getElementById('input-add-money').value;
    const convertedAddNum = parseFloat(addAmount);


    if (convertAccountNum === '12345678910' || convertPin === 1234) {
      const sum = convertedAddNum + convertBalance;
      document.getElementById('available-amount').innerText = sum;
    } else {
      console.log('something went wrong');
    }
  });
