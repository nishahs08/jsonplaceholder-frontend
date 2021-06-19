import UserInfo from '../Components/UserInfo';
import '../Styles/userDetails.css';
function UserDetails(props) {
	const { users } = props;
	return <div className='user-detail-container'>
		{users.map((user, key) =>
			<UserInfo onClick={() => props.setPath(`/users/${user.id}`)} key={key} user={user} />)}
	</div>
}

export default UserDetails;