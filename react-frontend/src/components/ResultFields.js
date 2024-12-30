import { Snippet } from "./Snippet";
import { DrawResultsText } from "./DrawResultsText";
import { DrawResultsDate } from "./DrawResultsDate";

export const ResultFields = ({ docIndex, infoDrawResult, snippet, infoResult }) => {

    const snippetExist = snippet?.[docIndex]?.content?.[0] !== undefined;
    
    return (
        <div>
            {
                snippetExist && ( <Snippet snippet={ snippet[docIndex].content[0] }/> )
            }
            {
                infoDrawResult
                    .filter(result => infoResult[result.field] !== undefined && infoResult[result.field] !== '')
                    .map((result, i) => {
                        switch (result.type) {
                            case 'text':
                                return <DrawResultsText key={result.field || i} infoDrawResult={result} doc={infoResult} />;
                            case 'date':
                                return <DrawResultsDate key={result.field || i} infoDrawResult={result} doc={infoResult} />;
                            default:
                                return null;
                        }
                    })
            }
        </div>
    );
};
