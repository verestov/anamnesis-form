function InputWithOneButton({ label, name, value, onChange, onSetValue }) {
	return (
		<div className='field'>
			<span>{label}</span>
			<div className='input-button-row'>
				<input name={name} value={value} onChange={onChange} />

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
