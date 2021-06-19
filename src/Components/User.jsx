import profile from '../profile.jpg';
import UserTabs from './UserTabs';

function info(key, value) {
	const boxStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '8px 10px',
	}
	if (typeof value == 'object') {			
		return Object.entries(value).map((k,i)=>{
			return info(k[0],k[1])
		})
	}
	return (
		<div style={boxStyle}>
			<div>{key}</div>
			<div>{value}</div>
		</div>
	);
}
function User(props) {
	const { user } = props;
	return (
		<div
			style={{
				position:'absolute',
                top:'0',
                bottom:'0',
				display: 'flex',
				backgroundImage: 'background-image: linear-gradient(to right top, #e567af, #d576c5, #c384d5, #ae91e0, #9b9ce6, #89a8f0, #78b4f6, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
			}}>
			<div className='card' style={{ display: 'flex', padding: '10px', flexDirection: 'column', width: '25%'}} >
				<div style={{ width: '50%', margin: 'auto' }}><img style={{ width: '100%', borderRadius: '300px' }} src={profile} /></div>
				{
					Object.keys(user).map((key, index) =>
						info(key, user[key])
					)
				}
			</div>
            <UserTabs/>
		</div>
	)
}

export default User;