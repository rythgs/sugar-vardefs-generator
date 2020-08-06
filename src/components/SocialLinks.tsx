import { GithubOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { FC } from 'react'

type Props = {
  style?: React.CSSProperties
}

const SocialLinks: FC<Props> = ({ style }) => (
  <Menu theme="light" mode="horizontal" selectable={false} style={style}>
    <Menu.Item>
      <a href="https://github.com/rythgs/sugar-vardefs-generator">
        <GithubOutlined style={{ margin: '0 1rem' }} />
      </a>
    </Menu.Item>
  </Menu>
)

export default SocialLinks
