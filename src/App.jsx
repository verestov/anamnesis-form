import { useState } from 'react'
import SelectForm from './components/SelectForm'
import Input from './components/Input'
import InputWithOneButton from './components/InputWithOneButton'
import InputWithTwoButtons from './components/InputWithTwoButtons'
import { generateTemplate } from './utils/generateTemplate'

function App() {
	const [form, setForm] = useState({
		service: '',
		name: '',
		city: '',
		closePerson: null,
		closePersonGender: '',
		consent: null,
		chronicDiseases: '',
		allergy: '',
		heartProblems: null,

		nausea: '',
		bloodVomiting: null,

		lastConsumption: '',
		address: '',
		comment: '',
	})

	const isDropper = form.service === 'dropper' || form.service === 'both'

	const isCoding = form.service === 'coding' || form.service === 'both'

	const handleChange = event => {
		const { name, value } = event.target

		setForm({
			...form,
			[name]: value,
		})
	}

	const handleSetValue = (name, value) => {
		setForm({
			...form,
			[name]: value,
		})
	}

	const handleCopy = async () => {
		const text = generateTemplate(form)

		await navigator.clipboard.writeText(text)

		alert('Скопировано в буфер обмена')
	}

	return (
		<main className='app'>
			<div className='form-container'>
				<h1>by Mickle</h1>
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

				<button className='copy-button' type='button' onClick={handleCopy}>
					Копировать
				</button>
			</div>
		</main>
	)
}

export default App
