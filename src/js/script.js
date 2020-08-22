const startTime = new Date().getTime();

document.addEventListener('DOMContentLoaded', () => {
  /** Мой возраст */
  const ageWrap = document.querySelector('[data-age]');
  if (ageWrap) {
    const dateMyBirth = new Date('10-18-1994');
    const currentDate = new Date();
    ageWrap.textContent = Math.floor((currentDate.getTime() - dateMyBirth) / (24 * 3600 * 365.25 * 1000));
  }
});

/** Убираем прелоадер */
window.onload = () => {
  const preloader = document.querySelector('[data-preloader]');
  const content = document.querySelector('[data-content]');

  const timeDelay = 500;
  const endTime = new Date().getTime();
  const remains = timeDelay - endTime + startTime;

  const timeout = remains < 0 ? 0 : remains;

  setTimeout(() => {
    preloader.classList.add('hide');
    content.classList.remove('hide');
  }, timeout);
};
