import { Client } from './../entities/Client';
import { Banker } from './../entities/Banker';

export const bankerClientController = async (req: any, res: any) => {
  const { bankerId, clientId } = req.params;

  const client = await Client.findOne(clientId);
  const banker = await Banker.findOne(bankerId);
  if (!client || !banker) {
    return res.json({
      msg: 'Banker or Client not found',
    });
  } else {
    banker.clients = [client];
    await banker.save();
  }
  return res.json({
    msg: 'Banker or Client Successfully formed a relationship',
  });
};
