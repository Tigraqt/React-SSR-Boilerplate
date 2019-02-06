import React from 'react'
import { shallow } from 'enzyme'

import { Header } from '../../../client/components/header/header'

describe('Header component', () => {
  let wrapped
  beforeEach(() => {
    wrapped = shallow(<Header />)
  })
  it('renders without error', () => {
    expect(wrapped).toBeTruthy()
  })
  it('has 5 menu item inside nav', () => {
    expect(wrapped.find('nav .item').length).toEqual(5)
  })
})

describe('Header component WITH authentication', () => {
  let wrapped
  beforeEach(() => {
    wrapped = shallow(<Header auth />)
  })
  it('renders logout item inside nav', () => {
    expect(wrapped.find('[data-test="auth-name"]').text()).toEqual('Logout')
    expect(wrapped.find('[href="/api/logout"]').exists()).toEqual(true)
  })
})
