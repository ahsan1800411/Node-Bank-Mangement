import { Banker } from './../entities/Banker';

export const createBanker = async (req: any, res: any) => {
  const { first_name, last_name, email, card_number, employee_number } =
    req.body;
  const banker = Banker.create({
    first_name,
    last_name,
    email,
    card_number,
    employee_number,
  });
  await banker.save();
  res.json(banker);
};
