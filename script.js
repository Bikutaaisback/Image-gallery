let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let scrollContainer = document.querySelector('.gallery');


scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.style.scrollBehavior = 'auto';
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
});
