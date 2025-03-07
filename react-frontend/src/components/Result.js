import { ResultTitle } from "./ResultTitle";
import { ResultFields } from "./ResultFields";
import { useEffect } from "react";
import Card from '@mui/material/Card';

export const Result = ({ index, doc, disposition, snippet, query }) => {
    let dispositionResults = disposition.results
    let idClassLink = 'link_res_' + index
    let idClassSnip = 'snip_result_' + index

    useEffect(() => {
        console.log("Doc have changed. Fixing titles...");
        if (window.fixTitles) {
            window.fixTitles(index);
        } else {
            console.error("fixTitles is not defined. Make sure the script is loaded correctly.");
        }
    }, [ doc[ dispositionResults.urlField ] ]); 

    return (
        <Card id={ idClassSnip } className="snip_result" >
            < ResultTitle id={ idClassLink }
                            href={ doc[ dispositionResults.urlField ] }
                            title={ doc[ dispositionResults.titleField ] }
                            query={ query }
                            index={ index }  
            />
            < ResultFields docIndex={ index }
                            dispositionResults={ dispositionResults }
                            snippet={ snippet }
                            infoResult={ doc }
            />
            <div>
                <input type="hidden" name="docDate" value={doc.crawl_date} />
            </div>
        </Card>
    );
};
