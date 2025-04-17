import { useState } from 'react';

export default function useSpeedTest() {
    const [status, setStatus] = useState('idle');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const runTest = async () => {
        try {
            setStatus('loading');
            setError(null);

            const testFileUrl = 'https://ipv4.download.thinkbroadband.com/5MB.zip';

            // Ping
            const pingStart = performance.now();
            await fetch(testFileUrl, { method: 'GET', mode: 'no-cors'   });
            const pingEnd = performance.now();
            const ping = Math.round(pingEnd - pingStart);

            // Download
            const downloadStart = performance.now();
            const response = await fetch(testFileUrl);
            const blob = await response.blob();
            const downloadEnd = performance.now();

            const duration = (downloadEnd - downloadStart) / 1000; // sec
            const bitsLoaded = blob.size * 8;
            const downloadMbps = parseFloat((bitsLoaded / duration / (1024 * 1024)).toFixed(2));

            const result = {
                ping,
                download: downloadMbps,
                upload: undefined // можно реализовать позже
            };

            setResult(result);
            setStatus('done');
        } catch (err) {
            setError('Ошибка при измерении скорости');
            setStatus('error');
        }
    };

    return { runTest, status, result, error };
}