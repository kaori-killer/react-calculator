import {Calculator} from '../utils/Calculator';

type ResultButtonProps = {
	value: string;
	firstNumber: number;
	secondNumber: number;
	operator: string;
	setResultNumber: (value: string) => void;
	setFirstNumber: (value: string) => void;
	setSecondNumber: (value: string) => void;
	setOperator: (value: string) => void;
};

export default function EqualSignButton({
	value,
	firstNumber,
	secondNumber,
	operator,
	setResultNumber,
	setFirstNumber,
	setSecondNumber,
	setOperator,
}: ResultButtonProps) {
	const handleClickEqualSign = () => {
		let calculatedResult = 0;
		const calculator = new Calculator();

		switch (operator) {
			case '+':
				calculatedResult = calculator.sum(firstNumber, secondNumber);
				break;
			case '-':
				calculatedResult = calculator.subtract(firstNumber, secondNumber);
				break;
			case 'X':
				calculatedResult = calculator.multiply(firstNumber, secondNumber);
				break;
			case '/':
				calculatedResult = calculator.divide(firstNumber, secondNumber);
				break;
			default:
				break;
		}

		setResultNumber(String(calculatedResult));
		setFirstNumber('');
		setSecondNumber('');
		setOperator('');
	};

	return (
		<button className='operation' onClick={handleClickEqualSign}>
			{value}
		</button>
	);
}
