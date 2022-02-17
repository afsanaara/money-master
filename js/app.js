//calculation part

document.getElementById('calculate-btn').addEventListener('click', function(){
    //food section
    const foodField = document.getElementById('food-input');
    const foodInput = foodField.value;
    const foodExpense = parseFloat(foodInput);

    //rent section
    const rentField = document.getElementById('rent-input');
    const rentInput = rentField.value;
    const rentExpense = parseFloat(rentInput);

    //cloth section
    const clothField = document.getElementById('cloth-input');
    const clothInput = clothField.value;
    const clothExpense = parseFloat(clothInput);

    
    //total expenses
    const expenseField = document.getElementById('total-expense');
    const previousExpenseText = expenseField.innerText;
    const previousExpenseAmount = parseFloat(previousExpenseText);
    const newExpenseAmount = foodExpense+rentExpense+clothExpense;

    expenseField.innerText = newExpenseAmount; 

    

    //income section

    const incomeField = document.getElementById('income-input');
    const incomeInput = incomeField.value;
    const totalIncome = parseFloat(incomeInput);
// error messages
    if(newExpenseAmount>totalIncome){
        alert('Expense is greater than Income. It cannot be greater than Income');
    }

    if(totalIncome<0){
        alert('Income can not be negative');
    }

    //balance section
    const balanceField =document.getElementById('total-balance');
    const previousBalanceText = expenseField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);

    const newBalanceAmount = totalIncome - newExpenseAmount;

    balanceField.innerText = newBalanceAmount;
});


//saving part

function savingPart(){
    const saveField = document.getElementById('save-input');
    const saveInput = saveField.value;
    const saveAmount = parseFloat(totalIncome/(saveInput));

    //update saving amount

    const updateSaving = document.getElementById('saving');
    const updateSavingText = saving.innerText;
    const newSavingAmount = parseFloat('updateSavingText');

    updateSaving.innerText = newSavingAmount;

}