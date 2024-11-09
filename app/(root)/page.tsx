import { auth } from "@/auth";
import Chat from "@/components/chat/Chat";
import ChatInfo from "@/components/chatInfo/ChatInfo";
import Sidebar from "@/components/sidebar/Sidebar";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/signIn");
  }
  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <Chat />
        <ChatInfo />
      </div>
    </div>
  );
};

export default page;
