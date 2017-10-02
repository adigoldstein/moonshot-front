$(document).ready(function () {

  function isMinLength(str, min) {
    return str.length >= min ? true : false
  }

  function isMailValid(mail) {
    if (mail.endsWith('@gmail.com') && mail.length >= 11) {
      return true
    }
    return false
  }


  function isPhoneValid(phone) {

    var phoneno = /^\(?([050]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/;
    // For all other area codes...
    // var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/;

    return phoneno.test(phone)


  }

  function submitModalClickHandler(e) {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;

    if (isMinLength(firstName, 3) && isMinLength(lastName, 3) && isMailValid(email) && isPhoneValid(phone)) {
      const data = {
        firstName,
        lastName,
        email,
        phone
      };
      // $.ajax({
      //   url: 'Ajax.url.here',
      //   type: 'POST',
      //   data: JSON.stringify(data),
      //   contentType: 'application/json; charset=utf-8',
      //   dataType: 'json',
      //   async: false,
      // });

      const modal = document.querySelector('#myModal');
      const modalBG = document.querySelector('.modal-backdrop');

      modal.style.display = 'none';
      modalBG.style.display = 'none';

    } else {
      console.info('not good');
      hideAllErrors();
      const firstNameErr = document.querySelector('.first-name-err');
      const lastNameErr = document.querySelector('.last-name-err');
      const mailErr = document.querySelector('.mail-err');
      const phoneErr = document.querySelector('.phone-err');

      if (!isMinLength(firstName, 3)) {
        firstNameErr.style.display = 'block'
      }
      if (!isMinLength(lastName, 3)) {
        lastNameErr.style.display = 'block'
      }
      if (!isMailValid(email)) {
        mailErr.style.display = 'block'
      }

      if (!isPhoneValid(phone)) {
        phoneErr.style.display = 'block'
      }

    }
  }

  function hideAllErrors() {
    const firstNameErr = document.querySelector('.first-name-err');
    const lastNameErr = document.querySelector('.last-name-err');
    const mailErr = document.querySelector('.mail-err');
    const phoneErr = document.querySelector('.phone-err');

    firstNameErr.style.display = 'none';
    lastNameErr.style.display = 'none';
    mailErr.style.display = 'none';
    phoneErr.style.display = 'none';
  }

  function openModalClickHandler() {
    hideAllErrors()
  }

  function initPage() {
    const modalBtn = document.querySelector('.first-btn');
    const submitModalBtn = document.querySelector('.submit-modal');

    modalBtn.addEventListener('click', openModalClickHandler);
    submitModalBtn.addEventListener('click', submitModalClickHandler);

  }

  initPage();

});