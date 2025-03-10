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
        if (window.sendSignals) {
            window.sendSignals(type, url, query, pos);
        } else {
            console.error("sendSignals is not defined. Make sure the script is loaded correctly.");
        }
    };

    const handleClick = (event) => {
        onSendSignals('click', href, query, index + 1);
    };

    return (
        <Typography component="a"
                    id={id}
                    target="_blank"
                    variant='h6'
                    rel="noreferrer"
                    href={validateHref(href)}
                    onClick={handleClick}
                    sx={{ ...stylesConfiguration, textDecoration: 'none' }}
        >
            {title}
        </Typography>
    );
};