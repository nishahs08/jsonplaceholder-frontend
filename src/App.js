import { useEffect, useState } from 'react';
import UserDetails from './Components/UserDetails';
import User from './Components/User';
import './App.css';
function App() {
	const [users, setUsers] = useState([]);
	const [path, setPath] = useState('/users');
	const RE_USER_ROUTE = /^\/users\/(\d)+/;
	const isUserRoute = RE_USER_ROUTE.test(path);
	const curr_id = (isUserRoute) ? RE_USER_ROUTE.exec(path)[1] : '';

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => { console.log(response); setUsers(response) })
	}, []);

	const user = users.find(user => user.id == curr_id);
	return (<>
		{(path == '/users') && <UserDetails setPath={setPath} users={users} />}
		{(isUserRoute) && <User user={user} />}
	</>
	);
}

export default App;



