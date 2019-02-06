import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'
import storeFactory from '../../testUtils'
import authHOC from '../../../client/components/hocs/require-auth'

describe('Authentication HOC', () => {
  let wrapped
  const ExampleComp = () => <div />
  const AuthenticationComponent = authHOC(ExampleComp)

  it('renders Redirect when user NOT autheticated after 3s', done => {
    const initialState = { auth: false }
    const store = storeFactory(initialState)
    wrapped = shallow(<AuthenticationComponent store={store} />).dive()
    setTimeout(() => {
      expect(wrapped.find(Redirect)).toHaveLength(1)
      done()
    }, 3000)
  })
  it('renders Comp when user autheticated', () => {
    const initialState = { auth: true }
    const store = storeFactory(initialState)
    wrapped = shallow(<AuthenticationComponent store={store} />).dive()
    expect(wrapped.find(ExampleComp)).toHaveLength(1)
  })
})
