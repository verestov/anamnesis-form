import React, { useState } from 'react'
import ChatterField from './ChatterField'

function Chatter() {
	const [fields, setFields] = useState([])

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

	return (
		<div className='chatter'>
			{fields.map(field => (
				<ChatterField
					key={field.id}
					field={field}
					onChange={handleFieldChange}
				/>
			))}

			<button type='button' onClick={handleAddField}>
				+ Добавить поле
			</button>
		</div>
	)
}

export default Chatter
