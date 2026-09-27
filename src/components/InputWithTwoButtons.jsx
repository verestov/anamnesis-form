function InputWithTwoButtons({
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
					value={value === true ? 'Да' : value === false ? 'Нет' : ''}
					onChange={onChange}
					placeholder={placeholder}
				/>

				<div className='button-container'>
					<button
						className={`button-green ${value === true ? 'selected' : ''}`}
						type='button'
						onClick={() => onSetValue(name, true)}
					>
						Да
					</button>
					<button
						className={`button-red ${value === false ? 'selected' : ''}`}
						type='button'
						onClick={() => onSetValue(name, false)}
					>
						Нет
					</button>
				</div>
			</div>
		</div>
	)
}

export default InputWithTwoButtons
