// src/lib/fatsecret.ts
let cachedToken: string | null = null;
let tokenExpiration: number = 0;

export async function getAccessToken() {
    const now = Date.now();
    if (cachedToken && now < tokenExpiration) {
        return cachedToken;
    }

    const clientId = process.env.FATSECRET_CLIENT_ID;
    const clientSecret = process.env.FATSECRET_CLIENT_SECRET;

    // Codificar credenciales en Base64 para Basic Auth
    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
        const response = await fetch('https://oauth.fatsecret.com/connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authString}`, // Autenticación Basic requerida
            },
            // El body debe tener el grant_type y el scope
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                scope: 'basic', // 'basic' suele ser suficiente, agrega 'premier' si tienes ese plan
            }),
            cache: 'no-store', // Importante para no cachear la respuesta de autenticación erróneamente
        });

        if (!response.ok) {
            throw new Error(`Error obteniendo token: ${response.statusText}`);
        }

        const data = await response.json();

        // Guardamos el token y calculamos cuándo expira (restando 60s por seguridad)
        cachedToken = data.access_token;
        tokenExpiration = now + (data.expires_in * 1000) - 60000;

        return cachedToken;
    } catch (error) {
        console.error('Error en autenticación FatSecret:', error);
        throw error;
    }
}