import { Result } from './Result';

export const DrawResults = ({ docs, disposition, snippets }) => {

    return (
            <div id="results_container">
                { 
                    docs.map(( doc, index ) => (
                        <Result key={ index }
                                doc={ doc }
                                disposition = { disposition }
                                snippet={ snippets[index] }
                                index = { index }	
                        />
                    ))
                }
            </div>
           )
}