import express from 'express';
import chefsRoutes from './chefs.routes';
import dishsRoutes from './dishs.routes';
import reataurantsRoutes from './restaurants.routes';



    const router = express.Router();
    router.use('/api/chefs/', chefsRoutes);
    router.use('/api/restaurants/',reataurantsRoutes);
    router.use('/api/dishs/',dishsRoutes);
export default router;