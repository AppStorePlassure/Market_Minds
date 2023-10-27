document.addEventListener('DOMContentLoaded', function () {
    const qaItems = document.querySelectorAll('.qa-item');

    qaItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        question.addEventListener('click', () => {
            if (item.classList.contains('opened')) {
                item.classList.remove('opened');
            } else {
                qaItems.forEach(qaItem => qaItem.classList.remove('opened'));
                item.classList.add('opened');
            }
        });
    });
});
