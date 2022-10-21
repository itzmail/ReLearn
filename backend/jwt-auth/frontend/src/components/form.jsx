export const InputAuth = ({label, placeholder, type}) => {
    return (
        <div className="field mt-5">
            <label className="label">{label}</label>
            <div className="controls">
                <input type={type} className='input' placeholder={placeholder} />
            </div>
        </div>
    )
}