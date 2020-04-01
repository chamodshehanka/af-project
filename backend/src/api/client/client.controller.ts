import { Request, Response } from "express";

export default class ClientController {

  /**
   * Add Clients
   * @param name name of the client
   * @param email client email address
   * @param contactNo client contactNo
   * @returns success or failure message
   */
  public addClient = async (req: Request, res: Response): Promise<any> => {
    console.log(req.body);
  };

  public getClients = async (req: Request, res: Response): Promise<any> => {
    // console.log()
  }
  
}
