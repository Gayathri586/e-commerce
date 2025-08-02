document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.rating-stars span');
    const reviewForm = document.getElementById('review-form');
    const reviewTextarea = document.getElementById('review-text');
    const reviewsList = document.querySelector('.reviews-list');
    let currentRating = 0;

    // Star rating functionality
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            currentRating = e.target.dataset.rating;
            stars.forEach(s => {
                s.classList.remove('active');
            });
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('active');
            }
        });
    });

    // Form submission
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const reviewText = reviewTextarea.value.trim();

        if (reviewText === '' || currentRating === 0) {
            alert('Please select a rating and write a review.');
            return;
        }

        // Create a new review element
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        // Build the star rating string
        let starRatingHtml = '';
        for (let i = 0; i < currentRating; i++) {
            starRatingHtml += '★';
        }

        reviewDiv.innerHTML = `
            <div class="rating">${starRatingHtml}</div>
            <p>${reviewText}</p>
        `;

        // Add the new review to the list
        reviewsList.appendChild(reviewDiv);

        // Reset the form
        reviewTextarea.value = '';
        currentRating = 0;
        stars.forEach(s => s.classList.remove('active'));
    });
});