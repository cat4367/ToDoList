const buttonAdd = document.getElementById('btn_add');
let total = 0; //현재 myTodoList 등록된 내용 개수

buttonAdd.addEventListener('click',() => {
	const inputText = document.getElementById('insertList').value;
	
	if (inputText.trim() === '') return;	// 공백 입력 방지
	total++;
	
	let listItem = document.createElement('li');
	listItem.setAttribute('id','list_'+total);
	
	let chkBox = document.createElement('input');
	chkBox.setAttribute('type','checkbox');
	chkBox.setAttribute('id','chk'+total);
	
	let textSpan = document.createElement('span');
	textSpan.setAttribute('class','list_text');
	textSpan.textContent = inputText;		// 입력내용을 span안에 넣음
	
	let deleteBtn = document.createElement('button');
	deleteBtn.setAttribute('class','btn_del');
	deleteBtn.classList.add('hide');
	
	// (체크박스 > 텍스트 span > 삭제 버튼 순서대로 입력)
	// <li~><input~><span~></span><button~></button></li> 이런 형태
	listItem.appendChild(chkBox);		//li안에서 내용 뒤에 chkBox 입력
	listItem.appendChild(textSpan);		//li안에서 내용 뒤에 textSpan 입력
	listItem.appendChild(deleteBtn);	//li안에서 내용 뒤에 deleteBtn 입력
	
	document.querySelector('#myList').appendChild(listItem);
	if (document.querySelector('#no_list')){
		document.querySelector('#no_list').style.display = 'none';
		
	}
	document.querySelector('#insertList').value ='';
});
const inputList = document.getElementById('insertList');
inputList.addEventListener('keydown', event => {
	if (event.keyCode === 13){
		buttonAdd.click();
	}
})

myList.addEventListener('change', event => {
	
	if(event.target.type === 'checkbox'){
		const aaa = event.target;		// type이 checkbox 인 것들 지정
		const textSpan = aaa.closest('li').querySelector('.list_text');	// <li> 안에 class가 'list_text'인것
		
		if (aaa.checked){
			textSpan.classList.add('chkCom');		// <span class="list_text chkCom"> class에 문구 추가
		}else{
			textSpan.classList.remove('chkCom');
		}
	}
});

// 버튼에 삭제하는 기능 추가하기
myList.addEventListener('click', event => {
	const deleteButton = event.target.closest('.btn_del');
	if (!deleteButton) return;
	const deleteConfirm = confirm("정말 삭제하시겠습니까?")
	if (deleteConfirm){

		const targetLi = deleteButton.closest('li');
		targetLi.remove();
		
		const reItems = myList.querySelectorAll('li');	//myList에 있는 모든 'li'를 타겟해서 배열?
		if (reItems.length === 1){									//길이가 '1'이면
			document.querySelector('#no_list').style.display = '';	//id='no_list'의 hidden을 지운다
		}
	}
	
});

// 저장 버튼 기능 추가하기
const btnSave = document.getElementById('btn_save');
btnSave.addEventListener('click', () => {
	const saveConfirm = confirm("저장 하시겠습니까?");
	console.log(saveConfirm);
	
});

// 수정 버튼을 이용해서 삭제 버튼 생산했다 지우기
const btnEdit = document.getElementById('btn_edit');
btnEdit.addEventListener('click', () => {

  const delBtns = document.querySelectorAll('.btn_del');
  
  // 각 삭제 버튼에 'hide' 클래스를 넣었다 뺐다 합니다.
  delBtns.forEach(button => {
    button.classList.toggle('hide');
  });
});
