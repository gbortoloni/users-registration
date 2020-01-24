import { Request, Response } from 'express';

import Users from '@models/Users';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await Users.find();

      return res.json(users);
    } catch (ex) {
      return res.status(404).json({ mensagem: `Error: ${ex.message}` });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params;
      const user = await Users.findOne({ _id });

      if (!user) return res.status(404).json({ mensagem: 'User not found' });

      return res.json(user);
    } catch (ex) {
      return res.status(404).json({ mensagem: `Error: ${ex.message}` });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const user = await Users.create(req.body);

      return res.json(user);
    } catch (ex) {
      return res.status(404).json({ mensagem: `Error: ${ex.message}` });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params;

      const user = await Users.findOne({ _id });

      if (!user) return res.status(404).json({ mensagem: 'User not found' });

      await Users.updateOne({ _id }, req.body);
      return res.json({ mensagem: 'User updated!' });
    } catch (ex) {
      return res.status(404).json({ mensagem: `Error: ${ex.message}` });
    }
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params;

      const user = await Users.findOne({ _id });

      if (!user) return res.status(404).json({ mensagem: 'User not found' });

      await Users.deleteOne({ _id });
      return res.json({ mensagem: 'User deleted!' });
    } catch (ex) {
      return res.status(404).json({ mensagem: `Error: ${ex.message}` });
    }
  }
}

export default new UserController();
