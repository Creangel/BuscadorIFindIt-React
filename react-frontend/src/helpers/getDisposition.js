export const getDisposition = async( finderId ) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BUSCADOR_IFINDIT_API_URL}/disposition?finderId=${finderId}`);
        if (response.ok) {
            const resp = await response.json();
            return resp;
        } else {
            console.error("Failed to fetch disposition:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching disposition:", error);
    }
}