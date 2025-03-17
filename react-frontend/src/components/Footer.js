import { getInnerFooterSections } from '../helpers/getInnerFooterSections';
import { FooterImage } from './FooterImage';
import { FooterItem } from './FooterItem';
import Grid from '@mui/material/Grid2';

export const Footer = ({ footer }) => {

    const innerSections = getInnerFooterSections( footer );
    const stylesConfiguration = footer.stylesConfiguration || {};
    
    return (
        <footer style={ stylesConfiguration }>
        <Grid container spacing={5}   
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                 height: '100%',
                 marginTop: '10px' // Ensure the grid takes the full height of the header
              }}>
            {   
                Object.keys( innerSections ).map( section => {
                    if ( innerSections[section] ) {
                        return <Grid key={`grid-${section}`} 
                                     sx={{ display: 'flex', 
                                           justifyContent: 'center', 
                                           alignItems: 'center', 
                                           padding: '20px' 
                                        }}
                                >
                                    <div id={`footer-${section}`} 
                                         key={ `footer-${section}`} 
                                         style={ (section === "Center" || section === "Right")  ? 
                                                    { 
                                                      borderLeftColor: stylesConfiguration.color , 
                                                      borderLeft: '2px solid black', 
                                                      paddingLeft: '10px' 
                                                    } 
                                                : 
                                                {}
                                                } 
                                    >
                                        <Grid sx={{ display: 'flex', 
                                                    justifyContent: 'center', 
                                                    alignItems: 'center'
                                                 }}
                                        >
                                            <FooterImage footerImgName={ `footerImg${section}` }  
                                                        footerImage={ footer[ `footerImg${section}` ] }
                                            />
                                        </Grid>    
                                        <ul key={`footer-${section}-items`} 
                                            style={{ listStyleType: "none", 
                                                     justifyItems: "left" 
                                                    }}
                                        >
                                            {
                                                footer["footerItemConfigurations"]
                                                    .filter((item) => item["section"] === section.toLowerCase())
                                                    .map((item) => (
                                                        <Grid id={`grid-${section}-${item.position}`} 
                                                              key={`grid-${section}-${item.position}`} 
                                                              sx={{ display: 'flex', 
                                                                    alignItems: 'center', 
                                                                    padding: '10px'
                                                                  }}
                                                        >
                                                            <FooterItem key={`item-${section}-${item.position}`}
                                                                        item={item}
                                                                        itemName={`item-${section}-${item.position}`}
                                                                        position={item.position}
                                                            />
                                                        </Grid>
                                                    ))
                                            }
                                        </ul>                                     
                                    </div>
                               </Grid>
                    }
                    return null;  
                })
            }
            </Grid>
        </footer>
    );
};
