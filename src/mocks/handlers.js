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
];
