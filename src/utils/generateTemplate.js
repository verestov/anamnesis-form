export function generateTemplate(form) {
	const lines = [`Имя - ${form.name}`, `Город - ${form.city}`]

	if (form.closePerson) {
		lines.push(`Близкий - да`)
		lines.push(`Пол - ${form.closePersonGender}`)
		lines.push(`Согласие - ${form.consent ? 'да' : 'нет'}`)
	} else {
		lines.push(`Близкий - нет`)
	}

	lines.push(`ХЗ - ${form.chronicDiseases}`)
	lines.push(`Аллергия - ${form.allergy}`)
	lines.push(`Инф, инс, чмт - ${form.heartProblems ? 'да' : 'нет'}`)

	if (form.service === 'dropper' || form.service === 'both') {
		lines.push(`Т, Р, Тр, Бес - ${form.nausea}`)
	}

	if (form.service === 'coding' || form.service === 'both') {
		lines.push(`Рск, чс, пс - ${form.bloodVomiting ? 'да' : 'нет'}`)
	}

	lines.push(`ПП - ${form.lastConsumption}`)
	lines.push(`Адрес - ${form.address}`)

	if (form.comment) {
		lines.push(`Коммент - ${form.comment}`)
	}

	return lines.join('\n')
}
