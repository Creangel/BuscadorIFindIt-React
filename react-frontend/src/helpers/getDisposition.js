export const getDisposition = async( finderId ) => {
    try {
        const response = await fetch(`http://localhost:8083/disposition?finderId=${finderId}`);
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