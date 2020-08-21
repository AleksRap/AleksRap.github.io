"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var dateMyBirth = new Date('10-18-1994');
  var currentDate = new Date();
  var ageWrap = document.querySelector('[data-age]');
  ageWrap.textContent = Math.floor((currentDate.getTime() - dateMyBirth) / (24 * 3600 * 365.25 * 1000));
});