export interface ButtonProps {
	buttonText: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}
