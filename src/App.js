
import './App.css';
import Card from './components/card';

function App() {
  
  return (
    <div className="App">    
   
    <Card designation = 'UI/Ux Desiegner'
    name='Dipshi Verma'
    imageUrl ='https://media.istockphoto.com/id/1170221181/photo/beautiful-chinese-young-woman-in-black-coat-and-beret-sitting-in-outdoor-cafe-and-smiling-at.jpg?s=1024x1024&w=is&k=20&c=GMsOcrB6G_n5junxXiTHwuPudlwv3wnoYdJAVaIT-sQ='
    body = 'I am a UI/Ux Designer in a software developement company .I have two years experience in it   '/>
    <Card designation = 'Full Stack Web Developer'
    name='Sardul Patel'
    imageUrl ='https://media.istockphoto.com/id/1386217759/photo/portrait-of-a-confident-young-businesswoman-standing-against-an-urban-background.jpg?s=612x612&w=is&k=20&c=o-F_dKiIgk0g9WCfOKRAeGoXTBjuOlT5X4lc8LW8leo='
    body = 'I am a full stack developer in a software company which is located in Noida '/>
    <Card designation = 'AI/ML Engineer'
    name='Parul Verma'
    imageUrl ='https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    body = 'I am a AI/ML/Devops Engineer .working since 2018 in a MNC'/>

    </div>
  );
}

export default App;
