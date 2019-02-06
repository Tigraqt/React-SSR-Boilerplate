import React from 'react'
import { shallow } from 'enzyme'
import { Users } from '../../../client/components/pages/users/users'

describe('Users component', () => {
  let wrapped
  const fetchUsersMock = jest.fn()
  beforeEach(() => {
    wrapped = shallow(<Users fetchUsers={fetchUsersMock} />)
  })

  it('calls "fetchUsers on ComponentDidmount()"', () => {
    wrapped.instance().componentDidMount()
    const getFetchAdminsCallcount = fetchUsersMock.mock.calls.length
    expect(getFetchAdminsCallcount).toBe(1)
  })

  it('calls "renderUsers()"', () => {
    const spy = jest.spyOn(wrapped.instance(), 'renderUsers')
    wrapped.instance().forceUpdate()
    expect(spy).toHaveBeenCalled()
  })
})
