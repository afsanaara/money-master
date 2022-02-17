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

    //income section

    const incomeField = document.getElementById('income-input');
    const incomeInput = incomeField.value;
    const totalIncome = parseFloat(incomeInput);


    const saveField = document.getElementById('save-input');
    const saveInput = saveField.value;
    console.log(totalIncome,saveInput)
    const saveAmount = (totalIncome * parseFloat(saveInput) )/100;
    console.log(saveAmount)

    //update saving amount

    const updateSaving = document.getElementById('saving');
    updateSaving.innerText = saveAmount;

    //Remaining balance

    const totalBalance = document.getElementById("total-balance");
    const totalValue = totalBalance.innerText;
    
    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalance.innerText = parseFloat(totalValue) - saveAmount;



}