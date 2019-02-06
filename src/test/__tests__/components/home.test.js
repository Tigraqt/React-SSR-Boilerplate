import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../../../client/components/pages/home/home'

describe('Home component', () => {
  let wrapped
  beforeEach(() => {
    wrapped = shallow(<Home />)
  })
  it('renders without error', () => {
    expect(wrapped).toBeTruthy()
  })
})
