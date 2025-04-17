import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('/api/telegram_login', async ( _request ) => {
        return HttpResponse.json({ role: 'admin' });
    }),
];
