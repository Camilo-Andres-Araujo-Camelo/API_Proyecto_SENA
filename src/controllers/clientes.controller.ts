import { Cliente } from '../seeders/clientes';
import { ClientesServices } from '../services/clientes.services';

export const getClients = (req: any, res: any) => {
  try {
    const result: Cliente[] = ClientesServices.getClients();
    res.status(200).json({
      message: 'Clientes obtenidos correctamente',
      total: result.length,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const getClientById = (req: any, res: any) => {
  try {
    const { id } = req.params;
    const result = ClientesServices.getClientById(id);
    if (!result) {
      //! Respuesta 404 - Cliente no encontrado
      return res.status(404).json({
        message: `Error: Cliente con ID: ${id} no encontrado`,
      });
    }
    //* Respuesta 200 - Cliente encontrado
    res.status(200).json({
      message: `Cliente con ID: ${id} encontrado`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const createClient = (req: any, res: any) => {
  try {
    const {
      id,
      tipoDocumento,
      nombres,
      apellidos,
      fechaNacimiento,
      sexo,
      direccion,
      telefono,
      email,
      fechaRegistro,
    } = req.body;
    if (
      !id ||
      !tipoDocumento ||
      !nombres ||
      !apellidos ||
      !fechaNacimiento ||
      !sexo ||
      !direccion ||
      !telefono ||
      !email ||
      !fechaRegistro
    ) {
      //! Respuesta 400 - Campos faltantes
      return res.status(400).json({
        message: 'Todos los campos son obligatorios',
        camposRequeridos: [
          'id: string',
          'tipoDocumento: string',
          'nombres: string',
          'apellidos: string',
          'fechaNacimiento: string',
          'sexo: string',
          'direccion: string',
          'telefono: string',
          'email: string',
          'fechaRegistro: string',
        ],
      });
    }

    //! Respuesta 409 - Cliente ya existe
    const clientesSeed = ClientesServices.getClients();
    const newCliente: Cliente = req.body;
    const existingClient = clientesSeed.find((c) => c.id === newCliente.id);
    if (existingClient) {
      return res.status(409).json({
        message: `Error: Cliente con ID: ${newCliente.id} ya existe`,
        data: existingClient,
      });
    }

    //* Respuesta 201 - Cliente creado
    const result: Cliente = ClientesServices.createClient(newCliente);
    res.status(201).json({
      message: `Cliente creado correctamente`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const updateClientById = (req: any, res: any) => {
  try {
    const { id } = req.params;
    const updatedClient: Cliente = req.body;
    const result = ClientesServices.updateClientById(id, updatedClient);
    //! Respuesta 404 - Cliente no eliminado
    if (!result) {
      return res.status(404).json({
        message: `Error: Cliente con ID: ${id} no encontrado`,
      });
    }
    //* Respuesta 200 - Cliente actualizado
    res.status(200).json({
      message: `Cliente con ID: ${id} actualizado correctamente`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const deleteClientById = (req: any, res: any) => {
  try {
    const { id } = req.params;
    const result = ClientesServices.deleteClientById(id);
    //! Respuesta 404 - Cliente no encontrado
    if (!result) {
      return res.status(404).json({
        message: `Error: Cliente con ID: ${id} no encontrado`,
      });
    }

    //* Respuesta 200 - Cliente eliminado
    res.status(200).json({
      message: `Cliente con ID: ${id} eliminado correctamente`,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};
