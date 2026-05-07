(function () {
  var path = window.location.pathname;
  var isJa = path.indexOf('/ja/') !== -1 || /\/ja(\.html)?$/.test(path);

  var href, text;
  if (isJa) {
    href = path.replace('/ja/', '/');
    text = 'English';
  } else {
    var parts = path.split('/');
    var filename = parts[parts.length - 1] || 'index.html';
    var base = parts.slice(0, -1).join('/');
    href = base + '/ja/' + filename;
    text = '日本語';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('#navbarCollapse .navbar-nav');
    if (!nav) return;
    var li = document.createElement('li');
    li.className = 'nav-item';
    var a = document.createElement('a');
    a.className = 'nav-link';
    a.href = href;
    a.textContent = text;
    li.appendChild(a);
    nav.appendChild(li);
  });
})();
