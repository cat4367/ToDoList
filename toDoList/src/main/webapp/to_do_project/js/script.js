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
			listItem += '<button class="btn_del"></button>';
			listItem += '</li>';
		list += listItem;
	}
		document.getElementById('myList').innerHTML = list;
}

const myList = document.getElementById('myList');

// 삭제하는 버튼 만들기 (숨기기 기능추가해야함)
myList.addEventListener('click', event => {

	const deleteButton = event.target.closest('.btn_del');
	if (deleteButton) {
	const targetLi = deleteButton.closest('li');
	
	const targetNo = parseInt(targetLi.id.replace('list_', ''));
	//자동생성된 id의 'list_' 를 지우고 남아있는 숫자(num)를 정수화시킴
	myTodoList = myTodoList.filter(item => item.no !== targetNo);
	// myTodoList 배열에서 클릭한 번호(no)와 일치하지 않는 항목들만 남깁니다. (배열에서 삭제)
	updateMyList();
	if (myTodoList.length === 0) {
	      document.getElementById('myList').innerHTML = '<li>아직 할 일이 없습니다.</li>';
  }
}});
