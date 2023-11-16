function registrar() {
    var input = document.getElementsByTagName("input");
    var comprobacion = false;
    var valor;
    for(let i = 0; i < input.length; i++) {
		if (input[i].value !== "" && input[i].value !== " ") {
            if (input[i] == input[0]) {
                valor = input[i].value;
                let RegEx = /^[\s-_\\/]?[a-zA-Z]{3,}[\s-_\\/]?([a-zA-Z]+)?[\s-_\\/]?$/;
                let nombreValido = RegEx.test(valor);
				comprobacion = comprobacion || nombreValido;
                if (!nombreValido) {
                    alert(`El nombre '${valor}' es inválido`);
                }
            }
            else if (input[i] == input[1]) {
                valor = input[i].value;
                let RegEx = /^[\s-_\\/]?[a-zA-Z]{3,}[\s-_\\/]?([a-zA-Z]+)?[\s-_\\/]?$/;
                let apellidoValido = RegEx.test(valor);
				comprobacion = comprobacion && apellidoValido;
                if (!apellidoValido) {
                    alert(`El apellido '${valor}' es inválido`);
                }
            }
            else if (input[i] == input[2]) {
                valor = input[i].value;
                let RegEx = /^[\w-?.*+!\$&%#|,<>]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                let correoValido = RegEx.test(valor);
				comprobacion = comprobacion && correoValido;
                if (!correoValido) {
                    alert(`El correo electrónico '${valor}' es inválido`);
                }
            }
            else if (input[i] == input[3]) {
                valor = input[i].value;
                let RegEx = /^(\+[\d]{1,4}[\s-])?\(?\d{3,4}[\s/)-]{0,2}\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
                let telefonoValido = RegEx.test(valor);
				comprobacion = comprobacion && telefonoValido;
                if (!telefonoValido) {
                    alert(`El número telefónico '${valor}' es inválido`);
                }
            }
            else if (input[i] == input[4]){
                valor = input[i].value;
                let RegEx = /^(0?[1-9]|[1-2]\d|3[01])\/(0?[1-9]|1[0-2])\/(([^2\D]\d|2[0-4])|19\d{2}|20([01]\d|2[0-3]))$/;
                let fechaValida = RegEx.test(valor);
				comprobacion = comprobacion && fechaValida;
                if (!fechaValida) {
                    alert(`La fecha de nacimiento '${valor}' es inválida`);
                }
                else if (comprobacion) {
                    alert("El registro ha sido exitoso");
					for(let i in input){
                        input[i].value = "";
                    }
                }
            }
        }
        else {
            return alert("Por favor, complete todos los campos");
        }
    }
};

//Función alternativa

/*function registrar() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var correo = document.getElementById("correo").value;
	var telefono = document.getElementById("telefono").value;
	var nacimiento = document.getElementById("nacimiento").value;
    let input = document.getElementsByTagName("input");

	var regexNombreyApellido = /^[\s-_\\/]?[a-zA-Z]{3,}[\s-_\\/]?([a-zA-Z]+)?[\s-_\\/]?$/;
	var regexCorreo = /^[\w-?.*+!\$&%#|,<>]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	var regexTelefono = /^(\+[\d]{1,4}[\s-])?\(?\d{3,4}[\s/)-]{0,2}\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
	var regexNacimiento = /^(0?[1-9]|[1-2]\d|3[01])\/(0?[1-9]|1[0-2])\/(([^2\D]\d|2[0-4])|19\d{2}|20([01]\d|2[0-3]))$/;
	if (!regexNombreyApellido.test(nombre)) {
		alert("Nombre inválido");
	}
	else if (!regexNombreyApellido.test(apellido)) {
		alert("Apellido inválido");
	}
	else if (!regexCorreo.test(correo)) {
		alert("Correo inválido");
	}
	else if (!regexTelefono.test(telefono)) {
		alert("Teléfono inválido");
	}
	else if (!regexNacimiento.test(nacimiento)) {
		alert("Fecha de nacimiento inválida, debe estar en formato dd/mm/yyyy");
	}
	else {
        alert("Éxito");
        for(let i in input){
            input[i].value = "";
        }
    }
};*/


