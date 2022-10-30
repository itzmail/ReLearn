import { Router, Request, Response } from 'express';
import { logger } from '../utils/logger';

const ProductRouter: Router = Router();

ProductRouter.get('/', (req: Request, res: Response) => {
  logger.info('Success get product data');
  res.status(200).send({
    status: 'success',
    message: 'success get data product',
    data: 'empty'
});
});

ProductRouter.post('/', (req: Request, res: Response) => {
    logger.info('Success add new product');
    res.status(200).send({
        status: 'success',
        message: 'success add new product',
        data: req.body
    })
})

export default ProductRouter;
