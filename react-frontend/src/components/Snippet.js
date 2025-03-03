import React, { useState, useEffect } from "react";

export const Snippet = ({ docIndex, snippet }) => {

    const [snippetPrefix, setSnippetPrefix] = useState([]);
    const [snippetText, setSnippetText] = useState([]);

    const formatSnippet = () => {
        return snippet.split("<em>")[0] + 
               "<strong>" + 
               snippet.split("<em>")[1].split("</em>")[0] + 
               "</strong>" + 
               snippet.split("</em>")[1];
    }

    useEffect(() => {
        setSnippetText( formatSnippet() );
    }, []);

    useEffect(() => {
        console.log("Snippet have changed. Fixing snippet...");
        if (window.fixSnippet) {
            const snippetPrefix =  window.fixSnippet( docIndex );
            setSnippetPrefix( snippetPrefix );
            setSnippetText( formatSnippet() );
        } else {
            console.error("fixSnippet is not defined. Make sure the script is loaded correctly.");
        }
    }, [ snippet ]); 

    return (
        <div>
            <div id={ "snippet_text_" + docIndex } 
                 className="snippet_text" 
                 dangerouslySetInnerHTML={{ __html: snippetPrefix + snippetText }}>
            </div>
        </div>
    );
};
