import cors from '@fastify/cors';
import Fastify from 'fastify';

import { notificationRoutes } from './notifications-routes';
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors, {
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        'http://localhost:8081'
    ]
});
app.register(appRoutes);
app.register(notificationRoutes);

app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log('HTTP Server Running!')
});