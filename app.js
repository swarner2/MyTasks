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

var strike = function(x){
	var taskList = document.getElementById('taskList');
	var that = this
	var button	= document.createElement('button');
	var text = document.createTextNode('DEL');
	button.appendChild(text);

	button.onclick = function(){
		//tags element to not be recreated at the top of the list
		that.id = 'deleted';
		document.getElementById("taskList").removeChild(that);
		}

//on click of the text line through or undo line through
	if(this.style.textDecoration === "line-through"){
		this.style.textDecoration = "none"
		//removes delete button
		this.removeChild(this.childNodes[1]);
		//move to the top of list if it is not being deleted
		if (this.id !== 'deleted') {taskList.insertBefore(this, taskList.childNodes[0]);}
		
	}
	else{
		this.style.textDecoration = "line-through";
		this.appendChild(button);
		//move to the end of list
		taskList.appendChild(this);
	}
}