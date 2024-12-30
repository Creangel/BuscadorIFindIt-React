export const Snippet = ({ snippet }) => {
    return (
        <div className="row">   
            <div className="">
                { snippet.split("<em>")[0] }
                <strong>
                    { snippet.split("<em>")[1].split("</em>")[0] }
                </strong>
                { snippet.split("</em>")[1] }
            </div>
        </div>
    );
};
