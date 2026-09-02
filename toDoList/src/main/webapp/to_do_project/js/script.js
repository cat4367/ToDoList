const buttonAdd = document.getElementById('btn_add');
let total = 0; //현재 myTodoList 등록된 내용 개수

buttonAdd.addEventListener('click',() => {
	const inputText = document.getElementById('insertList').value;
	total++;
	
	let listItem = document.createElement('li');
	listItem.setAttribute('id','list_'+total);
	listItem.textContent = inputText;
	
	let chkBox = document.createElement('input');
	chkBox.setAttribute('type','checkbox');
	chkBox.setAttribute('id','chk'+total);
	listItem.prepend(chkBox);	//li안에서 내용 앞에 chkBox 입력
	
	let deleteBtn = document.createElement('button');
	deleteBtn.setAttribute('class','btn_del');
	listItem.appendChild(deleteBtn);	//li안에서 내용 뒤에 deleteBtn 입력
	
	document.querySelector('#myList').appendChild(listItem);
	if (document.querySelector('#no_list')){
		document.querySelector('#no_list').style.display = 'none';
		
	}
	document.querySelector('#insertList').value ='';
});



// 버튼에 삭제하는 기능 추가하기 (숨기기 기능추가해야함)
myList.addEventListener('click', event => {

	const deleteButton = event.target.closest('.btn_del');
	if (deleteButton) {
		const targetLi = deleteButton.closest('li');
		targetLi.remove();
		
		const reItems = myList.querySelectorAll('li');	//myList에 있는 모든 'li'를 타겟해서 배열?
		if (reItems.length === 1){											//길이가 '0'이면
			document.querySelector('#no_list').style.display = '';	//id='no_list'의 hidden을 지운다
		}

	}
});

const btnEdit = document.getElementById('btn_edit');

btnEdit.addEventListener('click', () => {

  const delBtns = document.querySelectorAll('.btn_del');
  
  // 각 삭제 버튼에 'hide' 클래스를 넣었다 뺐다 합니다.
  delBtns.forEach(button => {
    button.classList.toggle('hide');
  });
});
