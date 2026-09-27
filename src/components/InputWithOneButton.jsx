function InputWithOneButton({
	label,
	name,
	value,
	onChange,
	onSetValue,
	placeholder,
}) {
	return (
		<div className='field'>
			<span>{label}</span>
			<div className='input-button-row'>
				<input
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>

				<button
					className='button-red'
					type='button'
					onClick={() => onSetValue(name, 'нет')}
				>
					Нет
				</button>
			</div>
		</div>
	)
}

export default InputWithOneButton
