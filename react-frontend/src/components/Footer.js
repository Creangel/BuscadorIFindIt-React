import { getInnerFooterSections } from '../helpers/getInnerFooterSections';
import { FooterImage } from './FooterImage';
import { FooterItem } from './FooterItem';
import Grid from '@mui/material/Grid';

export const Footer = ({ footer }) => {

    const innerSections = getInnerFooterSections( footer );
    const stylesConfiguration = footer.stylesConfiguration || {};
    
    return (
        <footer style={{
            color: stylesConfiguration.color,
            fontSize: stylesConfiguration.fontSize,
            fontFamily: stylesConfiguration.fontFamily,
            fontWeight: stylesConfiguration.fontWeight,
            fontStyle: stylesConfiguration.fontStyle,
            backgroundColor: stylesConfiguration.backgroundColor,
            padding: '20px',
        }}>
        <Grid container spacing={5}   
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                 height: '100%', // Ensure the grid takes the full height of the header
              }}>
            {   
                Object.keys( innerSections ).map( section => {
                    if ( innerSections[section] ) {
                        return <Grid item key={`grid-${section}`} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div id={`footer-${section}`} key={ `footer-${section}`} >
                                        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px'}}>
                                            <FooterImage footerImgName={ `footerImg${section}` }  
                                                        footerImage={ footer[ `footerImg${section}` ] }
                                            />
                                        </Grid>    
                                        <ul key={`footer-${section}-items`}>
                                            {
                                                footer["footerItemConfigurations"]
                                                    .filter((item) => item["section"] === section.toLowerCase())
                                                    .map((item) => (
                                                        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                                                            <FooterItem key={`item-${section}-${item.position}`}
                                                                        item={item}
                                                                        itemName={`item-${section}-${item.position}`}
                                                            />
                                                        </Grid>
                                                    ))
                                            }
                                        </ul>                                     
                                    </div>
                               </Grid>

                    }  
                })
            }
            </Grid>
        </footer>
    );
};
