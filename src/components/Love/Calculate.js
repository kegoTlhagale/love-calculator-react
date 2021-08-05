import "./Style.css"

const Calculate = (props) => {
    const { name, otherName, onChange, onSubmit } = props
    return(
        <div className ="calculate-container">
            <div className ="card-header">
                <h4>Input two peoples names to calculate the love....</h4>
            </div>

            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            minLength={3}
                            //pattern="[a-zA-Z]"
                            placeholder="Mary"
                            onChange={onChange}
                            //value={name}
                        />
                    </div>

                    <h4>Loves</h4>

                    <div>
                        <input
                            type="text"
                            name="otherName"
                            minLength={3}
                            //pattern="[a-zA-Z]"
                            onChange={onChange}
                            //value={otherName}
                            placeholder="James"
                        />
                    </div>

                    <button> Calculate</button>
                </form>
            </div>

        </div>
    );
}
 
export default Calculate;
