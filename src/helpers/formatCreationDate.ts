const formatCrationDate = (date: Date) => {
	return (
		(date.getDate() < 10 ? '0' : '') +
		date.getDate() +
		(date.getMonth() < 9 ? '.0' : '.') +
		(date.getMonth() + 1) +
		'.' +
		date.getFullYear()
	);
};

export default formatCrationDate;
