
import { useState } from 'react';
import Posts from './Posts';
import Albums from './Albums'
function UserInfoRight(props) {
    const [activeTab, setActiveTab] = useState('post');
    const {user} = props;
    function postHandler() {
        setActiveTab('post');
    }
    return <div style={{ display: 'flex', flexDirection: 'column',  color: '#f5f5f5', fontSize: '24px', margin: '40px' ,width:'90%',maxWidth:'90%'}}>
        <div style={{ display: 'flex', width: '90%', justifyContent: "center", color: '#f5f5f5', fontSize: '24px', margin: '10px' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #fff' }} onClick={postHandler}>Posts</div>
            <div style={{ padding: '20px' }} >Albums</div>
            <div style={{ padding: '20px' }}>Todos</div>
        </div>
        <Posts user={user}/>
        {/* <Albums userId={user.id}/> */}
    </div>
}

export default UserInfoRight;