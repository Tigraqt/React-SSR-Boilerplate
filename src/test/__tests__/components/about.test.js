import React from 'react'
import { shallow } from 'enzyme'
import { About } from '../../../client/components/pages/about/about'

describe('About component', () => {
  let wrapped
  beforeEach(() => {
    wrapped = shallow(<About />)
  })
  it('renders without error', () => {
    expect(wrapped).toBeTruthy()
  })
})
