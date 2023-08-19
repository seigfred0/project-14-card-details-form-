const submitButton = document.getElementById('submitBtn');
const thankYouSection = document.getElementById('thankYouSection');
const cardSection = document.getElementById('cardSection');




submitButton.addEventListener('click', function() {

    // Retrieve card details inputs
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardMonth = document.getElementById('cardMonth').value;
    const cardYear = document.getElementById('cardYear').value;
    const cardCVC = document.getElementById('cardCVC').value;


    document.getElementById('cardNameError').textContent = '';
    document.getElementById('cardNumberError').textContent = '';

    
    const errorMessage = document.querySelectorAll('.error');
    errorMessage.forEach(message => message.textContent = '')

    console.log(errorMessage)
})




