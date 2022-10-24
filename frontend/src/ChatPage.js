import {React, useEffect, useState} from 'react';
import axios from 'axios';

const ChatPage = () => {

    const [chats, setchats] = useState([]);

    const fetchChats = async () =>{
      const {data} = await axios.get('/api/chat');

          setchats(data);
        
    };
    useEffect(() => {
      fetchChats();
    }, []);
    // console.log(data)

  return (
    <div>
      {chats.map(  chat => <div key={chat._id}>{chat.chatName} </div>)}

    </div>
  )
  
}

export default ChatPage