function RoleSwitcher({ role, setRole }) {
	return (
		<div className='role-switcher'>
			<div className={`role-slider ${role === 'chatter' ? 'chatter' : ''}`} />

			<button
				type='button'
				className={role === 'call-center' ? 'active' : ''}
				onClick={() => setRole('call-center')}
			>
				Колл-центр
			</button>

			<button
				type='button'
				className={role === 'chatter' ? 'active' : ''}
				onClick={() => setRole('chatter')}
			>
				Чаттер
			</button>
		</div>
	)
}

export default RoleSwitcher
