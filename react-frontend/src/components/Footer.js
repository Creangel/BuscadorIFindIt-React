import { getInnerFooterSections } from '../helpers/getInnerFooterSections';
import { FooterImage } from './FooterImage';
import { FooterItem } from './FooterItem';
import Grid from '@mui/material/Grid2';

export const Footer = ({ footer }) => {

    const innerSections = getInnerFooterSections( footer );
    const stylesConfiguration = footer.stylesConfiguration || {};
    
    return (
        <footer style={ stylesConfiguration }>
        <Grid container className="footer_grid" spacing={5} direction="row" >
            {   
                Object.keys( innerSections ).map( section => {
                    if ( innerSections[section] ) {
                        return <Grid className="footer_section_grid" key={`grid-${section}`} >
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
                                        <Grid className="footer_image_grid" >
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
                                                        <Grid className="footer_item_grid" 
                                                              id={`grid-${section}-${item.position}`} 
                                                              key={`grid-${section}-${item.position}`}
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
