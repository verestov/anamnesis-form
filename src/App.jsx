import { useEffect, useState } from 'react'
import { generateTemplate } from './utils/generateTemplate'
import AnamnesisForm from './components/AnamnesisForm'
import RoleSwitcher from './components/RoleSwitcher'
import Chatter from './components/Chatter'

function App() {
	const [role, setRole] = useState(() => {
		return localStorage.getItem('role') || 'call-center'
	})

	useEffect(() => {
		localStorage.setItem('role', role)
	}, [role])

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
				<div className='div-header'>
					<h1>by Mickle</h1>
					<RoleSwitcher role={role} setRole={setRole} />
				</div>

				{role === 'call-center' && (
					<>
						<AnamnesisForm
							form={form}
							handleChange={handleChange}
							handleSetValue={handleSetValue}
						/>

						<button className='copy-button' type='button' onClick={handleCopy}>
							Копировать
						</button>
					</>
				)}
				{role === 'chatter' && <Chatter />}
			</div>
		</main>
	)
}

export default App
