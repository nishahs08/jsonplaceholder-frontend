
import { useState } from 'react';
import Post from './Post';
function UserTabs() {
    const [activeTab, setActiveTab] = useState('post');
    function postHandler() {
        setActiveTab('post');

    }
    return <div style={{ display: 'flex',flexDirection:'column', width: '90%', color: '#f5f5f5', fontSize: '24px' ,margin:'10px'}}>
        <div style={{ display: 'flex', width: '90%', justifyContent: "center", color: '#f5f5f5', fontSize: '24px' ,margin:'10px'}}>
            <div style={{ padding: '20px' ,borderBottom:'1px solid #fff'}} onClick={postHandler}>Posts</div>
            <div style={{ padding: '20px' }} >Albums</div>
            <div style={{ padding: '20px' }}>Todos</div>
        </div>
        <Post/>
        <Post/>
    </div>
}

export default UserTabs;