import { Profile, Sidebar } from "./Components";


interface DashboardProps {
    // user: User
}

function Dashboard({}: DashboardProps) {
  return (
    <div>
        <Profile />
        <Sidebar />
    </div>
  )
}

export default Dashboard;