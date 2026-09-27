function Input({ label, name, value, onChange, placeholder }) {
	return (
		<label className='field'>
			<span>{label}</span>

			<input
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</label>
	)
}

export default Input
