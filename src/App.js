import React, {useState} from 'react';
import TodoList from"./components/TodoList";

//componente principal da aplicação

export default function App(){
  //var estado que guarda a lista de tarefas
  const [todos, setTodos] = useState([]);
  //var estado guarda a imout da tarefa

  const [newTask, setNewTask] = useState("");

  //função ue adiciona uma nova tarefa na lista de tarefas
  const addTask = ()=> {
    if(newTask.trim()==="")return;
    //cria um objeto tarefa
    const newTodo = {id:Date.now(), text: newTask}

    //atualizar a lista armazenada em 'todos'
    setTodos([...todos, newTodo]);


  }

}