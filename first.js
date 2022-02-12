
// handel Deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('deposite button clicked');
    // get the amount depositee
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previosuDepositAmountText = depositTotal.innerText;
    const previosuDepositAmount = parseFloat(previosuDepositAmountText);

    const newDepositTotal = previosuDepositAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal;

    // update account balance

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field
    depositInput.value = '';

})
// handel withdraw event handeler
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const NewWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(NewWithdrawAmount);


    //set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previosuWithdrawText = withdrawTotal.innerText;
    const previosuWithdrawTotal = parseFloat(previosuWithdrawText);

    const NewWithdrawTotal = previosuWithdrawTotal + NewWithdrawAmount;
    withdrawTotal.innerText = NewWithdrawTotal;

    //updet balance


    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - NewWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';

})


