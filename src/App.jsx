import { useState } from 'react'
import { generateTemplate } from './utils/generateTemplate'
import AnamnesisForm from './components/AnamnesisForm'

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
		bloodVomiting: '',

		lastConsumption: '',
		address: '',
		comment: '',
	})

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

				<AnamnesisForm
					form={form}
					handleChange={handleChange}
					handleSetValue={handleSetValue}
				/>

				<button className='copy-button' type='button' onClick={handleCopy}>
					Копировать
				</button>
			</div>
		</main>
	)
}

export default App
