import { Cliente, clientes } from '../seeders/clientes';

export class ClientesServices {
  static getClients() {
    const result: Cliente[] = clientes;
    return result;
  }

  static getClientById = (id: string) => {
    const cliente = clientes.find((c) => c.id === id);
    return cliente || null;
  };

  static createClient = (client: Cliente) => {
    const newClient: Cliente = {
      ...client,
    };
    clientes.push(newClient);
    return newClient;
  };

  static updateClientById = (id: string, updatedClient: Cliente) => {
    const index = clientes.findIndex((c) => c.id === id);
    if (index !== -1) {
      clientes[index] = { ...clientes[index], ...updatedClient };
      return clientes[index];
    }
    return null;
  };

  static deleteClientById = (id: string) => {
    const index = clientes.findIndex((c) => c.id === id);
    if (index !== -1) {
      clientes.splice(index, 1);
      return true;
    }
    return false;
  };
}
