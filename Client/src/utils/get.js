export async function user() {
  try {

    const response = await fetch("login-production-272a.up.railway.app/users");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function students() {
  try {

    const response = await fetch("login-production-272a.up.railway.app/students");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
