import SelectForm from './SelectForm'
import Input from './Input'
import InputWithOneButton from './InputWithOneButton'
import InputWithTwoButtons from './InputWithTwoButtons'

function AnamnesisForm({ form, handleChange, handleSetValue }) {
	const isDropper = form.service === 'dropper' || form.service === 'both'

	const isCoding = form.service === 'coding' || form.service === 'both'
	return (
		<>
			<SelectForm value={form.service} onChange={handleChange} />

			<Input
				label='Имя'
				name='name'
				value={form.name}
				onChange={handleChange}
				placeholder='Введите имя'
			/>

			<Input
				label='Город'
				name='city'
				value={form.city}
				onChange={handleChange}
				placeholder='Введите город'
			/>

			<InputWithTwoButtons
				label='Близкий'
				name='closePerson'
				value={form.closePerson}
				onChange={handleChange}
				onSetValue={handleSetValue}
				placeholder='Помощь нужна близкому?'
			/>
			{form.closePerson && (
				<Input
					label='Пол'
					name='closePersonGender'
					value={form.closePersonGender}
					onChange={handleChange}
					placeholder='Введите пол'
				/>
			)}
			{form.closePerson && (
				<InputWithTwoButtons
					label='Согласие'
					name='consent'
					value={form.consent}
					onChange={handleChange}
					onSetValue={handleSetValue}
					placeholder='Пациент согласен на помощь?'
				/>
			)}

			<InputWithOneButton
				label='Хрон. заб.'
				name='chronicDiseases'
				value={form.chronicDiseases}
				onChange={handleChange}
				onSetValue={handleSetValue}
				placeholder='Введите ХЗ'
			/>

			{isDropper && (
				<InputWithOneButton
					label='Тошнота, рвота, тремор, бессоница'
					name='nausea'
					value={form.nausea}
					onChange={handleChange}
					onSetValue={handleSetValue}
					placeholder='Введите др. заболевания'
				/>
			)}

			{isCoding && (
				<InputWithOneButton
					label='Рвота с кровью, черный стул'
					name='bloodVomiting'
					value={form.bloodVomiting}
					onChange={handleChange}
					onSetValue={handleSetValue}
					placeholder='Рвота с кровью, черный стул'
				/>
			)}

			<InputWithOneButton
				label='Аллергия'
				name='allergy'
				value={form.allergy}
				onChange={handleChange}
				onSetValue={handleSetValue}
				placeholder='Есть ли аллергия на препараты?'
			/>

			<Input
				label='Последнее потребление'
				name='lastConsumption'
				value={form.lastConsumption}
				onChange={handleChange}
				placeholder='Кода ПП и сколько запой?'
			/>

			<Input
				label='Адрес'
				name='address'
				value={form.address}
				onChange={handleChange}
				placeholder='Введите адрес'
			/>

			<Input
				label='Комментарий'
				name='comment'
				value={form.comment}
				onChange={handleChange}
				placeholder='Введите комментарий'
			/>
		</>
	)
}

export default AnamnesisForm
