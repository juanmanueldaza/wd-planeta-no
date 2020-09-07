let gatos = document.getElementById('gatos');
let loguito = document.getElementById('loguito');
let hamburger = document.getElementById('hamburger');
let cross = document.getElementById('cross');

hamburger.onclick = () => {
    gatos.style.width = '20%';
    gatos.style.marginTop = '20%';
    loguito.style.display = 'block';

}

cross.onclick = () => {
    gatos.style.width = '100%';
    gatos.style.marginTop = '0';
    loguito.style.display = 'none';
}
