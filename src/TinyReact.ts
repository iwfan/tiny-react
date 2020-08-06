type NodeType = string | object
type NodeAttribute = {
  [key: string]: string
}
type ChildrenNodes = Array<{}>

export const createElement = (
  type: NodeType,
  attributes: NodeAttribute,
  ...children: ChildrenNodes
) => {
  if (typeof type === 'string') return document.createElement(type)
}

export const render = () => {
  console.log(1)
}

const React = {
  createElement,
  render,
}

export default React
