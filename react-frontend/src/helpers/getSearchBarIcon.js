export const getSearchBarIcon = async ( searchBarId ) => {
    try {
        const response = await fetch(`http://localhost:8080/apiFinder/searchBarIcon?searchBarId=${searchBarId}`);
        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            return url;
        } else {
            console.error("Failed to fetch search bar icon: ", response.statusText);
        }
    } catch (error) {
        console.error("Failed to fetch search bar icon: ", error);
    }
    return null;
}