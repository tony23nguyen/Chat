import { React, useEffect, useState } from "react";
import { ChatState } from "./Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import ChatBox from "./components/ChatBox";
import MyChats from "./components/MyChats";
import SideDrawer from "./components/misc/SideDrawer";

const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box>
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
