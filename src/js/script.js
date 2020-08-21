document.addEventListener('DOMContentLoaded', () => {
  const dateMyBirth = new Date('10-18-1994');
  const currentDate = new Date();

  const ageWrap = document.querySelector('[data-age]');
  ageWrap.textContent = Math.floor((currentDate.getTime() - dateMyBirth) / (24 * 3600 * 365.25 * 1000));
});
