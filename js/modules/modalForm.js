// import Axios from 'axios';
import swal from 'sweetalert';
const axios = require('axios').default;

const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: data
  });
}

function alertMessageSendError() {
  swal({
    title: "ERROR",
    text: "Send problem",
    icon: "error",
    button: "OK!",
  });
}

function alertMessageInvalidInput() {
  swal({
    title: "ERROR",
    text: "No mail specified",
    icon: "error",
    button: "OK!",
  });
}

function alertMessageSuccess() {
  swal({
    title: "Thank you for choosing us",
    text: "The message will come to your e-mail in the near future !",
    icon: "success",
    button: "OK!",
  });
}

function modalForm() {

  const getStartedForm = document.querySelectorAll('[data-form]'),
    getStartedSuccess = document.querySelectorAll('[data-success]'),
    headerFom = document.querySelector(".section-header-wrapper__form"),
    headerFomInput = document.querySelectorAll('.section-header-wrapper__form input');

  getStartedSuccess.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      if (headerFomInput[0].value && headerFomInput[1].value && headerFomInput[1].value.indexOf('@')>0) {
        const formData = new FormData(headerFom);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(json);
        postData("https://jsonplaceholder.typicode.com/posts", json)
          .then(data => {
            headerFom.reset();
            alertMessageSuccess();
          }).catch(() => {
            alertMessageSendError();
          }).finally(() => {
            headerFom.reset();
          });
      } else {
        alertMessageInvalidInput();
      }
    });
  });

  getStartedForm.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      swal({
          content: {
            element: "input",
            attributes: {
              placeholder: "You Email",
              type: "email",
            },
          },
        })
        .then((result) => {
          if (result && result.indexOf('@') > 0) {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                userName: 'unknown',
                userEmail: result
              })
              .then(function (response) {
                console.log(`userEmail:${result}`);
                alertMessageSuccess()
              })
              .catch(function (error) {
                alertMessageSendError();
              });
          } else {
            alertMessageInvalidInput();
          }

        });
    });
  });


}
export default modalForm;