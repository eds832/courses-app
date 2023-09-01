export interface LoginProps {
	onLogin: (token: string, name: string) => Promise<[boolean, string?]>;
}
