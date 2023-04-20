const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
})

const cartInfo = document.querySelector('.cart-product');

const rowProduct = document.querySelector('.row-product');

/*Lista de todos los contenedores de productos*/
const productList = document.querySelector('.container-items');

/* Variable de arreglo de producto*/

let allProducts = [];
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos')

productList.addEventListener('click', e => {
    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        }

        const exits = allProducts.some(product => product.title === infoProduct.title)

        if(exits){
            const products = allProducts.map(product => {
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product;
                }else{
                    return product;
                }
            })
        }else {
            allProducts = [...allProducts,infoProduct]
        }

        show();
    }
})

rowProduct.addEventListener('click',(e) => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(product => product.title !== title)
    }

    console.log(allProducts);
    show();
})

// funcion para mostrar en la pagina (HTML)
const show = () => {

    if(!allProducts.length){
        containerCartProducts.innerHTML = `<p class ="cart-empty">El carrito esta vacio`
    }

    let total = 0;
    let totalOfProducts = 0;

    rowProduct.innerHTML = '';

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
            </span>
        </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
            </svg>`;

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `€${total} M`;
    countProducts.innerText = totalOfProducts;
}

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

window.addEventListener('load',function(){
    document.getElementById('btn-pagar').addEventListener('click',function(){
        alert('Compra realizada con exito, para validar los datos guardados vuelva a ejecutar el voton de pagar');
    })
})