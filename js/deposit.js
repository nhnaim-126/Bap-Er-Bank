//step 1
document.getElementById('deposit-btn').addEventListener('click', function(){
    //step2
   const depositField = document.getElementById('user-deposit')
   const depositAmmountString = depositField.value
   const depositAmmount = parseFloat(depositAmmountString);

   //step3
   const depositElement = document.getElementById('diposit-total')
   const depositBlanceString = depositElement.innerText;
   const depositBalacne = parseFloat(depositBlanceString);

   //step 4

   const currentDepositBalance = depositAmmount + depositBalacne;
   depositElement.innerText = currentDepositBalance;

   //step 5
    const BalanceElement = document.getElementById('balance-total')
    const totalBalanceString = BalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString)
    //step 6
    const currentBalance = totalBalance + depositAmmount;
    BalanceElement.innerText = currentBalance;
    
    //step 7
    depositField.value = ''
})