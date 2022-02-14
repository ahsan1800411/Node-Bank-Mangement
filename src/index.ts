import { createConnection } from 'typeorm';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transaction';
import clientRoutes from './routes/clientRoutes';
import bankerRoutes from './routes/bankRoutes';
import transactionRoutes from './routes/transactionRoutes';
import bankerClientRoutes from './routes/bankerClientRoutes';
import express from 'express';

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1800411',
      database: 'type-orm',
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    app.use(express.json());
    app.use('/api', clientRoutes);
    app.use('/api', bankerRoutes);
    app.use('/api', transactionRoutes);
    app.use('/api', bankerClientRoutes);

    app.listen(8080, () => console.log('Server is up and running'));
    console.log('Connected to postgres');
  } catch (error) {
    console.error(error);
  }
};

main();
