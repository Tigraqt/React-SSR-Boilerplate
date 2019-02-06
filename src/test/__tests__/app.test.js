import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../../client/app'
import Header from '../../client/components/header/header'
import Routes from '../../client/routes'

describe('App component', () => {
  let wrapped
  const route = Routes[0]
  beforeEach(() => {
    wrapped = shallow(<App route={route} />)
  })
  it('renders without error', () => {
    expect(wrapped).toBeTruthy()
  })
  it('renders a Header component', () => {
    expect(wrapped.find(Header).length).toEqual(1)
  })
  it('renders routes', () => {
    expect(wrapped.find('.content').children().exists()).toEqual(true)
  })
})
