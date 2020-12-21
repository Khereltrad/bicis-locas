function validateForm(){ 		//burbuja(span) mensaje error por vacios
	
	var nombre = $('#name').val();
	var apellido = $('#lastname').val();
	var correo = $('#input-email').val();
	var contrasena = $('#input-password').val();
	var seleccion = $('select').val();

	if(!nombre.match("^[A-Z]{1}[a-z]+$")){ 		
		showError('#name','Favor ingrese el nombre de pila comenzando con mayuscula y sin números');
		// return false;
	}

	if(!apellido.match("^[A-Z]{1}[a-z]+$")){
		showError('#lastname','Favor ingrese el apellido respetando la mayuscula incial y sin números ni acento');
		// return false;
	}
	if(!correo.match("^\\S+@\\S+\\.\\S+$")){
		showError('#input-email','recuerde que una contraseña no inicia con valores ni debe poseer los caracteres "\ () ` ¨"');
		// return false;
	}
	if(contrasena.length < 6 || contrasena == "123456" || contrasena == "098765" ){
		showError('#input-password','Favor ingrese una contraseña de igual o mayor a 6 digitos y que no sea un 123456 o 098765')
		// return false;
	}
	if(seleccion =='0'){
		showError('select','Seleccione un modelo')
		// return false;
	}
}

function showError(element,text){
		$(element).parent().append('<span>'+text+'</span>').css(width,fit-content);
		$(element).focus();
		$(element).siblings('span').last().fadeOut(25500,function(){
		$(this).remove();
		});    
}
