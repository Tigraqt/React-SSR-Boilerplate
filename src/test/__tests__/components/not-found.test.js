import React from 'react'
import { shallow } from 'enzyme'
import { NotFound } from '../../../client/components/pages/not-found/not-found'

describe('NotFound component', () => {
  let wrapped
  beforeEach(() => {
    wrapped = shallow(<NotFound />)
  })
  it('renders without error', () => {
    expect(wrapped).toBeTruthy()
  })
  it('has a not nound message', () => {
    expect(wrapped.find('h1').text()).toEqual('Opss, Not Found')
  })
})
