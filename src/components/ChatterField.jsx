import { CopyOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import { Flex, Input } from 'antd'
import { useState } from 'react'

function ChatterField({ field, onChange, onDelete, onCopy }) {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		await onCopy(field.text)

		setCopied(true)

		setTimeout(() => {
			setCopied(false)
		}, 1000)
	}

	return (
		<div className='chatter-field'>
			<Flex vertical gap={10}>
				<Input.TextArea
					placeholder='Введите текст'
					value={field.text}
					onChange={event => onChange(field.id, 'text', event.target.value)}
					style={{ height: 120, resize: 'none' }}
				/>
			</Flex>

			<div className='chatter-field-actions'>
				<button type='button' onClick={handleCopy}>
					{copied ? (
						<CheckOutlined style={{ color: '#00ff00', fontSize: '18px' }} />
					) : (
						<CopyOutlined />
					)}
				</button>
				<button type='button' onClick={() => onDelete(field.id)}>
					<DeleteOutlined />
				</button>
			</div>
		</div>
	)
}

export default ChatterField
