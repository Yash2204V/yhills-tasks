let select = document.querySelector('select');
let para = document.querySelector('p');
select.addEventListener("change",getMethod);

function getMethod() {
    let lang = select.value;
    if(lang == "html"){
        para.textContent = "HTML is HyperText Markup Language.";
    }
    else if(lang == "css"){
        para.textContent = "CSS is Cascading Style Sheet";
    }
    else{
        para.textContent = "Javascipt is used to give logic to the website.";
    }
}
