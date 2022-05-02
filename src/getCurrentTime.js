export default function getCurrentTime() {
	const now = new Date();
	return (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
}
