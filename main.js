const submitButton = document.getElementById('submitBtn');
const thankYouSection = document.getElementById('thankYouSection');
const cardSection = document.getElementById('cardSection');

// Card Details
const cardName = document.getElementById('cardName').value;
const cardNumber = document.getElementById('cardNumber').value;
const cardMonth = document.getElementById('cardMonth').value;
const cardYear = document.getElementById('cardYear').value;
const cardCVC = document.getElementById('cardCVC').value;


submitButton.addEventListener('click', function() {
    cardSection.style.display = 'none'
    thankYouSection.style.display = 'flex'
})


function validateCard(cardName, cardNumber, cardMonth, cardYear, cardCVC) {

}





/*


<script>
        document.addEventListener('DOMContentLoaded', function () {
            const cardFormSection = document.getElementById('cardFormSection');
            const thankYouSection = document.getElementById('thankYouSection');
            const submitBtn = document.getElementById('submitBtn');

            submitBtn.addEventListener('click', function () {
                const cardholderName = document.getElementById('cardholderName').value;
                const cardNumber = document.getElementById('cardNumber').value;
                const expirationDate = document.getElementById('expirationDate').value;
                const cvc = document.getElementById('cvc').value;

                if (validateCardDetails(cardholderName, cardNumber, expirationDate, cvc)) {
                    // Validation successful, switch to thank you page
                    cardFormSection.style.display = 'none';
                    thankYouSection.style.display = 'block';
                } else {
                    // Display an error message or handle validation failure
                    // For simplicity, let's assume no error handling here
                }
            });

            function validateCardDetails(cardholderName, cardNumber, expirationDate, cvc) {
                // Perform validation logic here
                // For demonstration purposes, let's assume basic validation
                const cardNumberPattern = /^\d{16}$/;
                const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
                const cvcPattern = /^\d{3,4}$/;

                return (
                    cardholderName.trim() !== '' &&
                    cardNumberPattern.test(cardNumber) &&
                    expirationDatePattern.test(expirationDate) &&
                    cvcPattern.test(cvc)
                );
            }
        });
    </script>

*/