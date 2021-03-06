window.log = console.log.bind(console);

function $(expr, context) {
  return (context || document).querySelector(expr);
}

function $$(expr, context) {
  return [].slice.call((context || document).querySelectorAll(expr), 0);
}

function prepend(element, into) {
  if (element && into)
  into.insertBefore(element, into.firstChild);
}

let info = $('.toggles-info'),
inputs = $$('.toggle input');

function showInfo(styledElement) {
  let div = document.createElement('div'),
  str = '';
  inputs.forEach(input => {
    str += input.checked ? '<span on> on </span> ' : '<span off> off </span>';
  });

  if (styledElement) {
    str += `<span click>click: ${styledElement.innerHTML}</span>`;
  }

  div.innerHTML = str;
  prepend(div, info);
}

function toggle(element, event) {
  showInfo(element.nextElementSibling);
}

showInfo();