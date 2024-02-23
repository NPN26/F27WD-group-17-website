document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }

            this.querySelector('.plus-minus').innerText = answer.style.maxHeight ? '-' : '+';
        });
    });
});