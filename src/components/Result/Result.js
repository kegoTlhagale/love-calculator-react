import "./Style.css"
//import loveBug from "./LoveBug.png"

const Result = (props) => {
    const {name, otherName, result, errorMessage } = props
    console.log('props', props)
    return ( 
        <div className = "result-container">
            <div className= "card">
                <div className ="card-header" >
                    {result !== 0 && <h4>{name} Loves {otherName}</h4>}
                    
                </div>
                    
                <div className="card-body">
                    {result !== 0 ? (<h1>{`${result}%`}</h1>) : (<h4>{errorMessage}</h4>) }     
                </div>

                <h6>Reload page to calculate</h6>
                {/* <img src={loveBug} alt="Logo" />; */}

            </div>
        </div>
    );
}
 
export default Result;