export interface TextAreaProps {
	value: string;
	onChange: (value: string) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
	inputId?: string;
	labelText?: string;
	error?: string;
	rows?: number;
	cols?: number;
}
