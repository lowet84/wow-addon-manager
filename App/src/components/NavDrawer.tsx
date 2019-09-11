import * as React from 'react'
import { Drawer } from '@material-ui/core'
import { getShowDrawer, setShowDrawer } from '../store/navigationReducer'
import { useSelector, useDispatch } from 'react-redux'

export const NavDrawer = () => {
  const showDrawer = useSelector(getShowDrawer)
  const dispatch = useDispatch()

  return (
    <Drawer open={showDrawer} onClose={() => dispatch(setShowDrawer(false))}>
      Drawer
    </Drawer>
  )
}
