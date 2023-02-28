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

  if(screen.width >= 768) {
    var div = document.createElement('div');
    div.innerHTML = '<p>Este site foi projetado para dispositivos móveis. Para uma melhor experiência, utilize em um dispositivo móvel.</p>';
    div.style.backgroundColor = '#F9F9F9';
    div.style.padding = '10px';
    div.style.textAlign = 'center';
    div.style.position = 'fixed';
    div.style.bottom = '0';
    div.style.left = '0';
    div.style.width = '100%';
    document.body.appendChild(div);
  }
  