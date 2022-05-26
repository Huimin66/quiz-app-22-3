export default function toggleAnswer() {
  const toggleAnswerButtons = document.querySelectorAll(
    '[data-js="toggle-answer-button"]'
  );

  const answers = document.querySelectorAll('[data-js="card-answer"]');

  toggleAnswerButtons.forEach((toggleAnswerButton, index) => {
    toggleAnswerButton.addEventListener('click', () => {
      answers[index].classList.toggle('show');
    });
  });
}
