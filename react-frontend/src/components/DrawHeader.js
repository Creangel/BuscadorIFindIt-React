import { HeaderImage } from "./HeaderImage";

export const DrawHeader = ({ header }) => {
    console.log("header: ", header);
    return (
        <header>
            {   
                Object.keys(header).map(key => {
                    // Perform actions based on the header key object name
                    if (key === "headerTitle") {
                        return <title key={ key }>{ header[key] }</title>;
                    } else {
                        return < HeaderImage key={ key }  headerImageName={ key } />;      
                    }
                })
            }
        </header>
    );
};
