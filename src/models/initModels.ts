import { Ciudad } from './ciudad';
import { Cliente } from './cliente';
import { Departamento } from './departamento';
import { EmpleadoRole } from './empleado_role';
import { Empleado } from './empleado';
import { Factura } from './factura';
import { Role } from './role';
import { Ruta } from './ruta';
import { Tiquete } from './tiquete';
import { VehiculoConductor } from './vehiculo_conductor';
import { VehiculoRuta } from './vehiculo_ruta';
import { Vehiculo } from './vehiculo';
import { Viaje } from './viaje';

export const initModels = () => {
  //* Departamento --> Ciudad
  Departamento.hasMany(Ciudad, {
    foreignKey: 'id_departamento',
    as: 'ciudades',
  });
  Ciudad.belongsTo(Departamento, {
    foreignKey: 'id_departamento',
    as: 'departamento',
  });

  //* Ciudad --> Ruta
  Ciudad.hasMany(Ruta, {
    foreignKey: 'origen',
    as: 'rutasOrigen',
  });
  Ciudad.hasMany(Ruta, {
    foreignKey: 'destino',
    as: 'rutasDestino',
  });
  Ruta.belongsTo(Ciudad, {
    foreignKey: 'origen',
    as: 'ciudadOrigen',
  });
  Ruta.belongsTo(Ciudad, {
    foreignKey: 'destino',
    as: 'ciudadDestino',
  });

  //* Empleados <-- EmpleadosRoles --> Roles
  Empleado.belongsToMany(Role, {
    through: EmpleadoRole,
    foreignKey: 'id_empleado',
    otherKey: 'id_rol',
    as: 'roles',
  });
  Role.belongsToMany(Empleado, {
    through: EmpleadoRole,
    foreignKey: 'id_rol',
    otherKey: 'id_empleado',
    as: 'empleados',
  });

  //* Empleado(Conductor) <-- VehiculoConductor --> Vehiculo
  Empleado.belongsToMany(Vehiculo, {
    through: VehiculoConductor,
    foreignKey: 'id_empleado',
    otherKey: 'placa_vehiculo',
    as: 'vehiculos',
  });
  Vehiculo.belongsToMany(Empleado, {
    through: VehiculoConductor,
    foreignKey: 'placa_vehiculo',
    otherKey: 'id_empleado',
    as: 'conductores',
  });

  //* Vehiculo <-- VehiculoRuta --> Ruta
  Vehiculo.belongsToMany(Ruta, {
    through: VehiculoRuta,
    foreignKey: 'placa_vehiculo',
    otherKey: 'id_ruta',
    as: 'rutas',
  });
  Ruta.belongsToMany(Vehiculo, {
    through: VehiculoRuta,
    foreignKey: 'id_ruta',
    otherKey: 'placa_vehiculo',
    as: 'vehiculos',
  });

  //* Cliente --> Tiquete
  Cliente.hasMany(Tiquete, {
    foreignKey: 'id_cliente',
    as: 'tiquetes',
  });
  Tiquete.belongsTo(Cliente, {
    foreignKey: 'id_cliente',
    as: 'cliente',
  });

  //* Factura --> Tiquete
  Factura.hasMany(Tiquete, {
    foreignKey: 'id_factura',
    as: 'tiquetes',
  });
  Tiquete.belongsTo(Factura, {
    foreignKey: 'id_factura',
    as: 'factura',
  });

  //* Vehiculo --> Viaje
  Vehiculo.hasMany(Viaje, {
    foreignKey: 'placa_vehiculo',
    as: 'viajes',
  });
  Viaje.belongsTo(Vehiculo, {
    foreignKey: 'placa_vehiculo',
    as: 'vehiculo',
  });

  //* Viaje --> Tiquete
  Viaje.hasMany(Tiquete, {
    foreignKey: 'id_viaje',
    as: 'tiquetes',
  });
  Tiquete.belongsTo(Viaje, {
    foreignKey: 'id_viaje',
    as: 'viaje',
  });
};
