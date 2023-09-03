export interface AuthorItemProps {
	id: string;
	name: string;
	onAddAuthorClicked?: (id: string) => void;
	onDeleteAuthorClicked?: (id: string) => void;
	withAdd: boolean;
}
