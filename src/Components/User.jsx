import profile from '../profile.jpg';
import UserInfoRight from './UserInfoRight';

const styles = {
	userContainer: {
		position: 'absolute',
		top: '0',
		bottom: '0',
		right: 0,
		left: 0,
		display: 'flex'
	},
	boxStyle: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '8px 10px',
	},
	card: {
		display: 'flex',
		padding: '10px',
		flexDirection: 'column',
		width: '25%',
		marginTop: '14vh',
		marginBottom: '5vh'
	},
	imgContainer: { width: '50%', margin: 'auto' },
	image: { width: '100%', borderRadius: '300px' }
}

function info(key, value) {
	if (typeof value == 'object') {
		return Object.entries(value).map((k, i) => {
			return info(k[0], k[1])
		})
	}
	return (
		<div style={styles.boxStyle}>
			<div>{key}</div>
			<div>{value}</div>
		</div>
	);
}

function User(props) {
	const { user } = props;
	return (
		<div style={styles.userContainer}>
			<div className='card' style={styles.card} >
				<div style={styles.imgContainer}>
					<img style={styles.image} src={profile} />
				</div>
				{Object.keys(user).map((key, index) =>
					info(key, user[key])
				)}
			</div>
			<UserInfoRight user={user}/>
		</div>
	)
}

export default User;