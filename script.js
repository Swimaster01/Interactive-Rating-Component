const ratingButtons = document.querySelectorAll('.btn');

const submitButton = document.querySelector('.submit-btn');

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
     
    if (selectedRating) {
        
    }
});
