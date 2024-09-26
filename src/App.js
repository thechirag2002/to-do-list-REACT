import React, {useState} from "react";
import "./App.css";
import Header from "./my-components/Header"
import Todos from "./my-components/Todos";
import Footer from "./my-components/Footer";

function App() {

  const onDelete = (todo) =>{
    console.log("I am on Delete of todo", todo);
  }

  const [todos, setTodos]=useState([
    {
      sno: 1,
      title : 'Complete Practical File of all subjects',
      desc: 'You have to complete your practical file before the deadline you are been provided'
    },
    {
      sno: 2,
      title : 'Go to the temple',
      desc: 'You have to temple'
    },
    {
      sno: 3,
      title : 'Take Maths Book to School Tommorrow',
      desc: 'You have to bring your Mathematics notebook to the school tommorow'
    }
  ]);
  
  return (
    <>
    <Header title="My-To-Do-List" searchBar={true} />
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
