'use server'
const {localhost} = process.env


export const getAddressService = async (q: string) => {
    try {
        const res = await fetch(`${localhost}/api/address/${q}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to fetch data');
        }

        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;  // Rethrow the error so it can be caught by the caller
    }
};