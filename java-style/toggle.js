document.getElementById('add-money').addEventListener('click', function () {
  document.getElementById('add-money-section').style.display = 'block';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('Transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transactions-section').style.display = 'none';
});

document.getElementById('Cash-out').addEventListener('click', function () {
  document.getElementById('cash-out-section').style.display = 'block';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('Transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transactions-section').style.display = 'none';
});
document.getElementById('Transfer').addEventListener('click', function () {
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('Transfer-money-section').style.display = 'block';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transactions-section').style.display = 'none';
});

document.getElementById('Get-bonus').addEventListener('click', function () {
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('Transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'block';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transactions-section').style.display = 'none';

 
});
document.getElementById('Pay-bill').addEventListener('click', function () {
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('Transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'block';
  document.getElementById('transactions-section').style.display = 'none';
});

document.getElementById('Transactions').addEventListener('click', function () {
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('Transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transactions-section').style.display = 'block';
});
