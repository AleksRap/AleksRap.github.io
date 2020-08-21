document.addEventListener('DOMContentLoaded', () => {
  const ageWrap = document.querySelector('[data-age]');
  if (ageWrap) {
    const dateMyBirth = new Date('10-18-1994');
    const currentDate = new Date();
    ageWrap.textContent = Math.floor((currentDate.getTime() - dateMyBirth) / (24 * 3600 * 365.25 * 1000));
  }
});
