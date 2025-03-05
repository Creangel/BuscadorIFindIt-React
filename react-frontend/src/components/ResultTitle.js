export const ResultTitle = ({ id, href, title, query }) => {

    const validateHref = (href) => {
        if (href === undefined || href === null || href === '' || 
           ( Array.isArray(href) && href.length === 0 && href[0].trim() === '' ) ) {
          return "javascript:void(0)";
        }
        return href;
    };

    const onSendSignals = ( type, url, query, pos ) => {
        if (window.sendSignals) {
            window.sendSignals(type, url, query, pos);
        } else {
            console.error("sendSignals is not defined. Make sure the script is loaded correctly.");
        }
    };

    return (
        <a id={ id } 
           target="_blank" 
           rel="noreferrer" 
           href={ validateHref(href) } 
           onClick={ onSendSignals('click', href, query, ( id + 1 )) } > 
            { title } 
        </a>
    );
};
