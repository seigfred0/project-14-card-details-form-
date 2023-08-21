const submitButton = document.getElementById('submitBtn');
const thankYouSection = document.getElementById('thankYouSection');
const cardSection = document.getElementById('cardSection');


submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Retrieve card details inputs
    const cardName = document.getElementById('cardName').value;
    let cardNumber = document.getElementById('cardNumber').value;
    const cardMonth = document.getElementById('cardMonth').value;
    const cardYear = document.getElementById('cardYear').value;
    const cardCVC = document.getElementById('cardCVC').value;

    //Manipulating the value before displaying it
    cardNumber = cardNumber.replace(/\s/g, ''); 
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); 

    // Error Message If Invalid
    const errorMessage = document.querySelectorAll('.error');
    errorMessage.forEach(message => message.textContent = '');

    // Validation Check

    let isValid = true;

    if (cardName.trim() === '') {
        document.getElementById('cardNameError').textContent = 'Cardholder Name is Required';
        isValid = false
    }

    if (cardNumber.length !== 19 || isNaN(cardNumber.replace(/\s/g, ''))) {
        document.getElementById('cardNumberError').textContent = 'Invalid Card Number';
        isValid = false
    }

    if (isNaN(cardMonth) || cardMonth < 1 || cardMonth > 12) {
        const monthFont = document.getElementById('cardMonthError')
        monthFont.textContent = 'Invalid Month';
        monthFont.style.fontSize = '0.6rem';
        isValid = false

    }

    if (isNaN(cardYear) || cardYear.length !== 2) {
        const cardFont = document.getElementById('cardYearError');
        cardFont.textContent = 'Invalid Year';
        cardFont.style.fontSize = '0.6rem';
        isValid = false

    }

    if (isNaN(cardCVC) || cardCVC.length !== 3) {
        const cardFont = document.getElementById('cardCvcError');
        cardFont.textContent = 'Invalid CVC';
        cardFont.style.fontSize = '0.6rem';
        isValid = false

    }


    // Checking
    if (isValid) {
        cardSection.style.display = 'none';
        thankYouSection.style.display = 'flex';

        const cardNameSubmitted = cardName;
        const cardNumberSubmitted = cardNumber;
        const cardCvcSubmitted = cardCVC;
        const cardDateSubmitted = `${cardMonth}/${cardYear}`; // Combine month and year

        document.getElementById('updateCardName').textContent = cardNameSubmitted
        document.getElementById('updateCardNumber').textContent = cardNumberSubmitted
        document.getElementById('updateCardCvc').textContent = cardCvcSubmitted
        document.getElementById('updateCardDate').textContent = cardDateSubmitted
       
       
    }
})
