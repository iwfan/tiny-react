const createNativeElement = (tagName) => {}

export const createElement = (type, attributes, ...children) => {
  let node
  if (typeof type === 'string') node = document.createElement(type)

  if (attributes) {
    for (let [key, value] of Object.entries(attributes)) {
      if (key === 'className') key = 'class'
      node.setAttribute(key, String(value))
    }
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }

    node.appendChild(child)
  })

  return node
}

export const render = (vdom, target) => {
  target.appendChild(vdom)
}

const React = {
  createElement,
  render,
}

export default React
