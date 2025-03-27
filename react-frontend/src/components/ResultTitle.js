import Typography from '@mui/material/Typography';

export const ResultTitle = ({ id, href, title, query, index, stylesConfiguration }) => {

    const validateHref = (href) => {
        if (href === undefined || href === null || href === '' || 
           ( Array.isArray(href) && href.length === 0 && href[0].trim() === '' ) ) {
          return "javascript:void(0)";
        }
        return href;
    };

    const onSendSignals = (type, url, query, pos) => {
        const seId = sessionStorage.getItem('finderId');
        if (window.sendSignals) {
            window.sendSignals(process.env.REACT_APP_BUSCADOR_IFINDIT_API_URL, type, url, query, pos, seId);
        } else {
            console.error("sendSignals is not defined. Make sure the script is loaded correctly.");
        }
    };

    const handleClick = (event) => {
        onSendSignals('click', href, query, index + 1);
    };

    return (
        <>
            <div id={`breadCrumb_${index}`} >
            </div>
            <Typography component="a"
                        className='result_title'
                        id={id}
                        target="_blank"
                        variant='h6'
                        rel="noreferrer"
                        href={validateHref(href)}
                        onClick={handleClick}
                        sx={stylesConfiguration}
            >
                {title}
            </Typography>
        </>
    );
};