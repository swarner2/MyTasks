var addTask = function(){
	var button = document.getElementById('addTask');
	var input = document.getElementById('taskInput');
	var taskList = document.getElementById('taskList');
	var newItem = document.createElement('li');
	var textnode = document.createTextNode(input.value);
	newItem.class = 'task';
	newItem.onclick = strike;
	newItem.appendChild(textnode);
	taskList.insertBefore(newItem, taskList.childNodes[0]);
	input.value = '';
};




var strike = function(){
	if(this.style.textDecoration === "line-through"){
		//this.style.textDecoration = "none"
		document.getElementById("taskList").removeChild(this);
	}
	else{
		this.style.textDecoration = "line-through";
	}
	console.log(this)
}