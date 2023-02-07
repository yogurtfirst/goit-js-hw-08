import throttle from 'lodash.throttle';

const stateForm = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function getData() { 
    return JSON.parse(localStorage.getItem(stateForm));
};
const data = getData() || { email: null, message: null };

function setData(event) {
    if (event.target.name === 'email') {
        data.email = event.target.value;
    } else if (event.target.name === 'message') {
        data.message = event.target.value;
    };
    localStorage.setItem(stateForm, JSON.stringify(data));
};

function submitData(event) {
    event.preventDefault();
    if (data.email || data.message) {
        console.log(data);
        localStorage.removeItem(stateForm);
        form.elements.email.value = '';
        form.elements.message.value = '';
    }
}

if (!form.elements.email.value) form.elements.email.value = data.email;
if (!form.elements.message.value) form.elements.message.value = data.message;

form.addEventListener('input', throttle(setData, 500));
form.addEventListener('submit', submitData);