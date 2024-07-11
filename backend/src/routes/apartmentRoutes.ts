import { Router } from 'express';
import {
    getApartments,
    getApartment,
    createApartment
} from '../controllers/apartmentController';
import upload from '../middleware/upload';


const router = Router();

router.get('/', getApartments);
router.get('/:id', getApartment);
router.post('/', upload.array('images', 10) , createApartment);

export default router;
