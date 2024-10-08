import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;


const FOODWALLAH_MENU_API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
    const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING';
    
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'MyApp/1.0',  // Adding User-Agent header
                'Accept': 'application/json',  // Ensure the request accepts JSON
                'X-Custom-Key': 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'  // Example header key
            }
        });

        if (response.status === 403) {
            throw new Error('Forbidden: Access to the API is restricted');
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);  // Log detailed error
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/menu/:restaurantId', async (req, res) => {
    const { restaurantId } = req.params;
    const url = `${FOODWALLAH_MENU_API_URL}${restaurantId}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'MyApp/1.0',  // Adding User-Agent header
                'Accept': 'application/json',  // Ensure the request accepts JSON
                // Add additional headers here if needed
            }
        });

        if (response.status === 403) {
            throw new Error('Forbidden: Access to the API is restricted');
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);  // Log detailed error
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
