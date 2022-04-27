export default function getCurrentTime() {
  const now = new Date();
  return now.getMinutes() * 60 + now.getSeconds();
}
