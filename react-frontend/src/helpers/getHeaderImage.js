export const getHeaderImage = async ( headerImageName ) => {
    let idFinder = sessionStorage.getItem("finder");
    try {
        const response = await fetch(`http://localhost:8080/apiFinder/headerImage?idFinder=${idFinder}&headerImageName=${headerImageName}`);
        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            return url;
        } else {
            console.error("Failed to fetch image:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}