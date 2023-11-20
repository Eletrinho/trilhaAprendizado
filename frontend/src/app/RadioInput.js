export default function RadioInput({ onChange, option }) {
    const handleChange = event => {
        onChange(event.target.value)
    }

    return (
        <>
            <div className="custom-control custom-radio">
                <input
                    type="radio"
                    id={ option.option }
                    name="customRadio"
                    className="custom-control-input"
                    onChange={ handleChange }
                    value = { option.id }
                    />
                    <label
                        className="custom-control-label"
                        htmlFor={ option.option }
                        >
                        { option.option }
                    </label>
            </div>
        </>
    )
}
