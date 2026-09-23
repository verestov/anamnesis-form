import { useState } from 'react'
import SelectForm from './components/SelectForm'
import Input from './components/Input'
import InputWithOneButton from './components/InputWithOneButton'

function App() {
	const [form, setForm] = useState({
		service: '',
		name: '',
		city: '',
		closePerson: null,
		consent: '',
		allergy: '',
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
				<InputWithOneButton
					label='Аллергия'
					name='allergy'
					value={form.allergy}
					onChange={handleChange}
					onSetValue={handleSetValue}
				/>
			</div>
		</main>
	)
}

export default App
