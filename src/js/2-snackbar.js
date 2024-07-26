import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"; 

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const delayInput = form.querySelector('input[name="delay"]');
        const stateInput = form.querySelector('input[name="state"]:checked');

        if (!stateInput) {
            iziToast.error({
                icon: '',
                close: false,
                title: 'Error',
                message: 'Please select a state',
                position: 'topRight'
            });
            return;
        }

        const delay = Number(delayInput.value);
        const state = stateInput.value;

        createPromise(delay, state)
            .then(() => {
                iziToast.success({
                    icon: '',
                    close: false,
                    title: 'Success',
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: 'topRight'
                });
            })
            .catch(() => {
                iziToast.error({
                    icon: '',
                    close: false,
                    title: 'Error',
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: 'topRight'
                });
            })
            .finally(() => {
                delayInput.value = '';
            });
    });

    function createPromise(delay, state) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === 'fulfilled') {
                    resolve();
                } else if (state === 'rejected') {
                    reject();
                }
            }, delay);
        });
    }
});
