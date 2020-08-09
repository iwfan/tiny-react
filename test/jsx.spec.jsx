import React from '../src/TinyReact'
import { queryByTestId, queryByText } from '@testing-library/dom'

describe('React.createElement', () => {
  const root = document.createElement('div')
  root.id = 'root'
  beforeAll(() => {
    document.body.innerHTML = ''
    document.body.appendChild(root)
  })

  beforeEach(() => {
    root.innerHTML = ''
  })

  it('should render empty h1 tag when the given jsx is the following dom', () => {
    const dom = <h1 />

    React.render(dom, root)

    const target = root.querySelector('h1')

    expect(target).toBeTruthy()
  })

  it('should render empty h1 tag with id and class when the given jsx is the following dom', () => {
    const dom = <h1 id="heading_one" className="heading_one" data-testid="h1" />
    React.render(dom, root)

    const { id, className } = queryByTestId(root, 'h1')

    expect(id).toBe('heading_one')
    expect(className).toBe('heading_one')
  })

  it('should render h1 tag with attributes and textContent when given jsx is the following dom', () => {
    const dom = <h1 hidden={true}>This is H1 Tag</h1>

    React.render(dom, root)

    const result = queryByText(root, /this is h1 tag/i)

    expect(result).toBeTruthy()
  })

  it('should render a group of native nodes when given jsx is the following dom', () => {
    const dom = (
      <div data-testid={'wrapper'}>
        <h1>Title</h1>
        <p>paragraph</p>
        <span>author</span>
      </div>
    )
    React.render(dom, root)

    expect(root.firstElementChild).toMatchSnapshot()
  })
})
