/*
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

//Cadena de Texto
const nombre = 'Miguel';
const parrafo = 'Este es un parrafo';
const parrafo1 = 'Este es un "parrafo"';
const parrafo2 = "Este es un 'parrafo'";

//Numeros
const numero = 4;
const numero1 = -4.123;

//Booleano
const usuarioconectado = 'true';
const usuarionoconectado = 'False';
const mayorQue = 1 > 2;
console.log(mayorQue);

//Arrays - Arreglos : para guardar txtos, numeros y objetos
//const arreglo = [1, 10, 20];
const arreglo = [10, 'texto', true, {propiedad:'valor'}, [1,10,20]];
console.log(arreglo);

//Objetos : es para saber los valores que se colocan
const persona = {
    nombre: 'Miguel',
    apellido: 'Arevalo',
    edad: 28,
    carro:{
        marca:'Ford',
        color: 'Plateado',
        placa: 213124,
    }
}
console.log(persona);
console.log(persona.apellido);

//Funtions - Funciones : podemos reutilizar codigo y hacer nuestra pagna mas dinamica y ejecutan codigo cuando tu decidas
function hola(){
    console.log('Hola');
}
hola()

//Operadores
    /* 📌 Operadores Aritmeticos
        =	Operador de asignación. Se usa para asignar valores a una variable
        +	Suma
        -	Resta
        *	Multiplicación
        /	Division
        %	Modulo
        ++	Aumento
        --	Disminución
    */
const resultado = 10+10;
const resta = 10-10;
const resultado2 = 10%3;

console.log(resultado);

let suma = 1;
suma = suma + 1; //el aumento de la variable se puede hacer asi o utilizar aritmeticos como en la parte baja
suma++;
suma--;


console.log(suma);

/*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable.
	-=	Resta un numero al valor de una variable.
	*=	Resta un numero al valor de una variable.
	/=	Resta un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/
let number = 10;
number += 5;
number -= 5;

console.log(number);

/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/
 const operador1 = 10>4;
 console.log(operador1);
 const operador2 = 10<4;
 console.log(operador2);
 const operador3 = 4>=4;
 console.log(operador3);
 const operador4 = 15==15;
 console.log(operador4);
 const operador5 = 10 === '10'; //uno es un numero y el otro es una cadena de texto
 console.log(operador5);
 const operador6 = 7>1 ? 'El primero es mayor que el uno' : 'El primero es menor que el uno';
console.log(operador6);

/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/
const name = 'Miguel';
const edad = 17;
const entrada = true;
const permiso = true;
/* Ejemplo #1
const accesopermitido = edad >= 18 && entrada;
console.log('Puedes entrar al concierto:' + accesopermitido);*/

//Ejemplo #2
const accesopermitido = (edad >= 18 && entrada) || (permiso && entrada);
console.log('Puedes entrar al concierto:' + accesopermitido);

//Ejemplo #3
const variable = true;
console.log(!variable);

//Arreglos - Array
let arreglos = ['Texto', 123.34, false, {Propiedad: 'Valor'}, 1,2,3];
console.log(arreglos);
const sobrinos = ['Daniela', 'Danielis', 'Danielle','Janin','Mhia','Lucas'];
console.log(sobrinos[1]);
const colores = [];
colores[0] = 'Azul';
colores[1] = 'Blanco';
colores[3] = 'Verde';
console.log(colores);
console.log('El arreglo tiene: '+ colores.length + ' colores');
colores.push = 'Azul'; //Push para agregar otro arreglo a la etiqueta.
console.log(colores);

//Objetos
const personas = ['Carlos' , 28, 'carlos@hotmail.com', 'Mexico'];
console.log(personas);

const people = {
    Nombres: 'Miguel Alejandro ',
    Apellido: 'Arevalo',
    Edad: 28,
    Pais: 'Venezuela',
    Nacionalidad: 'Venezolana',
    suscipciones: {
        Web: true,
        Movil:false,
    },
    ColoresFavoritos: ['Azul', 'verde', 'rojo'],
    Saludo: function(){
        alert ('Hola!');
    }
}
console.log(people.Nombres+people.Apellido);
console.log(people['Edad']);
console.log(people);
people.correo = 'MiguelAle@gmail.com'; //se utiliza para añadir una propiedad al objeto
console.log(people.correo);
people.Saludo(); //para llamar la funcion que se coloca

//Template Strings
const nnombre = 'Miguel Arevalo';
const Edadd = 27;
const email = 'migelare16@gmail.com';
const pais = 'Venezuela';

console.log('La persona es '+nnombre+' tiene ' +Edadd+' su email es '+email+' y es de '+pais);
console.log(`la perosna es ${nnombre} tiene ${Edadd} su email es ${email} y es de ${pais}`);

//Condicionales
// 📌 Estructura de una condicional
/* if (true) {
 Código a ejecutar
}*/

// 📌 Ejemplo #1 - combinando operadores
const liga = {
    jugador: 'Miguel Arevalo',
    numerojugador: 8,
    tieneficha: true,
    año: 1998,
};
if(liga.año > 1999){
    console.log ('puede jugar el partido');
}else{
    console.log('No puede jugar el partido');
}

// 📌 Ejemplo #2 - combinando operadores
if(liga.año < 1999 && liga.tieneficha === false){
    console.log('No puede jugar el partido');
}else{
    console.log ('puede jugar el partido');
}

// 📌 Ejemplo #3 - Anindando condicionales
if(liga.tieneficha){
    if(liga.numerojugador === 3){
        console.log('puede jugar en medio campo');
    }else{
        console.log('debe buscar otra posicion');
    }

}else{
    console.log('no puede jugar, debe hacerle la ficha antes de la fecha 3');
}

// 📌 Ejemplo #4 - elseif
if(liga.año > 1999 && liga.tieneficha){
    console.log('no puede jugar en categorias inferiores');
}else if (liga.año < 1998){
    console.log('puede jugar la categoria')    ;
}else if (liga.numerojugador === 1){
    console.log('puede jugar solo este partido de medio campo');
}else{
    console.log('no puede jugar el torneo');
}

//Switch

const equipo = {
    Jugadores: 25,
    Registro: 'true',
    Patentado: 'false',
    jugadoresficha: 22,
}

switch(equipo.Registro){
    case 'true':
        console.log('El equipo puede participar en el campeonato.');
        break;
    case 'false':
        console.log('El equipo no puede participar por falta de jugadores.');
        break;
    default:
        console.log('el equipo tiene muchos jugadores');
}

//Operador Ternario
const boleto = 'vip';
const acceso = boleto === 'vip' ? 'vip-123' : 'regular-1234';
boleto === 'vip' ? console.log('tu boleto es vip') : console.log('tu boleto es regular');

//Funciones
// 📌 Forma #1
    const formalidad = saludo;
    function saludo(){
        console.log('Hola!');
    }
    formalidad();

// 📌 Forma #2 - Asignando una función a una variable.
const presentar = function(){
    console.log('Hola desde funcion!');
}
presentar();

// 📌 Forma #3 - Función de tipo flecha.
const cordialidad = () => console.log('Hola de nuevo!');
cordialidad();

//Parametros y Argumentos de una Funcion
/*
 - Parametros: los valores especificados en la definición
 - Argumentos: los valores que le pasamos a la función cuando la invocamos.
*/
const welcome = (nombre = 'Miguel') => {
    console.log(`Hola ${nombre}`);
};
welcome('Carlos');
welcome('Stefhanny');
welcome('Migue');
welcome()

/*
	📌 Multiples parametros
*/
const operacion = (num1, num2) => {
    console.log(num1+num2);
};
operacion(2,2);

const operacion2 = (tipo, num1, num2) => {
    if(tipo === resta){
        console.log(num1-num2);
    } else if(tipo===suma){
        console.log(num1+num2);
    }
};
operacion(resta, 2,2);
operacion(suma, 5,5);

//Return
//?

//Variables Globales (Scoope)
/* 📌 Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

let apellido = 'Arevalo';
console.log(apellido);

const bienvenida = ()=> {
    console.log('Su apellido es: '+apellido);

    apellido = 'Rodriguez';
    console.log('Su nuevo apellido es: '+apellido); //este es cambio, puedo cambiar la variable luego de la funcion.
};
bienvenida();

//Variables Locales (Scoope)
/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var cantidad = 32;
var cantidadLetras = (nombre) => {
    var cantidad = nombre.length;
    console.log(`${nombre} tiene ${cantidad} letras`);

    var anidada = () => {
        console.log(cantidad);
    };
    anidada();
};
cantidadLetras('Miguel');

console.log(numero);

//Varables de Bloque (Scope)
/* 📌 Block Scope / Alcance de tipo bloque
	- Pertenecen las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/

const años = 19;
if(años => 18){
    const acceder = true;
    if(true){
        console.log(acceder);
    }
    const mifuncion = ()=> {
        console.log(acceder);
    }
    mifuncion();
}
const acceder = 'SI';
console.log(acceder);

//Metodos para Trbajar con Arreglos

const Colors = ['Azul', 'Amarillo', 'Verde'];
/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(Colors.length);
/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/
document.body.innerHTML = Colors.toString();

/*
	📌 .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/
console.log(Colors.join(' - '));

/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
const num = [5, 6, 8, 9];
const letter = ['A', 'C', 'B', 'J'];
console.log(num.sort());
console.log(letter.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/

console.log(num.reverse());
console.log(letter.reverse());

/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/
const arreglosort = num.concat(letter);
console.log(arreglosort);

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/
Colors.push('Rojo');
console.log(Colors);

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/
Colors.pop();
console.log(Colors);

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/
Colors.shift();
console.log(Colors);

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles'];
dias.unshift('Jueves');
console.log(dias);

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/
dias.splice(0, 3, 'Viernes', 'Sabado', 'Domingo');
console.log(dias);

/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ['Manzana', 'Parchita', 'Uva', 'Piña', 'Limon', 'Arandano'];
const frutasfavoritas = frutas.slice(2, 4);
console.log(frutasfavoritas);
/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
console.log(nombres.indexOf('Sergio'));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/
console.log(nombres.lastIndexOf('Rafael'));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/
nombres.forEach((nombre, index) => {
console.log(`Hola ${nombre} (${index})`);
});

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
const result = nombres.find((nombre) => {
 	if (nombre[0] === 'E') {
 		return nombre;
 	}
});
console.log(result);

/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const llamar = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
console.log(llamar.indexOf('Sergio'));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/
console.log(nombres.lastIndexOf('Rafael'));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/
nombres.forEach((nombre, index) => {
    console.log(`Hola ${nombre} (${index})`);
});

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
const resul = nombres.find((nombre) => {
 	if (nombre[0] === 'E') {
 		return nombre;
 	}
});
console.log(resul);

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/
const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/
const nombres4Letras = nombres.filter((nombre) => {
 	if (nombre.length === 5) {
 		return nombre;
 	}
});
console.log(nombres4Letras);

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/
console.log(nombres.includes('Julio'));
console.log(nombres.includes('Carlos'));

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
const nombresValidos = nombres.every((nombre) => {
 	if (typeof nombre === 'string') {
 		return true;
 	} else {
 		return false;
 	}
});
console.log('¿Todos los nombres son validos? ' + nombresValidos);

/* 
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/
const nombresVal = nombres.some((nombre) => {
	if (typeof nombre !== 'string') {
		return true;
	} else {
		return false;
	}
});
console.log('¿El arreglo es invalido? ' + nombresVal);
// true si hay algun valor invalido
// false si no hay algun valor invalido

//Metodos para objetos
const Equipo = {
    Director: 'Marcelo Lopez',
    Edad: 25,
    correo: 'equipo@gmail.com',
    Jugadores: ['Miguel', 'Ale','Jose', 'Ruben', 'Vladimir'],
    Titulares:() => {
        console.log('Bienvenido!');
    },
}

/*
	📌 Métodos propios
	Los objetos pueden tener métodos personalizados.
*/
    Equipo.Titulares();

/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
    const uno = Object.keys(Equipo);
    console.log(uno);

/*
	📌 Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/
    const dos = Object.values(Equipo);
    console.log(dos);

/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
    const tres = Object.entries(Equipo);
    console.log(tres);
    console.log(`El Equipo tiene ${tres.length} jugadores`);

//Metodos Para trabajar Cadenas de textos
/*
	📌 .length - Devuelve el número de caracteres de una cadena de texto.
*/
const campeonato = 'Puede jugar la liga';
console.log(campeonato.length);

/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/
console.log(campeonato.indexOf('P'));
console.log(campeonato.lastIndexOf('a'));

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/
const player = 'Hola soy el jugador numero 5';
console.log(player.slice(5));
const play = player.indexOf('e');
console.log(player.slice(play));
const playe = player.lastIndexOf('j');
console.log(player.slice(playe));
console.log(play, playe +1);
console.log(player);

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
console.log(player.replace(5, 10));

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
console.log(player.split(' '));

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
console.log(player.toUpperCase());
console.log(player.toLowerCase());

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const texto = '     Hola yo soy Carlos!    ';
console.log(texto);
console.log(texto.trim());
console.log(texto.trimStart());
console.log(texto.trimEnd());

//Metodos para trabajar con numeros
/*
	📌 .toString()
*/
const numerodejugadores = 25;
console.log(numerodejugadores, typeof numero);

const numerodetitulares = 11;
console.log(numerodetitulares.toString(), typeof texto);


/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/
const deudadelequipo = 10.498980;
console.log(deudadelequipo.toFixed(3));

/*
	📌 parseInt()
	Intenta transformar un valor a un entero.
*/
const jugadoresbanca = parseInt(prompt('Introduzca el numero de jugadores de la banca: '));
const jugadorestitulares = parseInt(prompt('Introduzca el numero de jugadores titulares: '));
console.log(jugadoresbanca+jugadorestitulares);


/*
	📌 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/
const jugadoressupervision = parseInt(prompt('Introduzca el numero de jugadores en supervision: '));
const jugadoresrecuperacion = parseInt(prompt('Introduzca el numero de jugadores en recuperacion: '));
console.log(jugadoresrecuperacion+jugadoressupervision);


/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/
const random = Math.random();
console.log(random);

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/
console.log(Math.floor(10.11));
console.log(Math.floor(10.99));

/*
	📌 Math.ceil()
	Redondea hacia arriba un numero.
*/
console.log(Math.ceil(12.11));
console.log(Math.ceil(12.99));

/*
	📌 Math.round()
	Redondea hacia el entero mas cercano
*/
console.log(Math.round(12.11));
console.log(Math.round(12.99));

/*
	📌 Ejemplo de numero al azar de 0 a 100
*/
const oper = Math.random();
console.log(Math.floor(oper * 101));

/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
const deportes = ['Futbol', 'Beisbol', 'Basquekt', 'Softball'];
const jugadorfavorito = ['Messi', 'Pirlo', 'Pedri', 'Modric'];
console.log(deportes, ...jugadorfavorito);

const trabajador = {
    nombre: 'Miguel Alejandro',
    Apellido: 'Arevalo',
    Edad: 28,
};
const adicionales = {
    ...trabajador,
    correo: 'miguel@gmail.com',
    documento: 'NIE',
};

console.log(adicionales);

/*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/
const comidas = (Frias, Calientes, Templadas, ...datosadicionales) => {
    console.log(Frias, Calientes, Templadas, datosadicionales);
};
comidas('Helado', 'Pabellon', 'Rizotto', 'Empanadas', 'Sushi');

/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

const amigo = ['Miguel', 'Alejandro', 'Manuel', 'Nhoa'];
const [primeramigo, segundoamigo, terceramigo, cuartoamigo] = amigo;
console.log(terceramigo);

const mostrardatos = ({nombre, Apellido, Edad}) => {
    console.log(`${nombre} ${Apellido} y tiene ${Edad} años`)
}
mostrardatos(trabajador);

//Ciclo For
for(let numerofor = 1; numerofor < 11; numerofor++){
    console.log(numerofor);
};

for(let numerofor = 0; numerofor < nombre.length; numerofor++){
    console.log(amigo[numerofor]);
};

//Break y Continue
