import { Sequelize } from 'sequelize';
import Apartment from '../models/apartment';
import Image from '../models/image';

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
});

