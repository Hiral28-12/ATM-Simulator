document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const pinInput = document.getElementById('pin');
    const actions = document.getElementById('actions');
    const balanceDisplay = document.getElementById('balanceDisplay');
    const checkBalanceBtn = document.getElementById('checkBalanceBtn');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    let balance = 13000;

    // Function to handle PIN submission
    function handlePinSubmission() {
        const pinInputValue = pinInput.value;
        if (pinInputValue === '2506') {
            actions.style.display = 'block';
        } else {
            alert('Incorrect PIN. Please try again.');
        }
    }
    // Add event listener for the 'Enter' key on the PIN input field
    pinInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handlePinSubmission(); 
        }
    });

    // Add event listener for the 'click' event on the submit button
    submitBtn.addEventListener('click', handlePinSubmission); 

    checkBalanceBtn.addEventListener('click', function() {
        balanceDisplay.style.display = 'block';
        balanceDisplay.textContent = `Your balance is $${balance}`;
    });

    depositBtn.addEventListener('click', function() {
        const depositAmount = prompt('Enter amount to deposit:');
        if (depositAmount) {
            balance += parseFloat(depositAmount);
            balanceDisplay.textContent = `Your balance is $${balance}`;
        }
    });

    withdrawBtn.addEventListener('click', function() {
        const withdrawAmount = prompt('Enter amount to withdraw:');
        if (withdrawAmount) {
            if (balance >= parseFloat(withdrawAmount)) {
                balance -= parseFloat(withdrawAmount);
                balanceDisplay.textContent = `Your balance is $${balance}`;
            } else {
                alert('Insufficient funds.');
            }
        }
    });

    logoutBtn.addEventListener('click', function() {
        actions.style.display = 'none';
        pinInput.value = '';
    });
});