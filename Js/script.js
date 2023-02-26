function Login() {
    const nomeUsuarioCorreto = "Kauany";
    const senhaCorreta = "01032019";
    
    const nomeUsuarioInserido = document.getElementById("username").value;
    const senhaInserida = document.getElementById("password").value;
    
    if (nomeUsuarioInserido === nomeUsuarioCorreto && senhaInserida === senhaCorreta) {
      window.location.href = "pg1.html";
    } else {
      alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
  }
  
  document.getElementById("btnEntrar").addEventListener("click", Login);


  