import { useEffect, useState } from 'react';
import './App.css';
import video from "./video/baloons.mp4"

function App() {

  const [advice, setAdvice] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(1);
  const [price, setPrice] = useState(0);


  useEffect(() => {
    getAdvice()
  }, [])

  const getAdvice = async () => {
    const responce = await fetch ('https://www.boredapi.com/api/activity/ ')
    const data = await responce.json()
    setAdvice(data.activity)
    setType(data.type)
    setParticipants(data.participants)
    setPrice((data.price)*100)
  }

  const nextAdvice = async () => {
    const responce = await fetch ('https://www.boredapi.com/api/activity/ ')
    const data = await responce.json()
    setAdvice(data.activity)
    setType(data.type)
    setParticipants(data.participants)
    setPrice((data.price)*100)
  }


  return (
    <div className='App'>
      <div className='container'>
        <div className='content'>
      <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      <h1>Boredom killer</h1>
      <h4>Bored? Don't know how to occupy yourself? Let me help. Click on the button and do something from the suggested. Do something new and fun. Let's kill boredom together!</h4>
      <p className='advice'>{advice}</p>
      <p> ☝️ Type: <span className='dets'>{type}</span></p>
      <p> 👫 People required: <span className='dets'>{participants}</span></p>
      <p> 🤑 Cost: <span className='dets'>${price}</span></p>
      <button className='btn' onClick={nextAdvice}>Something else</button>
      </div>
      </div>
    </div>
  );
}

export default App;
