document
  .getElementById('add-money')
  .addEventListener('click', function () {

    document.getElementById('add-money-section').style.display = 'block';
       document.getElementById('cash-out-section').style.display = 'none';
  });


  document.getElementById('Cash-out').addEventListener('click', function () {
    document.getElementById('cash-out-section').style.display = 'block';
       document.getElementById('add-money-section').style.display = 'none';

  });