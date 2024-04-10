export default function Header() {
  function redirect(rota: string) {
    if (rota === "login") {
      window.location.href = "/login";
    }
    if (rota === "register") {
      window.location.href = "/register";
    }
  }

  return (
    <div className="flex justify-between p-2 shadow-md items-center">
      <div>
        <h1>Portaria Creche</h1>
      </div>
      <div className="flex gap-3 items-center">
        <button onClick={() => redirect("register")}>Cadastrar</button>
        <button
          onClick={() => redirect("login")}
          className="bg-blue-500 p-1 rounded cursor-pointer hover:bg-blue-400"
        >
          Entrar no Sistema
        </button>
      </div>
    </div>
  );
}
