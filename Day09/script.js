// Define the function to change text content
function changeText() {
    let element = document.getElementById('myHeader');

    element.innerText = 'New Text';
}

function changeColor(){
    let element = document.getElementById('myHeader');
    element.style.backgroundColor = 'lightgreen';
   
}

const div=document.createElement('div');
div.innerText="New element added to the body";
document.body.appendChild(div);


const ul=document.querySelector('ul');
const li=document.createElement('li');
li.innerText="new li";
ul.appendChild(li);

function deleteEl(){
    const el=document.getElementById('delete');
    if (el) {
        el.remove();
    }
}


function changeImage(){
    const el=document.getElementById('change');
    el.setAttribute('src','https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

    el.style.width='50px';
    el.style.height='50px';

}

const el=document.getElementById('border');
el.addEventListener('mouseover',()=>{
    el.style.border = '2px solid black';
})
el.addEventListener('mouseout',()=>{
    el.style.border = '2px solid white';
})