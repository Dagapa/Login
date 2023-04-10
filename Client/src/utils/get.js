export async function user() {
  try {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
