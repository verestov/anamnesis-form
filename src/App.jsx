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
				/>

				<Input
					label='Город'
					name='city'
					value={form.city}
					onChange={handleChange}
				/>

				<InputWithTwoButtons
					label='Близкий'
					name='closePerson'
					value={form.closePerson}
					onChange={handleChange}
					onSetValue={handleSetValue}
				/>
				{form.closePerson && (
					<Input
						label='Пол'
						name='closePersonGender'
						value={form.closePersonGender}
						onChange={handleChange}
					/>
				)}
				{form.closePerson && (
					<InputWithTwoButtons
						label='Согласие'
						name='consent'
						value={form.consent}
						onChange={handleChange}
						onSetValue={handleSetValue}
					/>
				)}

				<InputWithOneButton
					label='Хрон. заб.'
					name='chronicDiseases'
					value={form.chronicDiseases}
					onChange={handleChange}
					onSetValue={handleSetValue}
				/>

				{isDropper && (
					<InputWithOneButton
						label='Тошнота, рвота, тремор, бессоница'
						name='nausea'
						value={form.nausea}
						onChange={handleChange}
						onSetValue={handleSetValue}
					/>
				)}

				{isCoding && (
					<InputWithOneButton
						label='Рвота с кровью, черный стул'
						name='bloodVomiting'
						value={form.bloodVomiting}
						onChange={handleChange}
						onSetValue={handleSetValue}
					/>
				)}

				<InputWithOneButton
					label='Аллергия'
					name='allergy'
					value={form.allergy}
					onChange={handleChange}
					onSetValue={handleSetValue}
				/>

				<Input
					label='Последнее потребление'
					name='lastConsumption'
					value={form.lastConsumption}
					onChange={handleChange}
				/>

				<Input
					label='Адрес'
					name='address'
					value={form.address}
					onChange={handleChange}
				/>

				<Input
					label='Комментарий'
					name='comment'
					value={form.comment}
					onChange={handleChange}
				/>

				<button className='copy-button' type='button' onClick={handleCopy}>
					Копировать
				</button>
			</div>
		</main>
	)
}

export default App
