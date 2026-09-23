function InputWithTwoButtons({ label, name, value, onChange, onSetValue }) {
	return (
		<div className='boolean-field'>
			<span>{label}</span>
			<div>
				<input name={name} value={value} onChange={onChange} />
				<button
					className='button-green'
					type='button'
					onClick={() => onSetValue(name, true)}
				>
					Да
				</button>
				<button
					className='button-red'
					type='button'
					onClick={() => onSetValue(name, false)}
				>
					Нет
				</button>
			</div>
		</div>
	)
}

export default InputWithTwoButtons
