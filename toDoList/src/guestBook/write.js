console.log('테스트');
const form = document.querySelector('.write_text');
const tableBody = document.querySelector('.guestbook_tbody')

form.addEventListener('submit',function(e){
	//새로고침 방지
	e.preventDefault();

	const nameInput = document.getElementById('guestName');
	const contentInput = document.getElementById('guestContent');

	const nameValue = nameInput.value.trim();
	const contentValue = contentInput.value.trim();

	//빈칸 검사
	if (nameValue === '') {
		alert('방문자 이름을 입력해주세요!');
		nameInput.focus();
		return;
	}

	if (contentValue === '') {
		alert('방명록 내용을 입력해주세요!');
		contentInput.focus();
		return;
	}

	// tableBody(.guestbook_tbody)에서 <tr>문의 제일 처음자손에 적혀있는 글은
	// 마지막 숫자이므로 거기에 +1 하여 차례대로 숫자를 증가시키고 입력함
	const firstRow = tableBody.querySelector('tr');
	let newId = 1;
	if (firstRow) {
		newId = parseInt(firstRow.children[0].textContent) + 1;
	}

	// 현재 날짜/시간 생성 (YYYY-MM-DD HH:MM)
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	
	const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

	// <tr></tr> 생성후 안에 만들어놓은 변수들 순서대로 입력
	const newRow = document.createElement('tr');
	newRow.innerHTML = `
		<td>${newId}</td>
		<td>${nameValue}</td>
		<td>${contentValue}</td>
		<td>${formattedDate}</td>
	`;

	// tableBody 앞에 'newRow'를 추가할건데 tableBody의 첫번째 자식 
	tableBody.insertBefore(newRow, tableBody.firstChild);

	// 입력창 초기화
	form.reset();
	
})

