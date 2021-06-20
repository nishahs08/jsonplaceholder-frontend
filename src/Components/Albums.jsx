import { useEffect, useState } from 'react';
import '../Styles/albums.css'
import Photos from './Photos';
function Albums(props) {
	const [albums, setAlbums] = useState([]);
	const [showAlbum, setShowAlbum] = useState({});
	const [photos, setPhotos] = useState({});
	const { userId } = props;
	const styles = {
		albumContainer: { marginBottom: '0px',overflowY: 'scroll' }
	}
	useEffect(() =>
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
			.then(response => response.json())
			.then(albumRes => setAlbums(albumRes))
	)

	function getPhotos(albumId) {
		fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
			.then(response => response.json())
			.then(filteredPhotos =>
				setPhotos({ ...photos, [albumId]: filteredPhotos }))
			.then(() => setShowAlbum({ ...showAlbum, [albumId]: !showAlbum[albumId] }))
	}
	function album(albumId, title) {
		return (<>
			<div className='albums-card' style={{ display: 'flex', flexDirection: 'column'}}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>{title}</div>
					<div style={{ color: 'blue' }} onClick={() => getPhotos(albumId)}>
						{(showAlbum[albumId]) ? 'hide album' : 'show album'}
					</div>
				</div>

				{(showAlbum[albumId])
					&&
					<div style={{ borderTop: '1px solid grey' ,display:'flex',flexWrap:'wrap'}}>
						<Photos photos={photos[albumId]}/>
					</div>}
			</div>
		</>
		)
	}
	return (
		<div style={ { marginBottom: '0px',overflowY:'scroll'}}>
			{
				albums.map(a => album(a.id, a.title))
			}

		</div>
	)
}

export default Albums;