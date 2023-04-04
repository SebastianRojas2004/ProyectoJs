let producto = ['No a escogido ningun producto','Computador', 'Portatil', 'PlayStation', 'Xbox','Nintendo'];

const productosComprar = new Array();     

    let respuesta = true;

    for (respuesta; respuesta == true;){
    resultadoProducto = window.prompt('¿Que producto desea comprar? \n 1.Computador \n 2.Portatil \n 3.PlayStation \n 4.Xbox \n 5.Nintendo');
    
        if(resultadoProducto == 0){
            window.alert('Escoga por favor un producto');
        }else if(resultadoProducto == 1){
            insertarProducto = producto[1];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 2){
            insertarProducto = producto[2];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 3){
            insertarProducto = producto[3];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 4){
            insertarProducto = producto[4];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }else if(resultadoProducto == 5){
            insertarProducto = producto[5];
            productosComprar.push(insertarProducto);
            respuesta = window.confirm('¿Quiere comprar otro producto?');
        }
    }
    
    let unicosElementos = [];
    let contadorDeVecesrepetidas = [];
    let contador = 1;

    for (let i = 0; i < productosComprar.length; i++){
        if (productosComprar[i+1] === productosComprar[i]){
            contador++;
        }else{
            unicosElementos.push(productosComprar[i]);
            contadorDeVecesrepetidas.push(contador);
            contador = 1;
        }
    }

    let Subtotal1 = 0;
    let Subtotal2 = 0;
    let Subtotal3 = 0;
    let Subtotal4 = 0;
    let Subtotal5 = 0;

    for (let c = 0; c < unicosElementos.length; c++) {
        console.log('El valor de ' + unicosElementos[c] + ' se repite ' + contadorDeVecesrepetidas[c]);
            if(contiene = unicosElementos[c].includes('Computador')){        
                Computador = '2500000' * 1.25; //1.25 es el iva
                Subtotal1 = Computador * contadorDeVecesrepetidas[c];
                console.log(Subtotal1);
            }
            if(contiene = unicosElementos[c].includes('Portatil')){        
                Portatil = '1500000' * 1.25; //1.25 es el iva
                Subtotal2 = Portatil * contadorDeVecesrepetidas[c];
                console.log(Subtotal2);
            }
            if(contiene = unicosElementos[c].includes('PlayStation')){        
                PlayStation = '3000000' * 1.25; //1.25 es el iva
                Subtotal3 = PlayStation * contadorDeVecesrepetidas[c];
                console.log(Subtotal3);
            }
            if(contiene = unicosElementos[c].includes('Xbox')){        
                Xbox = '2800000' * 1.25; //1.25 es el iva
                Subtotal4 = Xbox * contadorDeVecesrepetidas[c];
                console.log(Subtotal4);                
            }
            if(contiene = unicosElementos[c].includes('Nintendo')){        
                Nintendo = '1800000' * 1.25; //1.25 es el iva
                Subtotal5 = Nintendo * contadorDeVecesrepetidas[c];
                console.log(Subtotal5);                            
            }                    
        }

        total = Subtotal1 + Subtotal2 + Subtotal3 + Subtotal4 + Subtotal5;
        console.log('el resultado a pagar es ' + total);