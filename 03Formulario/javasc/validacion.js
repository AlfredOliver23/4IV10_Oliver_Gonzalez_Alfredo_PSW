function validar(formulario){
    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    var checarABC ="qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";

    var cadenaNombre = formulario.nombre.value;

    //alert(cadenaNombre);

    var todoesvalido = true;

    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }


    var edad=parseInt(formulario.edad.value);
    alert(edad);
    if((edad <0) || (edad >=99)){
        alert("Ingresa una edad valida entre 01 y 99 años");
        formulario.edad.focus();
        return false;
    }
    var checarABC ="0123456789";

    var cadenaNombre = formulario.edad.value;

    //alert(cadenaNombre);

    var todoesvalido = true;

    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }
}
