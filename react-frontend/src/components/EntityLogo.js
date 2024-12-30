export const EntityLogo = ({ img }) => {
    return (
        <div className="col col-lg-2 col-sm-12 col-md-1"> 
            <div className="col">
                <img id="imgEntityLogo" src={img} alt=""/>
            </div>
        </div>
    );
};