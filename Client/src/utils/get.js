export async function user() {
  try {
    const response = await fetch("https://login-production-c7e0.up.railway.app/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function students() {
  try {
    const response = await fetch("https://login-production-c7e0.up.railway.app/students");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
