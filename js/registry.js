// Registre des modules : chaque fichier de content/ appelle registerModule({...}).
window.MODULES = [];
window.registerModule = function (m) {
  if (!m || !m.id) return;
  const i = window.MODULES.findIndex(x => x.id === m.id);
  if (i >= 0) window.MODULES[i] = m; else window.MODULES.push(m);
};
