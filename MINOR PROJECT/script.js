const ul = document.getElementById("ul");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const address = document.getElementById("address");
const form = document.getElementById("form");

(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                const Cfirstname = firstname.value;
                const Clastname = lastname.value;
                const Caddress = address.value;
                const list = document.createElement('li');
                const wrap = document.createElement('span');
                wrap.textContent = `${Cfirstname} ${Clastname}, ${Caddress}`;
                list.appendChild(wrap)
                ul.appendChild(list);
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
