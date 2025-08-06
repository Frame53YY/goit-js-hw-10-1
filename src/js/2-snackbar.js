import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Fulfilled',
        message: `promise in ${delay}ms`,
        position: 'topRight',
        icon: ' ',
        iconText: '✅',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Rejected',
        message: `promise in ${delay}ms`,
        position: 'topRight',
        icon: ' ',
        iconText: '❌',
      });
    });
}
