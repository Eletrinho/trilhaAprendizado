export default function RadioInput({ onChange, option }) {
    const handleChange = event => {
        onChange(event)
    }

    return (
        <>
            <div className="form-check">
                <input
                    type="radio"
                    id={ option.option }
                    name="confidence"
                    className="form-check-input"
                    onChange={ handleChange }
                    value = { option.id }
                    />
                    <label
                        className="form-check-label"
                        htmlFor={ option.option }
                        >
                        { option.option }
                    </label>
            </div>
        </>
    )
}
