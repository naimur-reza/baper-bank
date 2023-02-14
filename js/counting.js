//deposit button

const depoBtn = document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositId = document.getElementById('deposit-amount')
    const depositTotal = document.getElementById('deposit-total')
    const PreviousDepositAmountString = depositTotal.innerText
    const PreviousDepositAmount = parseFloat (PreviousDepositAmountString)
    const newDepositInputString = depositId.value;
    const newDepositInput = parseFloat (newDepositInputString)
    const currentDeposit = PreviousDepositAmount + newDepositInput;
    console.log(currentDeposit);
    depositTotal.innerText = currentDeposit;

    //balance
    const balanceString = document.getElementById('main-balance')
    const oldBalanceString = balanceString.innerText;
    const oldBalance = parseFloat(oldBalanceString);
    const newBalance = oldBalance + currentDeposit;
    balanceString.innerText = newBalance;
    
})


const withdrawButton = document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputString = withdrawInput.value;
    const withdrawInputValue = parseFloat(withdrawInputString)
    const mainBalance = document.getElementById('main-balance')
    const oldBalanceString = mainBalance.innerText;
    const oldBalance = parseFloat (oldBalanceString);
    const finalBalance = oldBalance - withdrawInputValue;
    mainBalance.innerText = finalBalance;

    //withdraw add 
    const updateWithdraw = document.getElementById('withdraw-text')
    const withdrawNumberString = updateWithdraw.innerText;
    const withdrawAmountNumber = parseFloat (withdrawNumberString)
    const withdrawAmount = withdrawInputValue + withdrawAmountNumber
    updateWithdraw.innerText = withdrawAmount;
})