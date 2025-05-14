export default function Home() {
  async function login() {
    const res = await fetch("http://3.95.204.116/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: "admin", pass: "1234" })
    });
    const data = await res.json();
    alert("Login: " + JSON.stringify(data));
  }

  async function getProducts() {
    const res = await fetch("http://3.95.204.116/products");
    const data = await res.json();
    alert("Productos: " + JSON.stringify(data));
  }

  async function notify() {
    const res = await fetch("http://3.95.204.116/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "¡Hola desde el frontend!" })
    });
    const data = await res.json();
    alert("Notificación: " + JSON.stringify(data));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>App distribuida</h1>
      <button onClick={login}>Iniciar sesión</button>
      <button onClick={getProducts}>Ver productos</button>
      <button onClick={notify}>Enviar notificación</button>
    </div>
  );
}
