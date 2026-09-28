
let cnt = 0;
let selectValue = 0;
const headerButton = document.getElementById("headerChange")
headerButton.addEventListener("click", function(){
		
	const selectRadio = document.querySelector('input[name=level_chose]:checked');	// 인풋 라디오타입에서 체크된 value값 가져오기
	if (!selectRadio){
		alert("난이도를 선택해주세요");
		return;
	}
	selectValue = parseInt(selectRadio.value);
	
	const header = document.getElementById("headerDeafault")
	header.innerHTML = `
		<p>남은 횟수: <span id="countNum">${selectValue}</span></p>
		<div id="result"></div>
		<label for="bingo">정답입력</label>
		<input id="bingo" type="text" inputmode="numeric" placeholder="4자 입력" maxlength="4">
		<button id="result_bingo">확인</button>
	`;

	const inputList = document.getElementById('bingo');
	const buttonEnter = document.getElementById('result_bingo');
	const countNumSpan = document.getElementById('countNum');

	buttonEnter.addEventListener('click', function(){
		
//		console.log("작동중")
		const inputValue = inputList.value.trim();

		if (inputValue.length !== 4) {
			alert("숫자 4자리를 입력해주세요.")
			inputList.value = '';
			return;
		}
		console.log(inputValue[0])
		console.log(inputValue[1])
		console.log(inputValue[2])
		console.log(inputValue[3])
		
		for(let i = 0; 0 < inputValue.length; i++){
			for(let j = 0; 0 < inputValue.length; j++){
				if(inputValue[i] === inputValue[j]){
					alert("중복된 숫자를 입력했습니다.")
					return;
				}
			}
		}

		cnt++;
		
		const remaining = selectValue - cnt;
		countNumSpan.textContent = remaining;
		
		
		if(remaining <= 0){
			alert("게임 오버!")
		}
		
		inputList.value = '';
		inputList.focus();
		
	});
	
	inputList.addEventListener('keydown', event => {
		if (event.keyCode === 13){
			buttonEnter.click();
		}
	});

});



