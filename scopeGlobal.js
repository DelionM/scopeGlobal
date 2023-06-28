var nombre = 'Giovanni';
console.log(nombre);

const saludo = () => {
    console.log('Hola '+nombre);
    nombre = 'Brayan';
    console.log('el nuevo nombre es:' +nombre);
};
saludo();