import ScheduleList from "./core-components/schedule-list"
import SideBar from "./core-components/side-bar"

export default function App() {
  return (
    <main className={`
    flex flex-col sm:flex-row
    items-center sm:items-stretch
    `}>
      <SideBar />
      <ScheduleList />
    </main> 
  )
}