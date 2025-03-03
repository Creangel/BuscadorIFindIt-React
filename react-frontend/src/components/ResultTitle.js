export const ResultTitle = ({ id, href, title }) => {
    const validateHref = (href) => {
        if (href === undefined || href === null || href === '' || 
           ( Array.isArray(href) && href.length === 0 && href[0].trim() === '' ) ) {
          return "javascript:void(0)";
        }
        return href;
    };

    return (
        <a id={ id } target="_blank" rel="noreferrer" href={ validateHref(href) }> 
            { title } 
        </a>
    );
};
