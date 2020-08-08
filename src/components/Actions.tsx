import { CopyOutlined, SaveOutlined } from '@ant-design/icons'
import { Menu, message } from 'antd'
import copy from 'copy-to-clipboard'
import download from 'downloadjs'
import React, { FC } from 'react'
import styled from 'styled-components'

const MenuItem = styled(Menu.Item)`
  border-bottom: none;
`

type Props = {
  text: string
  style?: React.CSSProperties
}

const Actions: FC<Props> = ({ text, style }) => {
  const handleActionClick = (key: React.ReactText) => {
    switch (key) {
      case 'copy':
        if (text && copy(text))
          message.success('クリップボードにコピーしました')
        break
      case 'save':
        if (text) {
          download(`<?php\n\n${text}`, 'vardefs.php', 'text/plain')
        }
        break
      default:
        break
    }
  }

  return (
    <Menu
      theme="light"
      mode="horizontal"
      selectable={false}
      onClick={({ key }) => handleActionClick(key)}
      style={style}
    >
      <MenuItem key="copy" icon={<CopyOutlined />} disabled={!text}>
        Copy
      </MenuItem>
      <MenuItem key="save" icon={<SaveOutlined />} disabled={!text}>
        Save
      </MenuItem>
    </Menu>
  )
}

export default Actions
