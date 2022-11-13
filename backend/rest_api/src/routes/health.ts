import { Router, Request, Response } from 'express';
import { logger } from '../utils/logger';

const HealthRouter: Router = Router();

HealthRouter.get('/', (req: Request, res: Response) => {
  logger.info('Success get health data');
  res.status(200).send({
    status: 'success',
    message: 'success get data health',
    data: 'empty'
  });
});

export default HealthRouter;
