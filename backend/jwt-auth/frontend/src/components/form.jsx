export const InputAuth = ({label, placeholder, type, onChange}) => {
    return (
        <div className="field mt-5">
            <label className="label">{label}</label>
            <div className="controls">
                <input onChange={onChange} type={type} className='input' placeholder={placeholder} />
            </div>
        </div>
    )
}