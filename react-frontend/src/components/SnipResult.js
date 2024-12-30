import { ResultTitle } from "./ResultTitle";
import { ResultFields } from "./ResultFields";

export const SnipResult = ({ index, doc, dataRender, snippet}) => {
    let infoDrawResult = dataRender.auxContent
    let idClassLink = 'link_res_' + index
    let idClassSnip = 'snip_result_' + index
    return (
        <div id={ idClassSnip } className="snip_result ">
            <div>
                < ResultTitle id={ idClassLink }
                              href={ doc[dataRender.urlDoc] }
                              docName={ doc[dataRender.nameDoc] }   
                />
            </div> 
            <div>
                < ResultFields docIndex={ index }
                               infoDrawResult={ infoDrawResult }
                               snippet= { snippet }
                               infoResult={ doc }
                /> 
            </div>
        </div>
    );
};
