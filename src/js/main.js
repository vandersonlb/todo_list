import {currentInstance} from "../../Controllers/TaskController.js"

var taskController = currentInstance();

taskController._addTaskButton.onclick = function() { taskController.addTask() }


document.querySelector("#show_task_list").onclick = () => { 
  console.log(taskController._taskList.getList)
  
  // var list = taskController._taskList.getList;
  // var sorted = list.sort((a,b) => a._date - b._date );

}