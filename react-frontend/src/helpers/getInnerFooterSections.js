export const getInnerFooterSections = ( footer ) => {

    let hasLeftSection = false;
    let hasCenterSection = false;
    let hasRightSection = false;

    Object.keys( footer ).forEach( key => {
        // Perform actions based on the header key object name
        if ( ( key.includes("footerImg") && footer[key] !== null ) ||  
             ( key.includes("hasFooter") && footer[key] )) {
            switch (key) {
                case "footerImgLeft":
                case "hasFooterLeft":    
                    hasLeftSection = true;
                    break;
                case "footerImgCenter":
                case "hasFooterCenter":
                    hasCenterSection = true;
                    break;
                case "footerImgRight":
                case "hasFooterRight":
                    hasRightSection = true;
                    break;
                default:
                    break;
            }
        }
    });

    return {
        Left: hasLeftSection,
        Center: hasCenterSection,
        Right: hasRightSection
    };

}