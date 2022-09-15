export const calculateShards = (count, level) => {
	if(level <= 0) {
		return 0;
	}
	return count*3**(level-1)*4;
}