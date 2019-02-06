import React from 'react'
import { shallow } from 'enzyme'
import { Admins } from '../../../client/components/pages/admins/admins'

describe('Admins component', () => {
  let wrapped
  const fetchAdminsMock = jest.fn()
  beforeEach(() => {
    wrapped = shallow(<Admins fetchAdmins={fetchAdminsMock} />)
  })

  it('calls "fetchAdmins on ComponentDidmount()"', () => {
    wrapped.instance().componentDidMount()
    const getFetchAdminsCallcount = fetchAdminsMock.mock.calls.length
    expect(getFetchAdminsCallcount).toBe(1)
  })

  it('calls "renderAdmins()"', () => {
    const spy = jest.spyOn(wrapped.instance(), 'renderAdmins')
    wrapped.instance().forceUpdate()
    expect(spy).toHaveBeenCalled()
  })
})
