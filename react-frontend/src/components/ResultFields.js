import { Snippet } from "./Snippet";

export const ResultFields = ({ docIndex, dispositionResults, snippet, stylesConfiguration }) => {

    const snippetExist = snippet?.content?.[0] !== undefined;
    
    return (
        <div>
            {
                snippetExist && ( <Snippet snippet={ snippet.content[0] }
                                           docIndex={ docIndex  }
                                           stylesConfiguration={ stylesConfiguration } 
                                  /> )
            }
        </div>
    );
};
