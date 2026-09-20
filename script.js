const ratingButtons = document.querySelectorAll('.btn');

const submitButton = document.querySelector('.submit-btn');

const ratingCard = document.querySelector('.rating-card');

const thankyouCard = document.querySelector('.thankyou-card');

const ratingResult = document.querySelector('.rating');

let selectedRating = null;

ratingButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        
        selectedRating = button.textContent;

        const previousSelected = document.querySelector('.selected');

        if (previousSelected){
            previousSelected.classList.remove('selected');
        }

        button.classList.add('selected');


        
    });
});


submitButton.addEventListener('click', function(){

    if(selectedRating) {

        ratingCard.style.display = 'none';
        thankyouCard.style.display = 'flex';
        ratingResult.textContent = `You selected ${selectedRating} out of 5`;

    }
});
