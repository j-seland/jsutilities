export default function elf(type, attrs={}) {
  let el = document.createElement(type);
  for (let attr in attrs) {
    let value = attrs[attr];
    if (attr.slice(0, 4) == 'data') {
      let data = `data-${attr.slice(4)}`;
      el.setAttribute(data, value)
    } else if (attr == 'innerText') {
      el.innerText = value
    } else {
      el.setAttribute(attr, value)
    }
  }
  return el
}
