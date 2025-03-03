import { Snippet } from "./Snippet";
import { useEffect } from "react";

export const ResultFields = ({ docIndex, dispositionResults, snippet, infoResult }) => {

    const snippetExist = snippet?.content?.[0] !== undefined;
    
    return (
        <div>
            {
                snippetExist && ( <Snippet snippet={ snippet.content[0] }
                                           docIndex={ docIndex  } 
                                  /> )
            }
            {
                dispositionResults.hasCustomContent && (
                    <div></div>
                )
            }
        </div>
    );
};
