export interface InputProps {
	value: string;
	onChange: (value: string) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	inputId?: string;
	labelText?: string;
}
