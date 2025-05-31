import { db } from '../utils/database';
import { Ciudad } from '../models/ciudad';
import { Cliente } from '../models/cliente';
import { Departamento } from '../models/departamento';
import { EmpleadoRole } from '../models/empleado_role';
import { Empleado } from '../models/empleado';
import { Factura } from '../models/factura';
import { Role } from '../models/role';
import { Ruta } from '../models/ruta';
import { Tiquete } from '../models/tiquete';
import { VehiculoConductor } from '../models/vehiculo_conductor';
import { VehiculoRuta } from '../models/vehiculo_ruta';
import { Vehiculo } from '../models/vehiculo';
import { Viaje } from '../models/viaje';
const bcrypt = require('bcrypt');

const ciudades = [
  {
    id: 1,
    nombre: 'Bogotá',
    idDepartamento: 1,
  },
  {
    id: 2,
    nombre: 'Medellín',
    idDepartamento: 2,
  },
  {
    id: 3,
    nombre: 'Cali',
    idDepartamento: 3,
  },
  {
    id: 4,
    nombre: 'Bucaramanga',
    idDepartamento: 4,
  },
  {
    id: 5,
    nombre: 'Cartagena',
    idDepartamento: 5,
  },
];

const clientes = [
  {
    id: '1061759863',
    tipoDocumento: 'CC',
    sexo: 'M',
    nombres: 'Juan',
    apellidos: 'Pérez',
    telefono: '316749852',
    email: 'juan@gmail.com',
    direccion: 'Av. Fundación #23-13',
    fechaNacimiento: '1995-04-20',
    fechaRegistro: '2025-05-06 00:10:47',
  },
  {
    id: '1068798741',
    tipoDocumento: 'CC',
    sexo: 'M',
    nombres: 'Martín',
    apellidos: 'Gómez',
    telefono: '314798745',
    email: 'martin@gmail.com',
    direccion: 'Cra 14 #15-41',
    fechaNacimiento: '2000-05-20',
    fechaRegistro: '2025-05-06 00:10:47',
  },
  {
    id: '1065874985',
    tipoDocumento: 'CC',
    sexo: 'M',
    nombres: 'Ricardo',
    apellidos: 'Diaz',
    telefono: '311759842',
    email: 'ricardo@gmail.com',
    direccion: 'Cll 12 #3-56',
    fechaNacimiento: '1991-03-19',
    fechaRegistro: '2025-05-06 00:10:47',
  },
];

const departamentos = [
  {
    idDepartamento: 1,
    nombre: 'Cundinamarca',
  },
  {
    idDepartamento: 2,
    nombre: 'Antioquia',
  },
  {
    idDepartamento: 3,
    nombre: 'Valle del Cauca',
  },
  {
    idDepartamento: 4,
    nombre: 'Santander',
  },
  {
    idDepartamento: 5,
    nombre: 'Bolívar',
  },
];

const empleados = [
  {
    id: '112233445',
    tipoDocumento: 'CC',
    password: bcrypt.hashSync('12345', 10),
    nombres: 'Carlos',
    apellidos: 'Ramírez',
    fechaNacimiento: '1992-02-25',
    sexo: 'M',
    direccion: 'Avenida 30 #5-67',
    telefono: '3001122334',
    email: 'carlos@example.com',
  },
  {
    id: '556677889',
    tipoDocumento: 'CC',
    password: bcrypt.hashSync('12345', 10),
    nombres: 'Ana',
    apellidos: 'López',
    fechaNacimiento: '1995-12-10',
    sexo: 'F',
    direccion: 'Calle 80 #90-100',
    telefono: '3155566778',
    email: 'ana@example.com',
  },
  {
    id: '123456789',
    tipoDocumento: 'CC',
    password: bcrypt.hashSync('12345', 10),
    nombres: 'Juan',
    apellidos: 'Pérez',
    fechaNacimiento: '1990-05-12',
    sexo: 'M',
    direccion: 'Calle 1 #2-3',
    telefono: '3111234567',
    email: 'juan@example.com',
  },
  {
    id: '667788990',
    tipoDocumento: 'CC',
    password: bcrypt.hashSync('12345', 10),
    nombres: 'Pedro',
    apellidos: 'Martínez',
    fechaNacimiento: '1988-06-05',
    sexo: 'M',
    direccion: 'Carrera 7 #8-9',
    telefono: '3016677889',
    email: 'pedro@example.com',
  },
  {
    id: '987654321',
    tipoDocumento: 'CC',
    password: bcrypt.hashSync('12345', 10),
    nombres: 'María',
    apellidos: 'Gómez',
    fechaNacimiento: '1985-08-20',
    sexo: 'F',
    direccion: 'Carrera 45 #10-20',
    telefono: '3209876543',
    email: 'maria@example.com',
  },
];

const EmpleadosRoles = [
  {
    idEmpleado: '112233445',
    idRole: 1,
  },
  {
    idEmpleado: '556677889',
    idRole: 2,
  },
  {
    idEmpleado: '123456789',
    idRole: 3,
  },
  {
    idEmpleado: '667788990',
    idRole: 3,
  },
  {
    idEmpleado: '987654321',
    idRole: 3,
  },
];

const facturas = [
  {
    idCliente: '1061759863',
    total: 100000,
    fechaEmision: '2025-05-06 08:00:47',
    pagado: true,
  },
  {
    idCliente: '1068798741',
    total: 100000,
    fechaEmision: '2025-05-06 09:11:47',
    pagado: true,
  },
  {
    idCliente: '1065874985',
    total: 100000,
    fechaEmision: '2025-05-06 10:12:47',
    pagado: true,
  },
];

const roles = [
  {
    id: 1,
    nombre: 'Administrador',
  },
  {
    id: 2,
    nombre: 'Secretario',
  },
  {
    id: 3,
    nombre: 'Conductor',
  },
];

const rutas = [
  {
    id: 1,
    origen: 1, // Bogotá
    destino: 2, // Medellín
  },
  {
    id: 2,
    origen: 2, // Medellín
    destino: 3, // Cali
  },
  {
    id: 3,
    origen: 3, // Cali
    destino: 4, // Bucaramanga
  },
  {
    id: 4,
    origen: 4, // Bucaramanga
    destino: 5, // Cartagena
  },
  {
    id: 5,
    origen: 5, // Cartagena
    destino: 1, // Bogotá
  },
];

const tiquetes = [
  {
    noSilla: 1,
    precio: 100000,
    idViaje: 1,
    idCliente: '1061759863',
    idFactura: 1,
  },
  {
    noSilla: 2,
    precio: 100000,
    idViaje: 1,
    idCliente: '1068798741',
    idFactura: 1,
  },
  {
    noSilla: 3,
    precio: 100000,
    idViaje: 1,
    idCliente: '1065874985',
    idFactura: 1,
  },
];

const vehiculos = [
  {
    placa: 'ABC123',
    marca: 'Chevrolet',
    modelo: '2020',
    tipo: 'Bus',
    linea: 'NPR',
    color: 'Blanco',
    capacidad: 30,
    idConductor: '667788990',
  },
  {
    placa: 'DEF456',
    marca: 'Toyota',
    modelo: '2021',
    tipo: 'Camioneta',
    linea: 'Hilux',
    color: 'Blanco',
    capacidad: 5,
    idConductor: '987654321',
  },
  {
    placa: 'GHI789',
    marca: 'Hyundai',
    modelo: '2022',
    tipo: 'Miniban',
    linea: 'H1',
    color: 'Blanco',
    capacidad: 12,
    idConductor: '123456789',
  },
];

const vehiculoConductores = [
  {
    placaVehiculo: 'ABC123',
    idEmpleado: '667788990',
    fechaAsignacion: '2025-03-19',
  },
  {
    placaVehiculo: 'DEF456',
    idEmpleado: '987654321',
    fechaAsignacion: '2025-03-19',
  },
  {
    placaVehiculo: 'GHI789',
    idEmpleado: '123456789',
    fechaAsignacion: '2025-03-19',
  },
];

const vehiculosRutas = [
  {
    placaVehiculo: 'ABC123',
    idRuta: 1,
  },
  {
    placaVehiculo: 'DEF456',
    idRuta: 2,
  },
  {
    placaVehiculo: 'GHI789',
    idRuta: 3,
  },
];

const viajes = [
  {
    idViaje: 1,
    idRuta: 1,
    fechaProgramada: '2025-05-06',
    horaSalida: '08:30:00',
    horaLlegada: '12:30:00',
    latitud: 4.60971,
    longitud: -74.08175,
    placaVehiculo: 'ABC123',
    estado: 'Programado',
  },
];

// db.sync( {alter:true} ) // Sincronizar y fuerza la alteración de las tablas
const seedDatabase = async () => {
  try {
    // Sincronizar las tablas con borrado previo (force: true)
    await db.sync({ force: true });
    console.log('Iniciando la siembra de información');

    // Insertar los primeros datos (sin dependencias o claves foráneas)
    await Empleado.bulkCreate(empleados);
    await Role.bulkCreate(roles);
    await Departamento.bulkCreate(departamentos);
    await Cliente.bulkCreate(clientes);

    // Segundo bloque: entidades que dependen de los anteriores
    await Ciudad.bulkCreate(ciudades);
    await EmpleadoRole.bulkCreate(EmpleadosRoles);
    await Vehiculo.bulkCreate(vehiculos);
    await Factura.bulkCreate(facturas);

    // Tercer bloque
    await Ruta.bulkCreate(rutas);
    await VehiculoConductor.bulkCreate(vehiculoConductores);

    // Cuarto bloque
    await VehiculoRuta.bulkCreate(vehiculosRutas);
    await Viaje.bulkCreate(viajes);

    // Último paso
    await Tiquete.bulkCreate(tiquetes);

    console.log('Siembra de información finalizada');
  } catch (err) {
    console.error('Error durante la siembra:', err);
  }
};

// Ejecutar la siembra
seedDatabase();
