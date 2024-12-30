import { SnipResult } from './SnipResult';

export const DrawResults = ({ info }) => {

    const docs = info.infoRender.docs;
    const dataRender = info.dataRender;

    return (
            <div id="results_container">
                { 
                    docs.map(( doc, index ) => (
                        <SnipResult key={ index }
                                    doc={ doc }
                                    dataRender = { dataRender }
                                    snippet= { info.snippet }
                                    index = { index }	
                        />
                    ))
                }
            </div>
           )
}