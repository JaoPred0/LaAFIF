var home = document.getElementById('home');

// Avaliacao
var sectionAvalicao = document.getElementById('sectionAvalicao');
var divSaudeCardiovascular = document.getElementById('divSaudeCardiovascular')
// ====================================== //
// Navegação Rápida //
// ====================================== //
function navegacaoRapida(menu) {
    if (menu == 'avaliacao') {
        document.location.href = ''
    } else if (menu == 'bateria de teste') {
        document.location.href = ''
    } else if (menu == 'ficha de avalicao') {
        document.location.href = ''
    } else if (menu == 'avalicoes fisica') {
        document.location.href = ''
    } else if (menu == 'outros') {
        document.location.href = ''
    }
}
// ====================================== //
// Avaliação //
// ====================================== //

function avaliacao(menu) {
    if (menu == 'saude cardiovascular') {
        // Aparecer  a seção de avaliação cardiovascular
        home.className = 'desaparecer'
        sectionAvalicao.className = 'aparecer'
        divSaudeCardiovascular.className = 'aparecer'
    } else if (menu == 'saude ossea') {
        document.location.href = ''
    } else if (menu == 'saude musculoesqueletica') {
        document.location.href = ''
    } else if (menu == 'relatorios') {
        document.location.href = ''
    }
}


// Calculos
