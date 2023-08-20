document.getElementById('submit2').addEventListener('click', function () {
      //Input field 2
      const amountInput = document.getElementById('your-withdraw');
      const amountValue = amountInput.value;

      //convert string input to integer
      const inTk = parseFloat(amountValue);

      //withdraw
      const withdrawAmount = document.getElementById('withdraw-money');
      const withdrawInner = withdrawAmount.innerText;

      //convert string to integers
      const inTk1 = parseFloat(withdrawInner);

      //Result in withdraw
      withdrawAmount.innerText = inTk + inTk1;
      

      //balance 
      const balancePrev = document.getElementById('balance-money');
      const balanceInner = balancePrev.innerText;
      
      //Convert string to Integer
      const inTk2 = parseFloat(balanceInner);


      balancePrev.innerText = inTk2 - inTk;

      amountInput.value = '';


});