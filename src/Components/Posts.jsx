import '../Styles/posts.css'
import pin from '../pin-profile.svg';
import Comment from './Comment';
import { useEffect, useState } from 'react';
function Posts(props) {
	const [commentStatus, setcommentStatus] = useState({});
	const [comments, setComments] = useState({});  //[id:[{},{},{}]},{}]
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState({
		title: '',
		body: ''
	})
	const { user } = props;
	const styles = {
		postContainer: { border: '.5px solid grey', padding: '.5px' },
		postSubContainer: { backgroundColor: '#fff', color: 'grey', padding: '20px', fontSize: '16px' },
		userInfoContainer: { display: 'flex', alignItems: 'center' },
		profileImg: {
			padding: '10px',
			borderRadius: '20px',
			backgroundImage: 'radial-gradient(circle, #ffffff, #deddde, #bfbcbe, #a29c9d, #857d7d)'
		},
		commentLink: { fontSize: '16px', color: 'blue' },
		commentsContainer: {},
		input: { backgroundColor: '#d8d8d8', margin: '10px', border: '1px solid #d8d8d8', padding: '5px' }
	}

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
			.then(response => response.json())
			.then(posts => posts.filter(post => post.userId == user.id))
			.then(posts => setPosts(posts))
	}, []);
	console.log(posts)

	function getComments(id) {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.then(response => response.json())
			.then(commentRes => setComments({ ...comments, [id]: commentRes }))
			.then(() => setcommentStatus({ ...commentStatus, [id]: !commentStatus[id] }));

	}

	function post(title, body, id) {
		return (
			<div style={styles.postContainer}>
				<div style={styles.postSubContainer}>
					<div style={styles.userInfoContainer}>
						<div style={styles.profileImg}>
							<img src={pin} />
						</div>
						<div style={{ padding: '10px' }}>
							{user.name}
						</div>
					</div>
					<div>
						{body}
					</div>
					<div >
						<div style={styles.commentLink} onClick={() => { getComments(id) }}>
							{(commentStatus[id]) ? 'hide comments' : 'show comments'}
						</div>
					</div>
					{
						(commentStatus[id])
						&&
						<div style={styles.commentsContainer}>
							{comments[id].map(comment =>
								<Comment username={comment.email} body={comment.body} />
							)}
						</div>
					}

				</div>
			</div >
		)
	}

	function createPost() {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({ ...newPost, userId: user.id }),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		}).then(response => response.json())
			.then(res => {
				setPosts([res, ...posts]);
				alert('created post!!');
				setNewPost({
					title: '',
					body: ''
				})
			})
			.catch((err) => alert('Problem occured', err))
	}
	return (
		<div style={{ marginBottom: '0px', overflowY: 'scroll' }}>
			<div style={{ padding: '.5px' }}>
				<div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
					<input placeholder='Title' type='text' value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} style={styles.input} />
					<textarea placeholder='Body' rows={4} value={newPost.body} onChange={(e) => setNewPost({ ...newPost, body: e.target.value })} style={styles.input} />
					<button style={{ width: '150px', margin: '5px 10px 10px auto', padding: '5px' }} onClick={createPost}>Create Post</button>
				</div>

			</div>
			{posts.map(p => post(p.title, p.body, p.id))}
		</div>
	)
}

export default Posts;