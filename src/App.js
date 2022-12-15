import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fname, lname, Age, Gender, profession } from './store/action/action';


import './App.css';


function App() {
  const firstName = useSelector((state)=>state.firstName)
  const lastName = useSelector((state)=>state.lastName)
  const age = useSelector((state)=>state.Age)
  const gender = useSelector((state)=>state.Gender)
  const Profession = useSelector((state)=>state.Profession)

  const dispatch = useDispatch()  

  const [myfn, setMyfn] = useState("Dereje")
  const [myln, setMyln] = useState("Aragaw")
  const [myage, setMyage] = useState(0)
  const [mygender, setMygender] = useState("M")
  const [mypro, setMypro] = useState("student")
  return (
    
    <div className="App">
            <h1>{firstName}</h1>
            


       <div className='h'><h1> What is dispatch?</h1></div>
       <div className='btn' > 
       <div><label>FirstName: </label>
       <input value={myfn} onChange={(e)=>setMyfn(e.target.value)}/>
        <button  onClick={()=>dispatch(fname(myfn))}>Dispatch</button><br/>
        </div><br></br>
        <div>
        <label>LastName: </label>
        <input value={myln} onChange={(e)=>setMyln(e.target.value)}/>
        <button onClick={()=>dispatch(lname(myln))} >Dispatch</button>
        </div><br></br>
        <div>
        <label >Age:  </label>
        <input  value={myage} onChange={(e)=>setMyage(e.target.value)}/>
        <button  onClick={()=>dispatch(Age(myage))} >Dispatch</button>
        </div><br></br>
        <div>
        <label >Gender: </label>
        <input  value={mygender} onChange={(e)=>setMygender(e.target.value)}/>
        <button  onClick={()=>dispatch(Gender(mygender))}>Dispatch</button>
        </div><br></br>
        <label>Profession: </label>
        <input  value={mypro} onChange={(e)=>setMypro(e.target.value)}/>
        <button onClick={()=>dispatch(profession(mypro))} >Dispatch</button><br/>
       <br/>
       
        </div>
        
<div className='btnn' >
      <div>FirstName: {firstName} </div>
      <div>LastName: {lastName} </div>
      <div>Age: {age}</div>
      <div>Gender: {gender}</div>
      <div>Profession: {Profession}</div>

    </div>
    </div>
    

  );
}

export default App;
