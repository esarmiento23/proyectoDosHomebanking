//Declaración de variables

var nombreUsuario = "Exequielsarmiento23";
var saldoCuenta = 5000;
var limiteExtraccion = 1500;
var codigoDeUsuario = 090909;
var cuentaAmigaUno = 1234567;
var cuentaAmigaDos = 7654321;







//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
  iniciarSesion();
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
}

//Funcion para sumar dinero a cuenta

function sumaDinero(cantidadASumar) {
  var cantidadASumar;
  return saldoCuenta += cantidadASumar;
}

//Funcion para restar dinero a cuenta

function restaDinero(cantidadArestar) {
  var cantidadArestar;
  return saldoCuenta -= cantidadArestar;
}

//Funciones Extra

// funcion para validar la extraccion 
function validaMonto(monto) {
  if (monto <= 0) {

    return alert("El monto ingresado es incorrecto");

  } else {
    return true;
  }
}
// funcion para validar el limite de extraccion
function validaLimite(monto) {
  if (monto > limiteExtraccion) {

    return alert("El monto supera el limite de extraccion");

  } else {
    return true;

  }
}

//funcion par validar el saldo en cuenta

function validaSaldoDisponible(monto) {
  if (monto > saldoCuenta) {
    return alert("No tiene Saldo disponible");
  }
  else {
    return true;

  }
}




// funcion para comprobar si el dinero a extrar es multiplo de 100
function multiploDeCien(monto) {

  var multiplo = monto % 100;

  if (multiplo != 0) {
    return alert("El monto ingresado no es multiplo de 100");

  } else {
    return true;
  }
}

//funciones de pago segun servicio

function pagarAgua() {
  var montoAgua = 350;
  if (saldoCuenta > montoAgua) {
    var nuevoSaldo = saldoCuenta - montoAgua;
    var saldoAnterior = nuevoSaldo + montoAgua;
    saldoCuenta = nuevoSaldo;
    actualizarSaldoEnPantalla();
    alert("Saldo anterior:" + saldoAnterior + '\n' + "pago del servicio Agua: " + montoAgua + '\n' + 'Saldo Actual: ' + nuevoSaldo);
  } else {
    return alert("No hay suficiente saldo en la cuenta");
  }
}

function pagarTelefono() {
  var montoTelefono = 425;
  if (saldoCuenta > montoTelefono) {
    var nuevoSaldo = saldoCuenta - montoTelefono;
    var saldoAnterior = nuevoSaldo + montoTelefono;
    saldoCuenta = nuevoSaldo;
    actualizarSaldoEnPantalla();
    alert("Saldo anterior:" + saldoAnterior + '\n' + "pago del servicio Agua: " + montoTelefono + '\n' + 'Saldo Actual: ' + nuevoSaldo);
  } else {
    return alert("No hay suficiente saldo en la cuenta");
  }
}

function pagarLuz() {
  var montoLuz = 210;
  if (saldoCuenta > montoLuz) {
    var nuevoSaldo = saldoCuenta - montoLuz;
    var saldoAnterior = nuevoSaldo + montoLuz;
    saldoCuenta = nuevoSaldo;
    actualizarSaldoEnPantalla();
    alert("Saldo anterior:" + saldoAnterior + '\n' + "pago del servicio Agua: " + montoLuz + '\n' + 'Saldo Actual: ' + nuevoSaldo);
  } else {
    return alert("No hay suficiente saldo en la cuenta");
  }
}
function pagarInternet() {
  var montoInternet = 570;
  if (saldoCuenta > montoInternet) {
    var nuevoSaldo = saldoCuenta - montoInternet;
    var saldoAnterior = nuevoSaldo + montoInternet;
    saldoCuenta = nuevoSaldo;
    actualizarSaldoEnPantalla();
    alert("Saldo anterior:" + saldoAnterior + '\n' + "pago del servicio Agua: " + montoInternet + '\n' + 'Saldo Actual: ' + nuevoSaldo);
  } else {
    return alert("No hay suficiente saldo en la cuenta");
  }
}

// funcion de transferencia

function transferenciaValida(monto) {

  saldoCuenta = saldoCuenta - monto;
  saldoAnterior = saldoCuenta + monto;
  actualizarSaldoEnPantalla();

  return alert("Saldo anterior:" + saldoAnterior + '\n' + "Tranferido: " + monto + '\n' + 'Saldo Actual: ' + saldoCuenta);


}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseFloat(prompt('Cual quiere que sea el nuevo limite?'));

  if (Number.isNaN(nuevoLimite) || nuevoLimite == "" || nuevoLimite === null || nuevoLimite < 0) {
    return alert("Error en ingreso" + '\n' + "Intente nuevamente");
  }else{
  limiteExtraccion = nuevoLimite;
  actualizarLimiteEnPantalla();

  alert('El nuevo limite de extraccion es :' + limiteExtraccion);
}}
// funcion para extraer dinero de la cuenta
function extraerDinero() {
  var dineroAExtraer = parseFloat(prompt('Cuanto dinero quiere extraer?'));

  if (Number.isNaN(dineroAExtraer) || dineroAExtraer == "" || dineroAExtraer === null) {
    return alert("Error en ingreso" + '\n' + "Intente nuevamente");
  }
  else if (validaMonto(dineroAExtraer) == true) {

    if (validaLimite(dineroAExtraer) == true) {

      if (validaSaldoDisponible(dineroAExtraer) == true) {

        if (multiploDeCien(dineroAExtraer) == true) {

          var saldoActualizado = restaDinero(dineroAExtraer);
          var saldoAnterior = saldoActualizado + dineroAExtraer;
          actualizarSaldoEnPantalla();

          alert("Saldo anterior:" + saldoAnterior + '\n' + "Deposito: " + dineroAExtraer + '\n' + 'Saldo Actual: ' + saldoActualizado);
        }
      }
    }

  }
}




// funcion para depositar dinero en la cuenta

function depositarDinero() {
  var dineroADepositar = parseFloat(prompt('Cuanto dinero quiere depositar?'));

  if (Number.isNaN(dineroADepositar) || dineroADepositar == "" || dineroADepositar === null) {
    return alert("Error en ingreso" + '\n' + "Intente nuevamente");
  }
  else if (validaMonto(dineroADepositar) == true) {
    var saldoActualizado = sumaDinero(dineroADepositar);
    var saldoAnterior = saldoActualizado - dineroADepositar;
    actualizarSaldoEnPantalla();

    return alert("Saldo anterior:" + saldoAnterior + '\n' + "Deposito: " + dineroADepositar + '\n' + 'Saldo Actual: ' + saldoActualizado);

  }
}



//funcion para pagar un servicio seleccionado

function pagarServicio() {
  var servicioElegido = parseInt(prompt('Ingrese el numero del servicio que quiere pagar??' + '\n' + '1) Agua ' + '\n' + '2) Telefono ' + '\n' + '3) Luz ' + '\n' + '4) Internet '));

  switch (servicioElegido) {
    case 1:
      pagarAgua();
      break;
    case 2:
      pagarTelefono();
      break;
    case 3:
      pagarLuz();
      break;
    case 4:
      pagarInternet();
      break;
    default: alert('El numero ingresado no pertenece a un Servicio');


  }

}

function transferirDinero() {

  var montoATrasnferir = parseFloat(prompt("Ingrese Monto a transferir"));

  if (Number.isNaN(montoATrasnferir) || montoATrasnferir == "" || montoATrasnferir === null) {
    return alert("Error en ingreso" + '\n' + "Intente nuevamente");
  }
  else if (validaMonto(montoATrasnferir) == true) {


    if (validaSaldoDisponible(montoATrasnferir) == true) {


      var ingresoCuenta = parseInt(prompt("Ingrese cuenta amiga"));

      if (ingresoCuenta == cuentaAmigaUno || cuentaAmigaDos) { // no realiza bien or con cuenta 2
        return transferenciaValida(montoATrasnferir);
      } else {
        return alert("Cuenta NO VALIDA");
      }
    }
  }
}






function iniciarSesion() {
  var codigoIngresado = parseInt(prompt('Ingrese su codigo de Usuario * * * * * * :'));
  if (codigoIngresado !== codigoDeUsuario) {
    saldoCuenta = 0
    return alert("Codigo ingresado INCORRECTO!");
  } else {
    return alert("Bienvenido" + nombreUsuario);
  }


}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}