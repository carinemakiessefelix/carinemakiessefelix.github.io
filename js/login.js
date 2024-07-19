// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!'); // Exiba uma mensagem ou redirecione para outra página
	   document.getElementById('username').value = ''; // Limpa o campo de usuário
        document.getElementById('password').value = ''; // Limpa o campo de senha
   
    } else {
        alert('Nome ou senha incorreta. Tente novamente.');

        document.getElementById('username').value = ''; // Limpa o campo de usuário
        document.getElementById('password').value = ''; // Limpa o campo de senha
    }
});
