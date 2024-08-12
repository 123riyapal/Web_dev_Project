import React, { useEffect, useState } from 'react';
import './Feed.css';
import photo from './avatar.jpg';
import { Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ImageIcon from '@mui/icons-material/Image';
import FeedInputIcons from './FeedInputIcons';
import { CalendarViewDay, EventNote } from '@mui/icons-material';
import Post from './Post';
import { db } from './firebase'; // Ensure this is correctly imported
import { collection, addDoc, onSnapshot, serverTimestamp } from 'firebase/firestore'; // Import necessary Firestore functions

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })));
        });
        return () => unsubscribe();
    }, []);

    const sendPost = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'posts'), {
            name: 'Riya Pal',
            description: "this is a test",
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp(),
        });
        setInput(''); // Clear the input after sending the post
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__avatarContainer">
                    <Avatar className='feed__avatar' src={photo} />
                </div>
                <div className="feed__input">
                    <EditIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Start a post" type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputIcons">
                    <FeedInputIcons Icon={ImageIcon} title='Photo' color="#7085f9" />
                    <FeedInputIcons Icon={EventNote} title='Event' color="#CD7F32" />
                    <FeedInputIcons Icon={CalendarViewDay} title='Write article' color="#7FC15E" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
            ))}
        </div>
    );
}

export default Feed;
