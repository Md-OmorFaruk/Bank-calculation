document.getElementById('submit1').addEventListener('click', function () {

      //Input field
      const enterDeposit = document.getElementById('your-deposit');
      const depositAmount = enterDeposit.value;

      const makeIn1 = parseFloat(depositAmount);

      //deposit
      const prevDeposit = document.getElementById('deposit-money')
      const underDeposit = prevDeposit.innerText

      const makeIn2 = parseFloat(underDeposit);

      //adding to the deposit
      prevDeposit.innerText = makeIn1 + makeIn2;

      //remove number in input field
      enterDeposit.value = '';


});