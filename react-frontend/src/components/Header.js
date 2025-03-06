import { HeaderImage } from "./HeaderImage";
import Grid from '@mui/material/Grid';

export const Header = ({ header }) => {
    
    const stylesConfiguration = header.stylesConfiguration || {};

    return (
        <header style={{
            color: stylesConfiguration.color,
            fontSize: stylesConfiguration.fontSize,
            fontFamily: stylesConfiguration.fontFamily,
            fontWeight: stylesConfiguration.fontWeight,
            fontStyle: stylesConfiguration.fontStyle,
            backgroundColor: stylesConfiguration.backgroundColor,
        }}>
            <Grid container spacing={5}   
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                height: '100%', // Ensure the grid takes the full height of the header
                width: '100%', // Ensure the grid takes the full width of the header
                }}>
                    {   
                        Object.keys(header).map(key => {
                            // Perform actions based on the header key object name
                            if (key === "headerTitle") {
                                return <title key={key}>{header[key]}</title>;
                            } else if (key.includes("headerImg") && header[key] !== null) {
                                return (
                                    <Grid item key={key} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                                        <HeaderImage 
                                            headerName={key}  
                                            headerImage={header[key]} 
                                        />
                                    </Grid>
                                );      
                            }
                            return null;
                        })
                    }
            </Grid>
        </header>
    );
};