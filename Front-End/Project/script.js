const inputHere = document.getElementById('inputItem');
const addBtn = document.getElementById('addItem');
const uoList = document.getElementById('listItem');
/* 
Simple Adding is of 4 steps:
1. The input value taken from <input> is stored somewhere.
2. The creation of <li> item.
3. Then transferring the input value to the <li> item.
4. Finally, adding <li> to the <ul>
*/

/*
Now, Advance Adding and Deleting:
1. The input value taken from <input> is stored somewhere.
2. The creation of <li> item.
3. Then individually create the store: <span> || <input> (checkbox) || <button>  (Delete) -->some changes over changing their type/textContent etc.
4. Insert the textContent in the span we made.
5. Add text to the list & with that add the above stored tags into <li>.
6. After storing them into <li> ---> add <li> to <ul>.
*/

// Delete: easy!! --> whenever clicked within the <li> to the deleteBtn, the <li> will be removed from there

addBtn.addEventListener('click',function(){

    const ipVal = inputHere.value;
    const list = document.createElement('li');
    list.classList.add('list-group-item');
    inputHere.value = '';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const wrapUp = document.createElement('span');
    wrapUp.textContent = ipVal;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    
    list.appendChild(checkBox);
    list.appendChild(wrapUp);
    list.appendChild(deleteBtn);

    uoList.appendChild(list);

    deleteBtn.addEventListener('click',function(){
        uoList.removeChild(list);
    })

    checkBox.addEventListener('change',function(){
        if(checkBox.checked){
            list.classList.add('completed');
        }
        else{
            list.classList.remove('completed');
        }
    })

    inputHere.focus();
})