
const palabras = ['java', 'perro', 'alura','jaiva', 'gato','oracle','murcielago', 'paralelepipedo', 'antonia' , 'pokemon', 'picachu' ];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];




String.prototype.replaceAt = function(index, character) {
    const arr = this.split('');
    arr[index]=character;
    return arr.join('');
}

let contadorFallos = 0 ;  /* cuantas veces me equivoque*/
let palabraConGuiones = palabra.replace(/./g, "_ ");

document.querySelector('#output').innerHTML= palabraConGuiones ;
document.querySelector('#btnComprobar').addEventListener('click', ()=>
{
    const letra = document.querySelector('#letra').value;
    let fallaste = true

    
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra); 
            fallaste = false
            alert("acertaste")
                        
        }        
    }
    if (fallaste ){
       contadorFallos++;
       alert("fallaste")
       const source =`mono/img${contadorFallos}.png`;
       const imagen = document.querySelector('#imagen')
       imagen.src = source;

       if(contadorFallos == 10){
        alert("perdiste la palabra era " + palabra )
        const source =`mono/img${contadorFallos}.png`;
        const imagen = document.querySelector('#imagen')
        
       }

     } 
        else{
            if(palabraConGuiones.indexOf('_')<0){
                 alert("ganaste");
                 imagen.src = `recurzos/victoria.png`;
                
                 
                                
            }
            
        }
        document.querySelector('#output').innerHTML= palabraConGuiones;  
        document.querySelector('#letra').value = '';
        document.querySelector('#letra').focus();
        
} );

/* fin del juego */


 /*-------------diccionario -------------*/
 
 
 function agregarPalabras(){
    
    var datos = document.querySelector('.nuevaPalabra').value
  
    palabras.push(datos)
    console.log(palabras)
    alert("palabra agregada")
 }



