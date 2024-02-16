import { FastifyInstance } from 'fastify';
import WebPush from 'web-push';
import { z } from 'zod';

// console.log(WebPush.generateVAPIDKeys())

const publicKey = 'BPBqMck4yfstgmLJvVsbhhJ-EsMhCsxYWGREPdWkc911tl3g3QQ-0bIV_SyZ7PvjgeQ0wDigqiZoJwhDP3BkCk4';
const privateKey = 'aTeP8WmJ8Q4B_uxAWOO7i_ST9BKLzK9leM18JuQAjpQ';

WebPush.setVapidDetails('https://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {

    app.get('/push/public_key', () => {
        return {
            publicKey
        }
    })

    app.post('/push/register', (request, reply) => {
        console.log(request.body);
        return reply.status(201).send();
    })

    app.post('/push/send', async (request, reply) => {

        const sendPushBody = z.object({
            subscription: z.object({
                endpoint: z.string(),
                keys: z.object({
                    p256dh: z.string(),
                    auth: z.string(),
                })

            })
        });

        const { subscription } = sendPushBody.parse(request.body);

        setTimeout(() => {
            WebPush.sendNotification(subscription, 'Notificação do Back-End');
        }, 5000);

        console.log('Body', request.body);
        return reply.status(201).send();
    })

}