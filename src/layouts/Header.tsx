import {
  GithubOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
} from '@ant-design/icons'
import { Drawer, Grid, Layout } from 'antd'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Actions, Help, Logo, SocialLinks } from '~/components'

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
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }

  const linkList = [
    {
      name: 'help',
      url: '#',
      content: <QuestionCircleOutlined style={{ margin: 0 }} />,
      onClick: () => setOpen(true),
    },
    {
      name: 'github',
      url: 'https://github.com/rythgs/sugar-vardefs-generator',
      content: <GithubOutlined style={{ margin: 0 }} />,
    },
  ]

  return (
    <Wrapper>
      <Logo>
        <SmileOutlined style={{ marginRight: '0.5rem' }} />
        {!xs && `Sugar Vardefs Generator`}
      </Logo>
      <Actions text={vardefs} style={{ float: 'left' }} />
      <SocialLinks list={linkList} style={{ float: 'right' }} />
      <Drawer
        title="Help"
        placement="top"
        closable
        visible={open}
        onClose={onClose}
      >
        <Help />
      </Drawer>
    </Wrapper>
  )
}

export default Header
