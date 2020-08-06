import { Grid } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  small: boolean | undefined
}

const { useBreakpoint } = Grid

const Child = styled.div<Props>`
  width: 100%;
  height: ${({ small }) =>
    small ? `calc(50vh - 33px)` : `calc(100vh - 66px)`};
`

const Pane: FC = (props) => {
  const { xs } = useBreakpoint()
  return <Child small={xs} {...props} />
}

export default Pane
