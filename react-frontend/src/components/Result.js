import { ResultTitle } from "./ResultTitle";
import { ResultFields } from "./ResultFields";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const Result = ({ index, doc, disposition, snippet, query }) => {

    let dispositionResults = disposition.results
    let resultStyle = dispositionResults.stylesConfiguration;
    const titleStyle = resultStyle.filter((style) => style.name === "result_title")[0];
    const contentStyle = resultStyle.filter((style) => style.name === "result_content")[0];
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
        <Card variant="outlined" 
              id={ idClassSnip } 
              className=""
              sx={{ marginBottom: "10px",
                    borderColor: 'grey',
                    borderWidth: '2px',
                    '&:hover': {
                        boxShadow: '-6px 6px 18px rgb(179, 183, 219)', // Add shadow effect on hover
                    }
                 }}
        >
            <CardContent>
                < ResultTitle id={ idClassLink }
                                href={ doc[ dispositionResults.urlField ] }
                                title={ doc[ dispositionResults.titleField ] }
                                query={ query }
                                index={ index }
                                stylesConfiguration = { titleStyle }  
                />
                < ResultFields docIndex={ index }
                                dispositionResults={ dispositionResults }
                                snippet={ snippet }
                                infoResult={ doc }
                                stylesConfiguration = { contentStyle }
                />
            </CardContent>
            <div>
                <input type="hidden" name="docDate" value={doc.crawl_date} />
            </div>
        </Card>
    );
};
