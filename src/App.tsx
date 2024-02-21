// - [X] 2개의 숫자에 대해 덧셈이 가능하다.
// - [X] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [X] 2개의 숫자에 대해 곱셈이 가능하다.
// - [X] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [X] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [X] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [X] 계산 결과를 표현할 때 소수점 이하는 버림한다.
// - [X] 연산의 결과값이 `Infinity`일 경우 `오류`라는 문자열을 보여준다. (아이폰 참고) <- 어떤 값을 0으로 나눌 때
// - [X] 0이 자릿수의 맨 앞에 오는 경우, 0을 뒤에 연속으로 추가할 수 없다. === 현재 아무 값도 없는데 0이면 넣지 않는다.
// - [X] 연산자를 입력하지 않고 결과 버튼을 누르면 값이 그대로 있다.

import {useState} from 'react';

import Digits from './components/Digits';
import Modifiers from './components/Modifiers';
import Operations from './components/Operations';

function App() {
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	const [operator, setOperator] = useState<string>('');
	const [resultNubmber, setResultNumber] = useState<string>('');

	const equation = firstNumber + operator + secondNumber;
	const displayResult = equation || resultNubmber || '0';

	const handleClickAc = () => {
		setResultNumber('0');
		setFirstNumber('');
		setSecondNumber('');
		setOperator('');
	};

	return (
		<div id='app'>
			<div className='calculator'>
				<h1 id='total'>
					{displayResult}
				</h1>
				<Digits
					setFirstNumber={setFirstNumber}
					firstNumber={firstNumber}
					setSecondNumber={setSecondNumber}
					secondNumber={secondNumber}
					operator={operator}
				/>
				<Modifiers onClickAc={handleClickAc} />
				<Operations
					firstNumber={firstNumber}
					secondNumber={secondNumber}
					operator={operator}
					setResultNumber={setResultNumber}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
					setOperator={setOperator}
				/>
			</div>
		</div>
	);
}

export default App;
