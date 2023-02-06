import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');

function getData() { 
    return JSON.parse(localStorage.getItem('feedback-form-state'));
};
const data = getData() || { email: null, message: null };

function setData(event) {
    if (event.target.name === 'email') {
        data.email = event.target.value;
    } else if (event.target.name === 'message') {
        data.message = event.target.value;
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

function submitData(event) {
    event.preventDefault();
    if (data.email || data.message) {
        console.log(data);
        localStorage.clear();
        input.value = '';
        textarea.value = '';
    }
}

if (!input.value) input.value = data.email;
if (!textarea.value) textarea.value = data.message;

form.addEventListener('input', throttle(setData, 500));
form.addEventListener('submit', submitData);