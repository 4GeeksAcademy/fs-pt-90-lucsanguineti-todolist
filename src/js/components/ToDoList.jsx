import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDos, setTodos] = useState(["tarea 1", "tarea 2"]);

	function removeTask(task) {
		setTodos(toDos.filter(function(item){
			if (item == task) return false
			else return true
		}))
	}

	function addTask() {
		setTodos([...toDos, inputValue])
		setInputValue("")
	}

	return (
		<div className="container-fluid d-flex justify-content-center">
		<div className="d-flex flex-column w-50">
				<h1 className="justify-content-center d-flex">To Do List</h1>
			<div>
				<ul className="list-unstyled">
				  	<li><input onChange={(e) => {setInputValue(e.target.value)
						
					}} type="text" value= {inputValue} onKeyDown={(e) => {if(e.key == "Enter") addTask()}} placeholder="What needs to be done?"></input></li>
				  	{toDos.map(function(t){
						return <li>{t} <i onClick={() => removeTask(t)} class="fa-solid fa-xmark"></i></li>
				 	 })}
				</ul>
				<p>{toDos.length} items left</p>
			</div>
		</div>
		</div>
	);
};

export default ToDoList;