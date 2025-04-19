import { http, HttpResponse } from 'msw';


export const handlers = [
    http.post('/api/telegram_login', async ( _req ) => {
        return HttpResponse.json({ role: 'admin' });
    }),

    http.get('/api/me', async ( _request ) => {
        return HttpResponse.json({
            fullName: 'Иванов Иван Иванович',
            phone: '+7 999 123-45-67',
            tariff: 'Гигабезлимит',
            balance: 120,
            nextBillingDate: '25 апреля',
        });
    }),

    http.get("/api/connection_tests", async () => {
        return HttpResponse.json([
            {
                ping: 42,
                download: 35.6,
                upload: 8.2,
                address: 'Москва, ул. Тверская, 10',
                date: '10 апр, 14:23',
            },
            {
                ping: 88,
                download: 6.2,
                upload: 1.5,
                address: 'Санкт-Петербург, Невский проспект, 55',
                date: '08 апр, 19:10',
            },
        ]);
    }),
];
