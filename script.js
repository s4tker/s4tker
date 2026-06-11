const ContenedorAlternador = document.getElementById('ContenedorAlternador');
const IconoTema = document.getElementById('IconoTema');
const RaizDelDocumento = document.documentElement;
const PanelInformacion = document.getElementById('PanelInformacion');
const BotonPanel = document.getElementById('BotonPanel');

ContenedorAlternador.addEventListener('click', () => {
    const TemaActual = RaizDelDocumento.getAttribute('data-theme');
    
    if (TemaActual === 'Dark') {
        RaizDelDocumento.setAttribute('data-theme', 'Light');
        IconoTema.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('PreferenciaModo', 'Light');
    } else {
        RaizDelDocumento.setAttribute('data-theme', 'Dark');
        IconoTema.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('PreferenciaModo', 'Dark');
    }
});

const ModoGuardado = localStorage.getItem('PreferenciaModo');
if (ModoGuardado === 'Light') {
    RaizDelDocumento.setAttribute('data-theme', 'Light');
    IconoTema.classList.replace('fa-moon', 'fa-sun');
}

BotonPanel.addEventListener('click', () => {
    const PanelOculto = PanelInformacion.classList.toggle('PanelOculto');
    const IconoPanel = BotonPanel.querySelector('i');

    BotonPanel.setAttribute('aria-expanded', String(!PanelOculto));

    if (PanelOculto) {
        IconoPanel.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        IconoPanel.classList.replace('fa-eye', 'fa-eye-slash');
    }
});
