import pin from '../pin-profile.svg';
function UserInfo(props) {
	const { user } = props;
	return <div
		onClick={props.onClick}
		style={{ display: 'flex', padding: '10px', cursor: 'pointer' ,margin:'auto',marginTop: '25px', }}
		className='card'>
		<div style={{
			padding: '10px',
			borderRadius: '20px',
			backgroundImage: 'radial-gradient(circle, #e567af, #d576c5, #c384d5, #ae91e0, #9b9ce6, #89a8f0, #78b4f6, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
		}}>
			<img src={pin} /></div>
		<div style={{ padding: '10px', flex: 1 }}>{user.name}</div>
		<div style={{ padding: '10px', flex: 1 }}>{user.email}</div>
	</div>
}

export default UserInfo;