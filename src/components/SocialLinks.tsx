import React, { FC } from 'react'
import styled from 'styled-components'

type LinkInfo = {
  name: string
  url: string
  content: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

type Props = {
  list: LinkInfo[]
  style?: React.CSSProperties
}

const Nav = styled.nav`
  display: flex;
  & > div {
    padding: 0 1rem;
    cursor: pointer;
  }

  a {
    color: inherit;
  }
`

const SocialLinks: FC<Props> = ({ list, style }) => (
  <Nav style={style}>
    {list.map(({ name, url, content, onClick }) => (
      <div key={name}>
        {onClick ? (
          <div onClick={onClick} aria-hidden="true">
            {content}
          </div>
        ) : (
          <a href={url}>{content}</a>
        )}
      </div>
    ))}
  </Nav>
)

export default SocialLinks
