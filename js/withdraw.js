//step1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //step 2
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawValueString = withdrawField.value
    const withdrawAmmount = parseFloat(withdrawValueString)
    if(isNaN(withdrawAmmount)){
        alert('Please Enter a vlaid number')
        return;
    }
   //step3
    const withdrawElement = document.getElementById('total-withdraw')
    const withdrawBalanceString = withdrawElement.innerText
    const withdrawBlance = parseFloat(withdrawBalanceString)
   
    //step 5
    const balanceElement = document.getElementById('balance-total')
    const totalBalanceString = balanceElement.innerText
    const totalBalance = parseFloat(totalBalanceString)
    if(withdrawAmmount > totalBalance){
        alert('baper bank a ato tk nai')
        return;
    }
     //step 4
     const currentWithdrawBalance = withdrawBlance + withdrawAmmount
     withdrawElement.innerText = currentWithdrawBalance
 
    //step 6
    const totalwithdraw = totalBalance - withdrawAmmount;
    balanceElement.innerText = totalwithdraw;

    //step 7
     withdrawField.value = ''


})