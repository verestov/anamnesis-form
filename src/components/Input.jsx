function Input({ label, name, value, onChange }) {
	return (
		<label className='field'>
			<span>{label}</span>

			<input name={name} value={value} onChange={onChange} />
		</label>
	)
}

export default Input
