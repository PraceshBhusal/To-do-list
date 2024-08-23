  "use client"
  import React, { useState } from 'react'

  const page = () => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState(""); //variable
    const [mainTask, setmainTask] = useState([]) //store garna ko lagi 
    const submitHandler = (e)=>{ //elem sth
    e.preventDefault()  // page reload huna didaina 
  setmainTask([...mainTask, {title, desc}])
      //console.log(title)
      //console.log(desc) /* console maa title and des print or display garauxa*/

    settitle("") //jaba input field maa lekhera submit gareysi input field empty garauxa
    setdesc("")
    console.log(mainTask)
    
    }
    const deleteHandler =(i)=>{
      let copytask=[...mainTask]
      copytask.splice(i,1)
      setmainTask(copytask)
    }

    let renderTask=<h2>No Task Available</h2>
    if(mainTask.length>0)
    renderTask=mainTask.map((t,i)=>{
      return <li className='flex items-center justify-between' key={i} >
        <div className="flex items-center flex-justify-between w-2/3">
        <h5 className='text-2xl font-bold mb-5' >{t.title}</h5>
        <h6 className='text-1xl ml-20 font-medium' >{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 py-2 rounded text-white px-3'>Delete</button>
      </li>
    
    })
    return (
    <>
    <h1 className="bg-black text-white p-8 text-center text-4xl font-bold "  >Pracesh To-Do-List</h1>
    <form onSubmit={submitHandler}>
      <input type='text'className="border-zinc-800 border-2 m-8 px-4 py-1 text-1xl"required
      placeholder='Title'
      value={title} //yeslai tokeyko 
  onChange={(e)=>{
    settitle(e.target.value) // input maa lekhna ra every word lekhna help garxa 
  }}
  />
  <input type='text' className='border-zinc-800 border-2  m-8 px-4 py-1 text-1xl'required
  placeholder='Description'
  value={desc} 
  onChange={(e)=>{
    setdesc(e.target.value)
  }}
  
  />
  <button className='bg-black rounded text-white w-20 h-8 font-bold-200 '>Submit</button>
    </form >
    <hr/>
    <div className='p-8 bg-slate-200' >
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
    )
  }

  export default page