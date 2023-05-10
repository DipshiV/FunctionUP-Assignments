
import './App.css';
import Userdetails from './componets/UserData/UserDetail';
import ScrollableCard from './componets/molecules/ScrollableCard';

function App() {
  return (
    <div className="App">
    {Userdetails.map(user=>{ return ( <ScrollableCard key={user.key} Pic={user.UserPic} userName={user.UserName} Description={user.UserDescription} Exp={user.UserExperience}  />)})}
    </div>
  );
}

export default App;
