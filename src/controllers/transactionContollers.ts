import { Transaction, TransactionTypes } from './../entities/Transaction';
import { Client } from './../entities/Client';

export const createTransaction = async (req: any, res: any) => {
  const { amount, type } = req.body;
  const { client_id } = req.params;

  const client = await Client.findOne(client_id);
  if (!client) {
    return res.json({
      msg: 'Client not found',
    });
  }

  const transaction = Transaction.create({
    amount,
    type,
    client,
  });
  await transaction.save();
  if (transaction.type === TransactionTypes.DEPOSIT) {
    client.balance = client.balance + amount;
  }
  if (transaction.type === TransactionTypes.WITHDRAW) {
    client.balance = client.balance - amount;
  }
  await client.save();

  return res.json({
    msg: 'Transaction Added',
  });
};
