//Follow button//
document.querySelectorAll('.follow-button').forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.follow-icon');
    const text = button.querySelector('.follow-text');

    if (button.classList.contains('following')) {
      button.classList.remove('following');
      text.textContent = 'Follow';
      icon.textContent = '➕';
    } else {
      button.classList.add('following');
      text.textContent = 'Following';
      icon.textContent = '✔';
    }
  });
});