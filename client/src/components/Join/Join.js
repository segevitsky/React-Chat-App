import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const roomHandler = (e) => {
        setRoom(e.target.value)
    }

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div> <input placeholder='Name' className='joinInput' onChange={nameHandler}/> </div>
                <div> <input placeholder='Room' className='joinInput mt-20' onChange={roomHandler}/> </div>
                
                <Link onClick={e => (!room || !name) ? e.preventDefault(e) : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Sign in</button>
                </Link>
            </div>
        </div>
        )
}



export default Join;