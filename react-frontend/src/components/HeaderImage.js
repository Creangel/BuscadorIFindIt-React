import { useFetchHeaderImage } from "../hooks/useFetchHeaderImage";

export const HeaderImage = ({ headerImageName }) => {

    const { headerImage, isLoading } = useFetchHeaderImage(headerImageName);

    return (
        <>
            {
                !isLoading && ( <img src={ headerImage } alt={ headerImageName } /> )
            }
        </>
    );
};
