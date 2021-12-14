
export const areaIsTaken = (coordinates, blocks) => {
	const takenArea = blocks.map(block => block.coordinates)
	return Boolean(takenArea.find(area => area.x === coordinates.x && area.y === coordinates.y))
}