import CLobby from "@/app/_components/lobbyUI/wrapper";

export default function LobbyHome({
  children,
  user,
  admin
}: {
  children: React.ReactNode,
  user: React.ReactNode,
  admin: React.ReactNode,
}){
  const adminValue = true
  return ( 
    <CLobby>
      {adminValue ? admin : user}
      {children}
    </CLobby>
  )
}