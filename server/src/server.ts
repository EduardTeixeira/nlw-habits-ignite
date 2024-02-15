import cors from '@fastify/cors';
import Fastify from 'fastify';

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

app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log('HTTP Server Running!')
});