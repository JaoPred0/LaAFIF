function display(id) {
    const cadastro = document.getElementById("cadastro");
    const sucesso = document.getElementById("sucesso");
    const login = document.getElementById("login");
    const menu = document.getElementById("menu");

    menu.className = 'desaparecer';
    cadastro.className = 'desaparecer';
    sucesso.className = 'desaparecer';
    login.className = 'desaparecer';

    if (id === 0) {
        menu.className = 'aparecer';
    } else if (id === 1) {
        cadastro.className = 'aparecer';
    } else if (id === 2) {
        login.className = 'aparecer';
    } else if (id === 3) {
        sucesso.className = 'aparecer';
    }
}

function togglePassword(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
}

// Função para salvar o cadastro no localStorage
function cadastro() {
    const nomeCompleto = document.getElementById('new_nome_completo').value;
    const usuario = document.getElementById('new_usuario').value;
    const senha = document.getElementById('new_senha').value;
    const email = document.getElementById('new_email').value;
    const sexo = document.getElementById('sexo').value;
    const modalidade = document.getElementById('modalidade').value;

    // Verifica se o nome de usuário e o email já existem
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let usuarioExistente = usuarios.find(u => u.usuario === usuario);
    let emailExistente = usuarios.find(u => u.email === email);

    // Mostra erro se o nome de usuário ou e-mail já estiverem cadastrados
    if (usuarioExistente) {
        document.getElementById('erro_newUsuario').classList.add('aparecer');
        return;
    } else {
        document.getElementById('erro_newUsuario').classList.remove('aparecer');
    }

    if (emailExistente) {
        document.getElementById('erro_newEmail').classList.add('aparecer');
        return;
    } else {
        document.getElementById('erro_newEmail').classList.remove('aparecer');
    }

    // Validações adicionais para senha
    const senhaValida = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(senha);

    if (!senhaValida) {
        document.getElementById('erro_newSenha').classList.add('aparecer');
        return;
    } else {
        document.getElementById('erro_newSenha').classList.remove('aparecer');
    }

    // Adiciona o novo usuário ao array de usuários e salva no localStorage
    const novoUsuario = {
        nomeCompleto: nomeCompleto,
        usuario: usuario,
        senha: senha,
        email: email,
        sexo: sexo,
        modalidade: modalidade
    };

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função de login
function login() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o nome de usuário/email e senha estão corretos
    let usuarioValido = usuarios.find(u => (u.usuario === usuario || u.email === usuario) && u.senha === senha);

    if (!usuarioValido) {
        document.getElementById('erro').classList.add('aparecer');
    } else {
        document.getElementById('erro').classList.remove('aparecer');
        // Exibe a tela de sucesso
        display(3);

        // Redireciona para a página home.html após 1.5 segundos
        setTimeout(function () {
            window.location.href = 'home.html';
        }, 1500);
    }
}
