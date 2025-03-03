import { HeaderImage } from "./HeaderImage";

export const Header = ({ header }) => {
    return (
        <header>
            {   
                Object.keys( header ).map( key => {
                    // Perform actions based on the header key object name
                    if (key === "headerTitle" ) {

                        return <title key={ key }>{ header[key] }</title>;

                    } else if ( key.includes( "headerImg" ) && header[key] !== null ) {
                        return < HeaderImage key={ key } 
                                             headerName={ key }  
                                             headerImage={ header[key] } 
                                />;      
                    }
                })
            }
        </header>
    );
};
