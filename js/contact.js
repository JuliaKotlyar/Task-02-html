// contact form



document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
   }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.required');

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('.email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }   
      }
    }
  }
   function formAddError(input)  {
    input.parentElement.classList.add('_error');
    inputclassListadd('_error');
  }
   function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function emailTest(input) {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
   }
  function phoneTest(input) {
     return /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/.test(input.value);
  }
});
