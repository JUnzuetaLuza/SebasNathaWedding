document.addEventListener('DOMContentLoaded', () => {

  const links = {
    ceremonia: 'https://www.google.com/maps/place/Immaculate+Heart+of+Mary+Church/@-12.0868028,-77.0689703,20.75z/data=!4m6!3m5!1s0x9105c9081c067e7b:0x52659c43dea613a!8m2!3d-12.086785!4d-77.0688923!16s%2Fg%2F12qgcdzlv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D',
    recepcion: 'https://www.google.com/maps/place/Villa+Illariy/@-12.2147915,-76.8710156,17z/data=!3m1!4b1!4m6!3m5!1s0x9105bdcb3727c56f:0xdb806d221294116f!8m2!3d-12.2147915!4d-76.8684407!16s%2Fg%2F11fl90g1l9?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D',
    asistencia: 'https://w.app/hlconfirmacionasistencia'
  };

  Object.keys(links).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener('click', () => {
      window.open(links[id], '_blank', 'noopener,noreferrer');
    });
  });

});