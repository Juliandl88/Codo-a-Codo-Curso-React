const myDoc = document;

let myH1 = myDoc.getElementsByTagName('h1');

let myH3 = myDoc.getElementById("h3");

let contenedorVideo = document.getElementById("video");

//myH3.innerHTML = "Estoy modificando el texto dentro del h3";
//const myButtonStr = "<br><button>Esto es un button</button><br>"


const linkVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/LU99kUnWW3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

/*for (let i = 0; i < cant_element; i++){
    contenedorVideo += linkVideo;
}
*/

let myVideos = myDoc.getElementById("valorInput");

const handleInput = () =>{
    let inputValue = document.getElementById("getVideo").value; // Obtengo el valor del input
    
    if(isNaN(inputValue) || inputValue>10){
        alert("Ingrese un número del 1 al 10")
    }else{
        myDoc.getElementById("valorInput").innerHTML = "Cantidad de links generados: " + inputValue;
        let num = Number(inputValue)
        myDoc.getElementById("numVideos").innerHTML    
            for (let index = 0; index < num; index++) {
                myVideos.innerHTML = myVideos.innerHTML + linkVideo;
            }
            
    }
  }

