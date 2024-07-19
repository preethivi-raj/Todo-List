import { useEffect, useState } from "react";
import List from "./List";


function App() {
    
const [text , setText] = useState()
const [datas , setDatas] = useState([ ])
const [search , setSearch] = useState("")

useEffect( ()=>{
    const getData = ()=>{
      if(localStorage.getItem("task")!=null){
         const data = JSON.parse(localStorage.getItem("task"))
         setDatas(data)
      }
    }
    getData()
  } ,[])

const storeData = (text)=>{
     if(localStorage.getItem("task") == null){
        localStorage.setItem("task" ,"[]")
     }
     let oldData = JSON.parse(localStorage.getItem("task"))
         oldData.push(text)

     localStorage.setItem("task" , JSON.stringify(oldData))
}
const handleAdd = (e)=>{
      e.preventDefault();
      if(text){
        setDatas([...datas , text]) 
        setText("")
        storeData(text)
      } 
}

  return (
    <div className="text-center">
      <h1 className="text-6xl m-4 font-serif" >Todo List</h1>
        <div>
            <input
             type="text"
             placeholder="Search"
             className="input input-bordered input-warning  max-w-xs m-3"
             onChange={(e)=>setSearch(e.target.value)}
              />
        </div>
      <form >
        <input
         type="text" 
         value={text}
         className="input input-bordered input-warning w-full max-w-xs m-3"
         placeholder="Enter task"
         onChange={(e)=>setText(e.target.value)}
         />

        <button className="btn btn-outline btn-warning" onClick={(e)=>handleAdd(e)} >Add ++</button>
      </form>

      <List datas={datas.filter( (data)=>data.toLowerCase().includes(search.toLowerCase()))} setDatas={setDatas} />
    </div>
  );
}

export default App;

