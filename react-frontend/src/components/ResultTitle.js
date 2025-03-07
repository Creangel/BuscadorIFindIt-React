import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ResultTitle = ({ id, href, title, query, index }) => {

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
        event.preventDefault();
        onSendSignals('click', href, query, index + 1);
    };

    return (
        <>
            <CardActions>
               <Button size="small">
                    <a id={id} 
                        target="_blank" 
                        rel="noreferrer" 
                        href={validateHref(href)} 
                        onClick={handleClick}> 
                                {title} 
                    </a>
               </Button>
            </CardActions>
        </>
    );
};