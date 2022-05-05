
const button = document.querySelector('#button');

var contador = 1;

incrementa = () => {
    button.addEventListener("click", function(event){
        //event.preventDefault()
        contador++
        console.log(contador)
    });
}

incrementa()

//console.log(contador)
