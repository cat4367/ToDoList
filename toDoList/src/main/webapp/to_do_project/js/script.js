const buttonAdd = document.getElementById('btn_add');
let total = 0; //현재 myTodoList 등록된 내용 개수
let myTodoList = []; // 등록된 내용 정보


buttonAdd.addEventListener('click',() => {
	const inputText = document.getElementById('insertList').value;
	
	let myTodo = {
		no : total + 1,
		content : inputText,
		finish : 'n'
	};
	myTodoList.push(myTodo);
	
	total++;
	document.getElementById('insertList').value = '';
	
	// const toDoList = document.createElement('li');
	// toDoList.textContent = inputText;
	// const $ul = document.getElementById('myList');
	// $ul.appendChild(toDoList);
	
	updateMyList();
})

function updateMyList(){
	let list = '';
	for(let item of myTodoList){
		let listItem ='<li id="list_' + item.no + '">';
			listItem += '<input type="checkbox"/>';
			listItem += item.content;
			listItem += '<button>삭제</button>';
			listItem += '</li>';
		list += listItem;
	}
		document.getElementById('myList').innerHTML = list;
}
