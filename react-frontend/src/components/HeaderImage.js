import { useEffect, useState } from "react";
import { getHeaderImage } from "../helpers/getHeaderImage";

export const HeaderImage = ({ headerImageName }) => {

    const [headerImage, setHeaderImage] = useState(null);

    useEffect(() => {
        getHeaderImage(headerImageName)
            .then((url) => {
                setHeaderImage(url);
            });
    }, [headerImageName]);  

    return (
        <img src={ headerImage } alt={ headerImageName } />
    );
};
