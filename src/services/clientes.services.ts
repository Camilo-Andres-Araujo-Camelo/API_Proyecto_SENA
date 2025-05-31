import { ICliente } from '../models/cliente';
import { Cliente as ClienteDb } from '../models/cliente';

export class ClientesServices {
  static async getClients() {
    try {
      const result = await ClienteDb.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      return result.map((cliente) => cliente.toJSON());
    } catch (error) {
      throw error;
    }
  }

  static getClientById = async (id: string) => {
    try {
      const result = await ClienteDb.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      if (!result) {
        return null; // Cliente no encontrado
      }
      return result.toJSON();
    } catch (error) {
      throw error; // Propaga el error para manejarlo en el controlador
    }
  };

  static createClient = async (client: ICliente) => {
    const newClient: ICliente = {
      ...client,
    };
    try {
      const createdClient = await ClienteDb.create(newClient);
      return createdClient.toJSON();
    } catch (error) {
      throw error; // Propaga el error para manejarlo en el controlador
    }
  };

  static updateClientById = async (id: string, updatedClient: ICliente) => {
    try {
      const existingClient = await ClienteDb.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      if (!existingClient) {
        return null; // Cliente no encontrado
      }
      // Actualiza los campos del cliente existente
      Object.assign(existingClient, updatedClient);
      // Guarda los cambios en la base de datos
      const savedClient = await existingClient.save();
      return savedClient.toJSON(); // Retorna el cliente actualizado
    } catch (error) {
      throw error; // Propaga el error para manejarlo en el controlador
    }
  };

  static deleteClientById = async (id: string) => {
    return ClienteDb.destroy({
      where: { id },
    })
      .then((result) => {
        if (result === 0) {
          return null; // Cliente no encontrado
        }
        return { message: `Cliente con ID: ${id} eliminado correctamente` };
      })
      .catch((error) => {
        throw error; // Propaga el error para manejarlo en el controlador
      });
  };
}
