function SelectForm({ value, onChange }) {
	return (
		<label className='field'>
			Процедура
			<select name='service' value={value} onChange={onChange}>
				<option value=''>Выберите процедуру</option>
				<option value='dropper'>Капельница</option>
				<option value='coding'>Кодирование</option>
				<option value='both'>Кап + код</option>
			</select>
		</label>
	)
}

export default SelectForm
