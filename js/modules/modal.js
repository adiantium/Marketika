import swal from 'sweetalert';

function modal() {

  const getStartedForm = document.querySelectorAll('[data-form]'),
    getStartedSuccess = document.querySelectorAll('[data-success]');
  console.log(getStartedForm);

  getStartedSuccess.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      swal({
        title: "Thank you for choosing us",
        text: "The message will come to your e-mail in the near future !",
        icon: "success",
        button: "OK!",
      });
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
              type: "Email",
            },
          },
        })
        .then((result) => {
          if (result) {
            swal({
              title: "Thank you for choosing us",
              text: "The message will come to your e-mail in the near future !",
              icon: "success",
              button: "OK!",
            });
          } else {
            swal({
              title: "Don't leave the input field blank !",
              text: "Enter your emai",
              icon: "error",
            });
          }

        });
    });
  });


}
export default modal;