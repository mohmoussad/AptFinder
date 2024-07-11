import express, { Request, Response, NextFunction } from 'express';
import apartmentRoutes from './routes/apartmentRoutes';
import cors from 'cors';
import { errorMiddleware } from './middleware/errorMiddleware';
import { loggingMiddleware } from './middleware/loggingMiddleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggingMiddleware);

app.use('/api/apartments', apartmentRoutes);
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Up and Running!" });
})

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
