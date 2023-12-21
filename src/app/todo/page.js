"use client"
import axios from "../../../lib/axios";
import { useEffect, useState } from "react";


export default function Todo() {

   const [todos, setTodos] = useState([])
   const [title, setTitle] = useState()

   useEffect(() => {
      fetchTodos()
   }, []);

   const titleChange = (e) => {
      setTitle(e.target.value)
   }

   const submitForm = (e) => {
      e.preventDefault()
      let formData = new FormData();
      formData.append('title', title)
      formData.append('is_done', 0)

      axios.post('api/todos', formData).then((res) => {
         setTitle('')
         fetchTodos()
         console.log(res);
      })
   }


   function fetchTodos() {
      axios.get('./api/todos').then((res) => {
         setTodos(res.data);
         console.log(res);
      })
   }

   console.log(todos.data);



   return (
      <div className="container">
         <div className="row">
            <div className=" mt-5 col-6 offset-3">
               <h1 className="">Todo App</h1>
               <form method="POST" onSubmit={submitForm}>
                  <div className=" d-flex">
                     <input type="text" placeholder="Add your task..." className="form-control rounded-0" onChange={titleChange} value={title} name="title" />
                     <button type="submit" className="btn btn-primary rounded-0">Save</button>
                  </div>
               </form>

               <div className="mt-3">
                  <table className="table table-border">
                     <thead>
                        <tr>
                           <th>Sr no.</th>
                           <th>Title</th>
                           <th>Status</th>
                        </tr>
                     </thead>
                     <tbody>
                        {todos
                           && todos.map((item, i) => (
                              <tr key={i}>
                                 <td>{i + 1}</td>
                                 <td>{item.title}</td>
                                 <td>{item.is_done}</td>
                              </tr>
                           ))}
                     </tbody>

                  </table>
               </div>

            </div>
         </div>

      </div>
   );

}
