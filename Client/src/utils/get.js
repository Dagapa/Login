export async function user() {
  try {
<<<<<<< HEAD
    const response = await fetch("https://login-production-c7e0.up.railway.app/users");
=======
    const response = await fetch("login-production-272a.up.railway.app/users");
>>>>>>> 2fff7c9cb8871e816e3122cc3a76d92962386625
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function students() {
  try {
<<<<<<< HEAD
    const response = await fetch("https://login-production-c7e0.up.railway.app/students");
=======
    const response = await fetch("login-production-272a.up.railway.app/students");
>>>>>>> 2fff7c9cb8871e816e3122cc3a76d92962386625
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
