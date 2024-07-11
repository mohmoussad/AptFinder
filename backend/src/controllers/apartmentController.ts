import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import Apartment from '../models/apartment';
import Image from '../models/image';

export const validateApartment = [
  check('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters long'),
  check('description')
    .notEmpty()
    .withMessage('Description is required'),
  check('price')
    .notEmpty()
    .withMessage('Price is required')
    .isFloat({ gt: 0 })
    .withMessage('Price must be a positive number'),
  check('images')
    .custom((value, { req }) => {
      if (!req.files || req.files.length === 0) {
        throw new Error('At least one image is required');
      }
      return true;
    }),
];

export const createApartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("wwwwwwwwww")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, price } = req.body;
    const images = (req.files as Express.Multer.File[])?.map((file) => file.path) || [];
    const apartment = await Apartment.create({ title, description, price });

    if (images.length > 0) {
      const imageRecords = images.map((url: string) => ({ url, apartmentId: apartment.id }));
      await Image.bulkCreate(imageRecords);
    }

    res.status(201).json(apartment);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getApartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const apartments = await Apartment.findAll({ include: [{ model: Image, as: 'images' }] });
    res.json(apartments);
  } catch (error) {
    next(error);
  }
}

export const getApartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("wwwwwwwwww")

    const apartment = await Apartment.findByPk(req.params.id, { include: [{ model: Image, as: 'images' }] });
    if (!apartment) {
      res.status(404).json({ message: 'Apartment not found' });
    } else {
      res.json(apartment);
    }
  } catch (error) {
    next(error);
  }
}



