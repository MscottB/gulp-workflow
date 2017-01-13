(function(){
    function nombrar(nombre){
        return nombre;
    }
    function saludar(nombre){
        console.log(nombre, ', saludar desde curso capitulo 5');
    }

    saludar(nombrar('Michael Scott')); 

})();