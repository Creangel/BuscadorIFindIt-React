export const ResultTitle = ({ id, href, docName }) => {
    return (
        <a id={ id } className="link_res" target="_blank" rel="noreferrer" href={ href }> 
            { docName } 
        </a>
    );
};
