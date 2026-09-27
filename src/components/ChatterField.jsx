function ChatterField({ field, onChange }) {
	return (
		<div className='chatter-field'>
			<input
				type='text'
				placeholder='Название'
				value={field.title}
				onChange={event => onChange(field.id, 'title', event.target.value)}
			/>

			<textarea
				placeholder='Введите текст'
				value={field.text}
				onChange={event => onChange(field.id, 'text', event.target.value)}
			/>
		</div>
	)
}

export default ChatterField
