import { useEffect, useState } from "react";

const style = {
	container: {
		width:'80px',
		backgroundColor: '#fff',
		display:'flex',
		flexDirection:'column',	
		margin:'3px',
		padding:'5px'
	}
}
function Photos(props) {
	const { photos } = props;
	return <>
		{photos.map((p) => {
			return <div style={style.container}>
				<div style={{width:'80px'}}>
					<img src={p.url} style={{maxWidth:'100%'}}/>
				</div>
				{/* <div style={{fontSize:'10px'}}>{p.title}</div> */}
			</div>
		})
		}
	</>


}

export default Photos;