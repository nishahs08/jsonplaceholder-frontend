import pin from '../pin-profile.svg';

function Comment(props) {
	const { username, body } = props;

	return <div style={{ display: 'flex' }}>
		<div style={{ backgroundColor: '#e3dac9', margin: '10px 10px 5px 40px', padding: '20px', fontSize: '14px', color: 'black' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div style={{
					padding: '10px',
					borderRadius: '20px',
					backgroundImage: 'radial-gradient(circle, #ffffff, #deddde, #bfbcbe, #a29c9d, #857d7d)',
					marginBottom: 'auto'
				}}><img src={pin} />
				</div>
				<div style={{ padding: '10px' }}>{username}</div>
			</div>
			<div>{body}</div>
		</div>
	</div>
}

export default Comment;