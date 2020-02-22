
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (arguments.length === 0) return [];
	if (matrix.length === 0) return [];
	
	matrix.forEach((arr, index) => {
		if (index % 2 !== 0) {
			arr.reverse();
		}
	});
	return [].concat(...matrix);
}
