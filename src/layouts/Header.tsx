import { Grid, Layout } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'

import Actions from '~/components/Actions'
import Logo from '~/components/Logo'
import SocialLinks from '~/components/SocialLinks'

const Wrapper = styled(Layout.Header)`
  background: #fff;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 66px;
  padding: 0 1rem;
`

const { useBreakpoint } = Grid

const Header: FC<{ vardefs: string }> = ({ vardefs }) => {
  const { xs } = useBreakpoint()
  return (
    <Wrapper>
      <Logo>{xs ? '🍺' : '🍺　Sugar Vardefs Generator'}</Logo>
      <Actions text={vardefs} style={{ float: 'left' }} />
      <SocialLinks style={{ float: 'right' }} />
    </Wrapper>
  )
}

export default Header
