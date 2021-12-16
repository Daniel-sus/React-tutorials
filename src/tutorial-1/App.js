import ProfileComponent from "./components/ProfileComponent"
import ProfileClass from "./components/ProfileClass"

function App() {
    return(
        <div>
        <ProfileComponent name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
        <ProfileClass name="Федя Кошкин" registredAt={new Date(2012, 3, 12)}/>
        <ProfileComponent name="Вася Пупкин" registredAt={new Date(2021, 5, 22)}/>
        </div>
         )
}
export default App