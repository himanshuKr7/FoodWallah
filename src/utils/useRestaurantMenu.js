import { FOODWALLAH_MENU_API_URL } from "../utils/constants";
import { useEffect,useState } from "react";

const useRestaurantMenu = (resid) =>
{   
    const [Resinfo, setResinfo] = useState(null);

    useEffect(() => {
        fetchdata();  
    }, [])
    
    async function fetchdata()
    {
        const response = await fetch(FOODWALLAH_MENU_API_URL + resid);
        const json = await response.json();
        setResinfo(json.data);
    }
    return Resinfo;
}

export default useRestaurantMenu;