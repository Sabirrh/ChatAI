import InputMessage from "./bottonPanel/InputMessage";
import ChatPanel from "./chat/ChatPanel";
import SidePanel from "./chat/SidePanel";

export default function MainLayout() {
    return (
            <div id="chat" className="--dark-theme">
                <div className={"chat_box"}>
                    <ChatPanel/>
                </div>
                <div className="chat_panel">
                    <InputMessage />
                </div>
                <div className="side_panel">
                   <SidePanel />
                </div>
            </div>
    )
}