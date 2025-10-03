import { useState } from "react";
import { v4 as uuid} from 'uuid';
import { sendMessageTOServer } from "../../socket/socketClient";

import {setCurrentChatId,storeMessage} from '../../store/chatSlice';
import {useSelector, useDispatch} from 'react-redux';
export default function InputMessage(){
    
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
     let chatID = useSelector((state)=> state.chat.currentChatID)
    
    
     const sendMessage = () => {
        if(content.trim()){
         const message = {
            role:'user',
            content: content.trim()
        }
        if(!chatID){
            //if no chat id.. create a new
            chatID = uuid();
            dispatch(setCurrentChatId(chatID))

        } 
        //store the message in Redux Store
          dispatch(storeMessage({message,chatID}))
   
          //call the function to send the messge to the server
          // This function should be defined in your socketClient file


        sendMessageTOServer({message,chatID}); //SOCKET IO
        setContent("");
        }else{
            //Handle empty message case
           console.log("Message cannot be empty")
        }
        
    }

    const handleEnterPress = (e) => {
      if(e.key === 'Enter' && content.trim()){
          sendMessage();
      }
    }
    return(
        <div className="chat_bot_panel">
            <input 
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleEnterPress}
                placeholder="Chat with AI"
                className="chat_box_input"
            />
        </div> 
    )
}