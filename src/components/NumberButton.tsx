type NumberButtonProps = {
	setFirstNumber: (value: string) => void;
	firstNumber: string;
	setSecondNumber: (value: string) => void;
	secondNumber: string;
	operator: string;
	value: number;
};

export default function NumberButton({
	setFirstNumber,
	firstNumber,
	setSecondNumber,
	secondNumber,
	operator,
	value,
}: NumberButtonProps) {
	const alertMessage = '숫자는 세 자리까지만 입력 가능합니다!';
	const isNotValidNumberLength = (number: string) => (number.length > 2);
	const isNotValidZero = (preNumber: string, number: string) => {
		if (number === '0') {
			return preNumber === '0';
		}

		return false;
	};

	const handleClickNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
		const {value: number} = e.currentTarget;

		if (!operator) {
			if (isNotValidNumberLength(firstNumber)) {
				alert(alertMessage);
				return;
			}

			if (isNotValidZero(firstNumber, number)) {
				return;
			}

			setFirstNumber(firstNumber + number);
		}

		if (operator) {
			if (isNotValidNumberLength(secondNumber)) {
				alert(alertMessage);
				return;
			}

			if (isNotValidZero(secondNumber, number)) {
				return;
			}

			setSecondNumber(secondNumber + number);
		}
	};

	return (
		<button
			className='digit'
			onClick={handleClickNumber}
			value={value}
		>
			{value}
		</button>
	);
}
