import React, { useState, useEffect } from 'react'
import ChatterField from './ChatterField'

function Chatter() {
	const [fields, setFields] = useState(() => {
		const savedFields = localStorage.getItem('chatterFields')

		return savedFields ? JSON.parse(savedFields) : []
	})

	useEffect(() => {
		localStorage.setItem('chatterFields', JSON.stringify(fields))
	}, [fields])

	const handleAddField = () => {
		const newField = {
			id: crypto.randomUUID(),
			title: '',
			text: '',
		}

		setFields([...fields, newField])
	}

	const handleFieldChange = (id, fieldName, value) => {
		setFields(
			fields.map(field =>
				field.id === id ? { ...field, [fieldName]: value } : field,
			),
		)
	}

	const handleDeleteField = id => {
		setFields(fields.filter(field => field.id !== id))
	}

	const handleCopy = async text => {
		await navigator.clipboard.writeText(text)
	}

	return (
		<div className='chatter'>
			{fields.map(field => (
				<ChatterField
					key={field.id}
					field={field}
					onChange={handleFieldChange}
					onDelete={handleDeleteField}
					onCopy={handleCopy}
				/>
			))}

			<button type='button' onClick={handleAddField}>
				+ Добавить поле
			</button>
		</div>
	)
}

export default Chatter
