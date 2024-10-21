function iniciarPrograma()
{
    //FECHA
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}/${month}/${year}`;
    console.log(currentDate);

    let inputDate = document.getElementById('fecha');

    inputDate.innerHTML = currentDate;
    //VISIBILIDAD DE SECCIONES
    document.getElementById('portada').style.display='block';
    document.getElementById('introduccion').style.display='none'
    document.getElementById('menu-principal').style.display='none'
    document.getElementById('unidad-2-introduccion').style.display='none'
    document.getElementById('unidad-2-menu').style.display='none'
    document.getElementById('falsa-posicion-1').style.display='none'
    document.getElementById('falsa-posicion-2').style.display='none'
    document.getElementById('newton-1').style.display='none'
    document.getElementById('newton-2').style.display='none'
    document.getElementById('secante-1').style.display='none'
    document.getElementById('secante-2').style.display='none'
    document.getElementById('salida').style.display='none';
    document.getElementById('unidad-3-introduccion').style.display='none';
    document.getElementById('unidad-3-menu').style.display='none';
    document.getElementById('gauss-jordan-1').style.display='none';
    document.getElementById('gauss-jordan-2').style.display='none';
    document.getElementById('jacobi-1').style.display='none';
    document.getElementById('jacobi-2').style.display='none';
    document.getElementById('gauss-seidel-1').style.display='none';
    document.getElementById('gauss-seidel-2').style.display='none';
    document.getElementById('gauss-seidel-2').style.display='none';
    document.getElementById('unidad-4-introduccion').style.display='none';
    document.getElementById('unidad-4-menu').style.display='none';
    document.getElementById('crout-1').style.display='none';
    document.getElementById('crout-2').style.display='none';
    document.getElementById('cholesky-1').style.display='none';
    document.getElementById('cholesky-2').style.display='none';
    document.getElementById('unidad-5-introduccion').style.display='none';
    document.getElementById('unidad-5-menu').style.display='none';
    document.getElementById('potencia-1').style.display='none';
    document.getElementById('potencia-2').style.display='none';
    document.getElementById('potencia-inversa-1').style.display='none';
    document.getElementById('potencia-inversa-2').style.display='none';    
    document.getElementById('solucion-fp').style.display='none';
    document.getElementById('solucion-n').style.display = 'none'
    //TRANSICIONES
    botonSiguiente = document.getElementById('siguiente');
    botonSiguiente.addEventListener('click',function()
    {
        document.getElementById('portada').style.display='none';
        document.getElementById('introduccion').style.display='block'
    });
    botonRegresar = document.getElementById('regresar');
    botonRegresar.addEventListener('click',function(){
        document.getElementById('portada').style.display='block';
        document.getElementById('introduccion').style.display='none'
    });
    botonSiguiente2 = document.getElementById('siguiente-2');
    botonSiguiente2.addEventListener('click',function()
    {
        document.getElementById('introduccion').style.display='none';
        document.getElementById('menu-principal').style.display='block'
    });
    botonRegresar2 = document.getElementById('regresar-2')
    botonRegresar2.addEventListener('click',function(){
        document.getElementById('introduccion').style.display='block';
        document.getElementById('menu-principal').style.display='none';
    })
    //SALIDA
    botonSalir = document.getElementById('salir')
    botonSalir.addEventListener('click',salida);
    botonRegresarU21 = document.getElementById('regresar-u-2-1');
    botonRegresarU21.addEventListener('click',function(){
        document.getElementById('menu-principal').style.display='block'
        document.getElementById('unidad-2-introduccion').style.display='none'
    });
    botonSiguienteU21 = document.getElementById('siguiente-u-2-1');
    botonSiguienteU21.addEventListener('click',function(){
        document.getElementById('unidad-2-introduccion').style.display='none'
        document.getElementById('unidad-2-menu').style.display='block'
    })
    let botonRegresarU22 = document.getElementById('regresar-u-2-2');
    botonRegresarU22.addEventListener('click',function(){
        document.getElementById('unidad-2-menu').style.display='none'
        document.getElementById('unidad-2-introduccion').style.display='block'
    })
    //SELECCION DE UNIDAD
    let botonSeleccionar = document.getElementById('seleccionar')
    botonSeleccionar.addEventListener('click', seleccionarUnidad);
    //SELECCION DE METODO UNIDAD II
    let botonSiguienteU22 = document.getElementById('siguiente-u-2-2');
    botonSiguienteU22.addEventListener('click',seleccionarU2);
    //SELECCION DE METODO UNIDAD III
    let botonSiguienteU32 = document.getElementById('siguiente-u-3-2');
    botonSiguienteU32.addEventListener('click',seleccionarU3);
    //SELECCION DE METODO UNIDAD IV
    let botonSiguienteU42 = document.getElementById('siguiente-u-4-2');
    botonSiguienteU42.addEventListener('click',seleccionarU4);
    //SELECCION DE METODO UNIDAD V
    let botonSiguienteU52 = document.getElementById('seleccionar-u-5-2');
    botonSiguienteU52.addEventListener('click',seleccionarU5);
    //RESOLUCION UNIDAD I
    let botonResolverFP = document.getElementById('resolver-f-p');
    botonResolverFP.addEventListener('click',resolverFP);
    //
    let botonResolverN = document.getElementById('resolver-n');
    botonResolverN.addEventListener('click',resolverN);
}
//SELECCION UNIDAD 
function seleccionarUnidad()
{
    let inputUnidad2 = document.getElementById('u-2');
    let inputUnidad3 = document.getElementById('u-3');
    let inputUnidad4 = document.getElementById('u-4');
    let inputUnidad5 = document.getElementById('u-5');

    if(inputUnidad2.checked)
    {
        document.getElementById('menu-principal').style.display='none';
        document.getElementById('unidad-2-introduccion').style.display='block';
    }
    else if(inputUnidad3.checked)
    {
        document.getElementById('menu-principal').style.display='none';
        let a = document.getElementById('unidad-3-introduccion');
        a.style.display='block';
        let b = document.getElementById('unidad-3-menu');

        let botonRegresarU31 = document.getElementById('regresar-u-3-1')
        botonRegresarU31.addEventListener('click',function(){
            regresoMP(a);
        });
        let botonRegresarU32 = document.getElementById('regresar-u-3-2')
        botonRegresarU32.addEventListener('click',function(){
            regresoMI(a,b);
        });
        let botonSiguienteU31 = document.getElementById('siguiente-u-3-1')
        botonSiguienteU31.addEventListener('click',function(){
            siguienteU(a,b);
        })
    }
    else if(inputUnidad4.checked)
    {
        document.getElementById('menu-principal').style.display='none';

        let a = document.getElementById('unidad-4-introduccion');
        a.style.display='block';
        let b = document.getElementById('unidad-4-menu');


        let botonRegresoU41 = document.getElementById('regresar-u-4-1')
        botonRegresoU41.addEventListener('click',function(){
            regresoMP(a);
        });
        let botonRegresarU42 = document.getElementById('regresar-u-4-2')
        botonRegresarU42.addEventListener('click',function(){
            regresoMI(a,b);
        });
        let botonSiguienteU41 = document.getElementById('siguiente-u-4-1')
        botonSiguienteU41.addEventListener('click',function(){
            siguienteU(a,b);
        })
    }
    else if(inputUnidad5.checked)
    {
        document.getElementById('menu-principal').style.display='none';
        let a = document.getElementById('unidad-5-introduccion');
        a.style.display='block';
        let b = document.getElementById('unidad-5-menu');

        let botonRegresoU31 = document.getElementById('regresar-u-5-1')
        botonRegresoU31.addEventListener('click',function(){
            regresoMP(a);
        });
        let botonRegresarU52 = document.getElementById('regresar-u-5-2')
        botonRegresarU52.addEventListener('click',function(){
            regresoMI(a,b);
        });
        let botonSiguienteU51 = document.getElementById('siguiente-u-5-1')
        botonSiguienteU51.addEventListener('click',function(){
            siguienteU(a,b);
        })
    }
    else
    {
        alert('Ingresa una opción :)'); 
    }
}
//FUNCIONES PARA TRANSICIONES
function regresoMP(a){
    a.style.display = 'none'
    document.getElementById('menu-principal').style.display='block';
}
function regresoMI(a,b){
    a.style.display = 'block';
    b.style.display = 'none';
}
function siguienteU(a,b){
    a.style.display = 'none'
    b.style.display = 'block'
}
//SELECCION UNIDAD 2
function seleccionarU2()
{
    let inputFalsaPosicion = document.getElementById('falsa-posicion');
    let inputNewton = document.getElementById('newton');
    let inputSecante = document.getElementById('secante')

    if(inputFalsaPosicion.checked)
    {
        let a = document.getElementById('falsa-posicion-1')
        let b = document.getElementById('unidad-2-menu')
        let c = document.getElementById('falsa-posicion-2')

        a.style.display = 'block'
        b.style.display = 'none'

        let botonRegresarU2FP = document.getElementById('regresar-u-2-f-p');
        botonRegresarU2FP.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarU2FP2 = document.getElementById('regresar-u-2-f-p-2');
        botonRegresarU2FP2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteU2FP = document.getElementById('siguiente-u-2-f-p')
        botonSiguienteU2FP.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir2 = document.getElementById('salir-2')
        botonSalir2.addEventListener('click',salida)
    }
    else if(inputNewton.checked)
    {
        let a = document.getElementById('newton-1')
        let b = document.getElementById('unidad-2-menu')
        let c = document.getElementById('newton-2')

        a.style.display = 'block';
        b.style.display = 'none';

        let botonRegresarU2N = document.getElementById('regresar-u-2-n');
        botonRegresarU2N.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        })
        let botonRegresarU2N2 = document.getElementById('regresar-u-2-n-2');
        botonRegresarU2N2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteU2N = document.getElementById('siguiente-u-2-n')
        botonSiguienteU2N.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir3 = document.getElementById('salir-3')
        botonSalir3.addEventListener('click',salida)
    }
    else if(inputSecante.checked) 
    {
        let a = document.getElementById('secante-1')
        let b = document.getElementById('unidad-2-menu')
        let c = document.getElementById('secante-2')

        a.style.display = 'block';
        b.style.display = 'none';

        let botonRegresarU2S = document.getElementById('regresar-u-2-s');
        botonRegresarU2S.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarU2S2 = document.getElementById('regresar-u-2-s-2');
        botonRegresarU2S2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteU2S = document.getElementById('siguiente-u-2-s')
        botonSiguienteU2S.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir4 = document.getElementById('salir-4')
        botonSalir4.addEventListener('click',salida)
    }
    else
    {
        alert('Ingresa una opcion :)')
    }
}
//SELECCION UNIDAD 3
function seleccionarU3(){
    let inputGaussJordan = document.getElementById('gauss-jordan');
    let inputJacobi = document.getElementById('jacobi');
    let inputGaussSeidel = document.getElementById('gauss-seidel');

    if(inputGaussJordan.checked){
        let a = document.getElementById('gauss-jordan-1');
        let b = document.getElementById('unidad-3-menu');
        let c = document.getElementById('gauss-jordan-2');

        a.style.display = 'block';
        b.style.display = 'none';

        let botonRegresarGJ = document.getElementById('regresar-g-j');
        botonRegresarGJ.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarGJ2 = document.getElementById('regresar-g-j-2');
        botonRegresarGJ2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteGJ = document.getElementById('siguiente-g-j')
        botonSiguienteGJ.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir = document.getElementById('salir-5');
        botonSalir.addEventListener('click',salida);
    }
    else if(inputJacobi.checked){
        let a = document.getElementById('jacobi-1')
        let b = document.getElementById('unidad-3-menu')
        let c = document.getElementById('jacobi-2')

        a.style.display = 'block'
        b.style.display = 'none'

        let botonRegresarJ = document.getElementById('regresar-j');
        botonRegresarJ.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarJ2 = document.getElementById('regresar-j-2');
        botonRegresarJ2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteJ = document.getElementById('siguiente-j')
        botonSiguienteJ.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir = document.getElementById('salir-6');
        botonSalir.addEventListener('click',salida);
    }
    else if(inputGaussSeidel.checked){
        let a = document.getElementById('gauss-seidel-1')
        let b = document.getElementById('unidad-3-menu')
        let c = document.getElementById('gauss-seidel-2')

        a.style.display = 'block'
        b.style.display = 'none'

        let botonRegresarGS = document.getElementById('regresar-g-s');
        botonRegresarGS.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarGS2 = document.getElementById('regresar-g-s-2');
        botonRegresarGS2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteGS = document.getElementById('siguiente-g-s')
        botonSiguienteGS.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir = document.getElementById('salir-7');
        botonSalir.addEventListener('click',salida);
    }
    else 
    {
        alert('Ingresa una opcion valida :)');
    }
}
//SELECCION UNIDAD 4
function seleccionarU4(){
    let inputCrout = document.getElementById('crout');
    let inputCholesky = document.getElementById('cholesky');

    if(inputCrout.checked){
        let a = document.getElementById('crout-1');
        let b = document.getElementById('unidad-4-menu');
        let c = document.getElementById('crout-2');

        a.style.display = 'block'
        b.style.display = 'none'

        let botonRegresarC = document.getElementById('regresar-c');
        botonRegresarC.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarC2 = document.getElementById('regresar-c-2');
        botonRegresarC2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteC = document.getElementById('siguiente-c')
        botonSiguienteC.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir = document.getElementById('salir-8');
        botonSalir.addEventListener('click',salida);
    }
    else if(inputCholesky.checked){
        let a = document.getElementById('cholesky-1');
        let b = document.getElementById('unidad-4-menu');
        let c = document.getElementById('cholesky-2');

        a.style.display = 'block'
        b.style.display = 'none'

        let botonRegresarCsky = document.getElementById('regresar-csky');
        botonRegresarCsky.addEventListener('click',function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarCsky2 = document.getElementById('regresar-csky-2');
        botonRegresarCsky2.addEventListener('click',function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteCsky = document.getElementById('siguiente-csky')
        botonSiguienteCsky.addEventListener('click',function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir = document.getElementById('salir-9');
        botonSalir.addEventListener('click',salida);
    }
    else{
        alert('Ingresa una opción válida :)');
    }
}
//SELECCION UNIDAD V
function seleccionarU5(){
    let inputPotencia = document.getElementById('potencia');
    let inputPotenciaInversa = document.getElementById('potencia-inversa');
    
    if(inputPotencia.checked){
        let a = document.getElementById('potencia-1');
        let b = document.getElementById('unidad-5-menu');
        let c = document.getElementById('potencia-2');
    
        a.style.display = 'block';
        b.style.display = 'none';
    
        let botonRegresarP = document.getElementById('regresar-p');
        botonRegresarP.addEventListener('click', function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarP2 = document.getElementById('regresar-p-2');
        botonRegresarP2.addEventListener('click', function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguienteP = document.getElementById('siguiente-p');
        botonSiguienteP.addEventListener('click', function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir = document.getElementById('salir-9');
        botonSalir.addEventListener('click', salida);
    }
    else if(inputPotenciaInversa.checked){
        let a = document.getElementById('potencia-inversa-1');
        let b = document.getElementById('unidad-5-menu');
        let c = document.getElementById('potencia-inversa-2');
    
        a.style.display = 'block';
        b.style.display = 'none';
    
        let botonRegresarPi = document.getElementById('regresar-p-i');
        botonRegresarPi.addEventListener('click', function(){
            a.style.display = 'none';
            b.style.display = 'block';
        });
        let botonRegresarPi2 = document.getElementById('regresar-p-i-2');
        botonRegresarPi2.addEventListener('click', function(){
            a.style.display = 'block';
            c.style.display = 'none';
        });
        let botonSiguientePi = document.getElementById('siguiente-p-i');
        botonSiguientePi.addEventListener('click', function(){
            a.style.display = 'none';
            c.style.display = 'block';
        });
        let botonSalir = document.getElementById('salir-10');
        botonSalir.addEventListener('click', salida);
    }
    else{
        alert('Ingresa una opción válida :)');
    }
}
//RESOLVER FALSA POSICION
function resolverFP(){
    let a = parseFloat(document.getElementById('inter-1').value);
    let b = parseFloat(document.getElementById('inter-2').value);
    let inputEcuacion1 = document.getElementById('ecuacion-1-f-p');
    let inputEcuacion2 = document.getElementById('ecuacion-2-f-p');
    let tablaFP = document.getElementById('tabla-f-p');

    if(inputEcuacion1.checked){
        let table = '<table border="1">'; // Agregar un borde a la tabla
        table += '<thead><tr><th>n</th><th>a</th><th>b</th><th>c</th><th>fa</th><th>fb</th><th>fc</th></tr></thead>'; // Encabezados de la tabla
        table += '<tbody>'; // Cuerpo de la tabla

        let c;
        let fc;
        let n = 1;

        do {
            table += '<tr>';
            
            let fa = a * Math.exp(a) - a**3 - 3; // Cálculo de fa
            let fb = b * Math.exp(b) - b**3 - 3; // Cálculo de fb
            c = a - fa * ((a - b) / (fa - fb)); // Cálculo de c
            fc = c * Math.exp(c) - c**3 - 3; // Cálculo de fc (sin let para no redeclararla)
            
            // Actualizar a y b según las condiciones
            if (fa * fc > 0) {
                a = c; // Si fa y fc tienen el mismo signo, actualiza 'a'
            } else {
                b = c; // Si fa y fc tienen signos opuestos, actualiza 'b'
            }

            // Agregar los valores a la tabla
            table += `<td>${n}</td>`; // Iteración
            table += `<td>${a.toFixed(4)}</td>`; // Valor de a
            table += `<td>${b.toFixed(4)}</td>`; // Valor de b
            table += `<td>${c.toFixed(4)}</td>`; // Valor de c
            table += `<td>${fa.toFixed(4)}</td>`; // Valor de fa
            table += `<td>${fb.toFixed(4)}</td>`; // Valor de fb
            table += `<td>${fc.toFixed(4)}</td>`; // Valor de fc
            table += '</tr>';
            
            n++; // Incrementar el contador de iteraciones

        } while (Math.abs(fc) > 0.00001); // Salir cuando fc tenga 5 decimales correctos

        table += '</tbody></table>'; // Cerrar las etiquetas tbody y table
        tablaFP.innerHTML = table; // Asignar el HTML de la tabla al elemento
        document.getElementById('sol-f-p').innerHTML = c.toFixed(4); // Mostrar la solución final

        document.getElementById('solucion-fp').style.display = 'block'
    }
    else if(inputEcuacion2.checked)
    {
        let table = '<table border="1">'; // Agregar un borde a la tabla
        table += '<thead><tr><th>n</th><th>a</th><th>b</th><th>c</th><th>fa</th><th>fb</th><th>fc</th></tr></thead>'; // Encabezados de la tabla
        table += '<tbody>'; // Cuerpo de la tabla
        let c;
        let fc;
        let n=1;
        do
        {
            table += '<tr>'
            
            let fa = a**2 - Math.exp(a) - 3 * a + 2; // Cálculo de fa
            let fb = b**2 - Math.exp(b) - 3 * b + 2; // Cálculo de fb
            c = a - fa * ((a - b) / (fa - fb)); // Cálculo de c
            fc = c**2 - Math.exp(c) - 3 * c + 2; // Cálculo de fc
        
            // Actualizar a y b según las condiciones
            if (fa * fc > 0) {
                a = c; // Si fa y fc tienen el mismo signo, actualiza 'a'
            }
            if (fb * fc > 0) {
                b = c; // Si fb y fc tienen el mismo signo, actualiza 'b'
            }
            
            // Agregar los valores a la tabla
            table += `<td>${n}</td>`
            table += `<td>${a.toFixed(4)}</td>`; // Usar toFixed para limitar los decimales
            table += `<td>${b.toFixed(4)}</td>`;
            table += `<td>${c.toFixed(4)}</td>`;
            table += `<td>${fa.toFixed(4)}</td>`;
            table += `<td>${fb.toFixed(4)}</td>`;
            table += `<td>${fc.toFixed(4)}</td>`;
            table += '</tr>';
            n++;
        } while (Math.abs(fc)>0.00001); // Cambiar la condición de salida según lo que necesites
        
        table += '</tbody></table>'; // Cerrar las etiquetas tbody y table
        tablaFP.innerHTML = table; // Asignar el HTML de la tabla al elemento
        document.getElementById('sol-f-p').innerHTML = c.toFixed(4);

        document.getElementById('solucion-fp').style.display='block';
    }
    else
    {
        alert('Selecciona una ecuación para resolver');
    }
}
//RESOLVER NEWTON
function resolverN(){
    let x = parseFloat(document.getElementById('valor-inicial').value);
    let tablaN = document.getElementById('tabla-n');
    let fx;
    let n=1;

    let inputEcuacion1 = document.getElementById('ecuacion-1-n');
    let inputEcuacion2 = document.getElementById('ecuacion-2-n');

    if(inputEcuacion1.checked){
        let table = '<table border="1">'; // Agregar un borde a la tabla
        table += '<thead><tr> <th>n</th>  <th>\(x_n\)</th>  <th>\(f(x)\)</th>  <th>\(f´(x)\)</th></tr></thead>'; // Encabezados de la tabla
        table += '<tbody>'; // Cuerpo de la tabla
        do{
            fx = x*Math.sin(x) + 2*x**2-1;
            let fdx = x*Math.cos(x)+Math.sin(x)+4*x;

            table += `<td>${n}</td>`
            table += `<td>${x.toFixed(4)}</td>`
            table += `<td>${fx.toFixed(4)}</td>`
            table += `<td>${fdx.toFixed(4)}</td>`
            table += '</tr>';

            x = x - (fx/fdx);
            n++;
        }while(Math.abs(fx)>0.0001);    
        tablaN.innerHTML=table;    
        document.getElementById('sol-n').innerHTML = x.toFixed(4);
        document.getElementById('solucion-n').style.display = 'block'
    }
    else if(inputEcuacion2.checked){
        let table = '<table border="1">'; // Agregar un borde a la tabla
        table += '<thead><tr> <th>n</th>  <th>\(x_n\)</th>  <th>\(f(x)\)</th>  <th>\(f´(x)\)</th></tr></thead>'; // Encabezados de la tabla
        table += '<tbody>'; // Cuerpo de la tabla

        let n = 1; // Inicializar n
        let fx;

        do {
            fx = x**2 - Math.exp(x) - 3 * x + 2; // Cálculo de f(x)
            let fdx = 2 * x - Math.exp(x) - 3;   // Cálculo de f'(x)

            // Agregar los valores a la tabla
            table += `<tr>`;
            table += `<td>${n}</td>`; // Iteración
            table += `<td>${x.toFixed(4)}</td>`; // Valor de x
            table += `<td>${fx.toFixed(4)}</td>`; // Valor de f(x)
            table += `<td>${fdx.toFixed(4)}</td>`; // Valor de f'(x)
            table += `</tr>`;

            x = x - (fx / fdx); // Actualización de x con el método de Newton-Raphson
            n++; // Incrementar el contador

        } while (Math.abs(fx) > 0.0001); // Salir cuando f(x) converja a 4 decimales

        table += '</tbody></table>'; // Cerrar las etiquetas tbody y table

        // Mostrar la tabla en el elemento con id 'tablaN'
        tablaN.innerHTML = table;

        // Mostrar la solución final en el elemento con id 'sol-n'
        document.getElementById('sol-n').innerHTML = x.toFixed(4);

        // Mostrar la sección donde está la solución
        document.getElementById('solucion-n').style.display = 'block';
    }
    else{
        alert('Ingresa una solución para resolver');
    }
}
//SALIDA
function salida(){
    document.getElementById('portada').style.display='none';
    document.getElementById('introduccion').style.display='none'
    document.getElementById('menu-principal').style.display='none'
    document.getElementById('unidad-2-introduccion').style.display='none'
    document.getElementById('unidad-2-menu').style.display='none'
    document.getElementById('falsa-posicion-1').style.display='none'
    document.getElementById('falsa-posicion-2').style.display='none'
    document.getElementById('newton-1').style.display='none'
    document.getElementById('newton-2').style.display='none'
    document.getElementById('secante-1').style.display='none'
    document.getElementById('secante-2').style.display='none'
    document.getElementById('salida').style.display='block';
    document.getElementById('unidad-3-introduccion').style.display='none';
    document.getElementById('unidad-3-menu').style.display='none';
    document.getElementById('gauss-jordan-1').style.display='none';
    document.getElementById('gauss-jordan-2').style.display='none';
    document.getElementById('jacobi-1').style.display='none';
    document.getElementById('jacobi-2').style.display='none';
    document.getElementById('gauss-seidel-1').style.display='none';
    document.getElementById('gauss-seidel-2').style.display='none';
    document.getElementById('gauss-seidel-2').style.display='none';
    document.getElementById('unidad-4-introduccion').style.display='none';
    document.getElementById('unidad-4-menu').style.display='none';
    document.getElementById('crout-1').style.display='none';
    document.getElementById('crout-2').style.display='none';
    document.getElementById('cholesky-1').style.display='none';
    document.getElementById('cholesky-2').style.display='none';
    document.getElementById('unidad-5-introduccion').style.display='none';
    document.getElementById('unidad-5-menu').style.display='none';
    document.getElementById('potencia-1').style.display='none';
    document.getElementById('potencia-2').style.display='none';
    document.getElementById('potencia-inversa-1').style.display='none';
    document.getElementById('potencia-inversa-2').style.display='none';
}

window.addEventListener('load', iniciarPrograma);