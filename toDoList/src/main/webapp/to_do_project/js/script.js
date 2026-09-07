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
	deleteBtn.classList.add('hide');		// class에 hide 추가하기 (class="btn_del hide")
	
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
	updateMeter();
});
const inputList = document.getElementById('insertList');
inputList.addEventListener('keydown', event => {
	if (event.keyCode === 13){
		buttonAdd.click();
	}
});

myList.addEventListener('change', event => {
	
	if(event.target.type === 'checkbox'){
		const aaa = event.target;		// type이 checkbox 인 것들 지정
		const textSpan = aaa.closest('li').querySelector('.list_text');	// <li> 안에 class가 'list_text'인것
		
		if (aaa.checked){
			textSpan.classList.add('chkCom');		// <span class="list_text chkCom"> class에 문구 추가
		}else{
			textSpan.classList.remove('chkCom');
		}
		updateMeter();
	}
});

// 버튼에 삭제하는 기능 추가하기
myList.addEventListener('click', event => {
	const deleteButton = event.target.closest('.btn_del');
	if (!deleteButton) return;
	const deleteConfirm = confirm("정말 삭제하시겠습니까?");
	if (deleteConfirm){

		const targetLi = deleteButton.closest('li');
		targetLi.remove();
		
		const reItems = myList.querySelectorAll('li');	//myList에 있는 모든 'li'를 타겟해서 배열?
		if (reItems.length === 1){									//길이가 '1'이면
			document.querySelector('#no_list').style.display = '';	//id='no_list'의 hidden을 지운다
		}
		updateMeter();
	}
});
// 전체 삭제하는 버튼 추가하기
const buttonAlldel = document.getElementById('btn_alldel')
buttonAlldel.addEventListener('click', () => {

	const allItems = document.querySelectorAll('#myList li:not(#no_list)')	// id 'myList'의 자식 li중에서 'no_list'를 제외한 모든것
	
	if (allItems.length === 0){												// list가 no_list 1개뿐이라면 에러 알람뜨게하기
		alert("삭제할 리스트가 없습니다.");
		return;
	}
	
	const deleteConfirm = confirm("정말로 ❗전부❗ 삭제하시겠습니까?");
	
	if (deleteConfirm){
		for (let i = 0; i < allItems.length; i++){
			let item = allItems[i];
			item.remove();
		}
		document.querySelector('#no_list').style.display = '';
		updateMeter();
	}
});

// 저장 버튼 기능 추가하기
const btnSave = document.getElementById('btn_save');
btnSave.addEventListener('click', () => {
	const saveConfirm = confirm("저장 하시겠습니까?");
	
	if(saveConfirm){
		alert("저장이 완료되었습니다.")
		return;
	}
});

// 수정 버튼을 이용해서 삭제 버튼 생산했다 지우기
const btnEdit = document.getElementById('btn_edit');
btnEdit.addEventListener('click', () => {

  const delBtns = document.querySelectorAll('.btn_del');
  const allDelBtn = document.getElementById('btn_alldel');
  
  delBtns.forEach(button => {							// 각 삭제 버튼에 'hide' 클래스를 넣었다 뺐다 합니다.
    button.classList.toggle('hide');
  });
  if(allDelBtn) {
	allDelBtn.classList.toggle('hide');
  }
});

function updateMeter() {
	const meter = document.getElementById('todo_meter');
	const meterText = document.getElementById('meter_text');
	
	const allItems = document.querySelectorAll('#myList li:not(#no_list)')
	const totalCnt = allItems.length;
	
	const checkedCnt = document.querySelectorAll('#myList input[type="checkbox"]:checked').length;
	
	if (totalCnt === 0) {
		meter.max = 1;
		meter.value = 0;
		meter.optimum = 0;
		meterText.textContent = '0 / 0';
	} else {
		meter.max = totalCnt;
		meter.low = totalCnt/3;
		meter.high = (totalCnt/3)*2;
		meter.value = checkedCnt;
		meter.optimum = totalCnt;
		meterText.textContent = `${checkedCnt} / ${totalCnt}`;
	}
}
// 현재날짜 만들기
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

const formmatDate = `📆 ${year}년 ${month}월 ${date}일`;

document.getElementById('today_date').innerText = formmatDate;

//배경 변경하는 버튼
const bgList = ['../images/usagi3.jpg','../images/usagi1.jpg','../images/usagi2.jpg']
let bgNum = 0;

document.getElementById('btn_change').addEventListener('click',() => {
	bgNum = (bgNum + 1) %bgList.length;
	
	const hederRight = document.querySelector('.header_right');
	hederRight.style.backgroundImage = `url('${bgList[bgNum]}')`;
})

