import '../Styles/posts.css'
import pin from '../pin-profile.svg';
import Comments from './Comments';
import { useEffect, useState } from 'react';
function Post() {
	const [showComment, setShowComment] = useState(false);

	return <div>
		<div style={{ backgroundColor: '#fff', color: 'grey', padding: '20px', fontSize: '20px' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div style={{
					padding: '10px',
					borderRadius: '20px',
					backgroundImage: 'radial-gradient(circle, #ffffff, #deddde, #bfbcbe, #a29c9d, #857d7d)'
				}}><img src={pin} />
				</div>

				<div style={{ padding: '10px' }}>Nisha singh</div>
			</div>
			<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
			Why do we use it?
			It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

        </div>
			<div >
				<div style={{ fontSize: '16px', color: 'blue' }} onClick={() => setShowComment(!showComment)}>
					{(showComment) ? 'hide comments' : 'show comments'}
				</div>
			</div>
			{
				(showComment)
				&&
				<div style={{ overflowY: 'scroll', maxHeight: '50vh' }}>
					<Comments />
					<Comments />
				</div>
			}

		</div>
	</div >
}

export default Post;