import { createQueryBuilder } from 'typeorm';
import { Client } from './../entities/Client';

export const createClient = async (req: any, res: any) => {
  const { first_name, last_name, email, card_number, balance } = req.body;
  const client = Client.create({
    first_name,
    last_name,
    email,
    card_number,
    balance,
  });
  await client.save();
  res.json(client);
};

export const deleteClient = async (req: any, res: any) => {
  const { id } = req.params;
  await Client.delete(id);

  return res.json({
    msg: 'Client Deleted',
  });
};

export const getClient = async (req: any, res: any) => {
  const client = await createQueryBuilder('client')
    .select('client.first_name')
    .addSelect('client.balance')
    .from(Client, 'client')
    .leftJoinAndSelect('client.transactions', 'transactions')
    .where('client.balance >= :minBalance AND client.balance <=:maxBalance', {
      minBalance: 0,
      maxBalance: 10,
    })
    .getOne();
  return res.json(client);
};
