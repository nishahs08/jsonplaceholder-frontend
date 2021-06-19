import pin from '../pin-profile.svg';
function Comments() {
	return <div style={{ display: 'flex' }}>
		<div style={{ backgroundColor: '#e3dac9', margin: '10px 10px 5px 40px', padding: '20px', fontSize: '18px' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div style={{
					padding: '10px',
					borderRadius: '20px',
					backgroundImage: 'radial-gradient(circle, #ffffff, #deddde, #bfbcbe, #a29c9d, #857d7d)',
					marginBottom: 'auto'
				}}><img src={pin} />
				</div>
				<div style={{ padding: '10px' }}>Nisha singh</div>
			</div>

			<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
			Why do we use it?
			It is a long establ
		</div>
		</div>

	</div>
}

export default Comments;