const input_nombre = document.querySelector('#nombre');
const button_submit = document.querySelector('#add');
const content = document.querySelector('.content');

document.addEventListener("DOMContentLoaded", function(){
    const nombre = JSON.parse(localStorage.getItem('data'));

    if(!nombre){
        const p = document.createElement('p');
        const text = document.createTextNode('No hay elementos')
        p.appendChild(text)
        content.appendChild(p)
    }else{
        if(nombre.length > 0) {
            for(let i =0; i < nombre.length; i++ ){
                showNames(nombre, i);          
            }
        }else{
            const p = document.createElement('p');
            const text = document.createTextNode('No hay Elementos');
            
            p.appendChild(text)
            content.appendChild(p)
        }
    }

    button_submit.addEventListener('click', function() {
        const nombre = JSON.parse(localStorage.getItem('data')) || [];
       console.log(nombre);
        const nuevoNombre = input_nombre.value;
        nombre.push(nuevoNombre);
        localStorage.setItem('data' ,JSON.stringify(nombre));

        content.innerHTML = '';

        for(let i =0; i < nombre.length; i++ ){
            showNames(nombre, i);          
        }
    })
} );

function showNames(nombre, i){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const text = document.createTextNode(nombre[i])
    p.appendChild(text)

    const button = document.createElement('button');
    const txtbtn = document.createTextNode('Elminar');
    
    button.appendChild(txtbtn);
    
    button.onclick = () =>{
        Eliminar(i);
    };

    div.appendChild(text)
    div.appendChild(button)
    
    content.appendChild(div)
}

function Eliminar (i) {
    let nombre = JSON.parse(localStorage.getItem('data')) || [];
     nombre = nombre.filter((value, index) => index != i)
     
    localStorage.setItem('data', JSON.stringify(nombre));
    content.innerHTML = "";

     for (let j = 0; j < nombre.length; j++){
        showNames(nombre, j);
     }
}