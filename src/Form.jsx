import './Form.css'

function Form() {
    return (
        <form>
            <legend>Generic Form</legend>
            {formData.map((el, i) => {
                return <label key={i + el}>
                    {el.name + ":"}
                    <input type={el.dataType} style={{display: "block"}}/>
                </label>
            })}
            <button>SUBMIT</button>
        </form>
    )
}

const formData = [
    {
        name: "First Name",
        dataType: "text",
    },
    {
        name: "Last Name",
        dataType: "text",
    },
    {
        name: "Email",
        dataType: "email",
    },
    {
        name: "Number",
        dataType: "number",
    }
]

export default Form