let page = document.querySelector('#Page');
let InputTodo = document.querySelector("#inputTodo");// string of input to be added to array or obj to display todo 
let InputDate = document.querySelector("#InputDate");// set the date for the Todo
let AddTd = document.querySelector("#AddToDo");//bttn to add a todo
let RemoveTd = document.querySelector("#RmToDo");//bttn to remove todo
let list = document.querySelector('#List');
let RmList = document.getElementsByClassName('.Check');
let ListRm = document.getElementsByClassName('.List1');
let addDiv = document.createElement('div');
page.addEventListener('submit',submit);


function submit(event){
event.preventDefault();
let Li = document.createElement('li');
Li.innerText = InputTodo.value + ' '+InputDate.value;
let addDiv = document.createElement('div');
list.appendChild(addDiv);
addDiv.appendChild(Li);
InputTodo.value = '';
addDiv.addEventListener('click',function(){
    if (addDiv.style.textDecoration==="") {
        addDiv.style.textDecoration = 'line-through';
       
    }else{
        addDiv.style.textDecoration = "";
    }
    });
    
function removeChild(){
    if (addDiv.style.textDecoration==='line-through') {
        addDiv.remove();
        }else{ addDiv.style.textDecoration = "";
    
    
    }
    
    RemoveTd.addEventListener('click',removeChild());







}

function deleteAllHandler(){
    //document.getElementById('todolist').innerHTML = '';
    if (list.hasChildNodes){
    list.replaceChildren();
    }
}






















//page.addEventListener('submit',function(event){
//     event.preventDefault();
//     let a = InputTodo.value;
//    let b = InputDate.value;
//    let In = document.createElement('input'); 
//    In.type = 'checkbox';
//   In.className = "Check";
//    let li = document.createElement('li');
//    li.className = 'List1';
//    li.innerText = a+' '+b;
//      list.appendChild(li);
//     li.appendChild(In);
//      InputTodo.value = '';
    
    
    
//     });

// RemoveTd.addEventListener('click',function(event){
//     event.preventDefault();
//     if (RmList.checked === true); {
//    list.remove(RmList);

// }

// });

// ListRm.addEventListener('click',function(){
// ListRm.style.textDecoration = 'line-through';


//  });






//     let element = document.createElement('input');
// element.type = "checkbox"