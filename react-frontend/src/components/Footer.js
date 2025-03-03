import { getInnerFooterSections } from '../helpers/getInnerFooterSections';
import { FooterImage } from './FooterImage';
import { FooterItem } from './FooterItem';

export const Footer = ({ footer }) => {

    const innerSections = getInnerFooterSections( footer );
    
    return (
        <footer>
            {   
                Object.keys( innerSections ).map( section => {
                    if ( innerSections[section] ) {
                        return <div id={`footer-${section}`} key={ `footer-${section}`} >
                                    <FooterImage footerImgName={ `footerImg${section}` }  
                                                 footerImage={ footer[ `footerImg${section}` ] }
                                    />
                                    <ul key={`footer-${section}-items`}>
                                        {
                                            footer["footerItemConfigurations"]
                                                .filter((item) => item["section"] === section.toLowerCase())
                                                .map((item) => (
                                                    <FooterItem key={`item-${section}-${item.position}`}
                                                                item={item}
                                                                itemName={`item-${section}-${item.position}`}
                                                    />
                                                ))
                                        }
                                    </ul>                                     
                                </div>
                    }  
                })
            }
        </footer>
    );
};
