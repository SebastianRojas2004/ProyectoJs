let table = [
];

window.onload = cargarEvento;

function cargarEvento(){
    document.getElementById('btn-pagar').addEventListener('click',mostrarTarjeta,false)
    document.getElementById('datosCliente').addEventListener('submit',datosCliente,false);
}

function mostrarTarjeta(){
    let tablebody = document.getElementById('tabla-tarjeta');
    let tablallena = '';

    for (let i = 0; i < table.length; i++) {
            tablallena += '<tr><td>' + table[i].Banco + '</td><td>' + table[i].Nombre + '</td><td>' + table[i].Numero + '</td><td>' + table[i].Fecha + '</td><td>' + table[i].Codigo + '</td><td>' + table[i].Empresa + '</td><td>' + table[i].Pais + '</td></tr>';
    }

    tablebody.innerHTML = tablallena;
}

function datosCliente(event){
    event.preventDefault();

    let BancoUsuario = document.getElementById('Banco').value;
    let NombreUsuario = document.getElementById('Nombre').value;
    let NumeroUsuario = document.getElementById('Numero').value;
    let FechaUsuario = document.getElementById('Fecha').value;
    let CodigoUsuario = document.getElementById('Codigo').value;
    let EmpresaUsuario = document.getElementById('Empresa').value;
    let PaisUsuario = document.getElementById('Pais').value;

    let datosCliente = {Banco: BancoUsuario, Nombre: NombreUsuario, Numero: NumeroUsuario, Fecha: FechaUsuario, Codigo: CodigoUsuario, Empresa: EmpresaUsuario, Pais: PaisUsuario};
    table.push(datosCliente);
}

function pagar(){
    swal({
        title: "¿esta seguro de realizar esta compra?",
        text: "Por favor verifique la informacion otorgada, si es correcta oprima continue",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          delay(1000).then(() => {
            swal("Compra realizada con exito", {
                icon: "success",
              });
          });
        } else {
          swal("Ok, verifique la informacion");
        }
      });
}

function delay(milliseconds){
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}