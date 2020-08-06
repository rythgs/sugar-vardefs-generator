import React, { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import styled from 'styled-components'

import Pane from './Pane'

type Props = {
  vardefs: string
}

const Wrapper = styled(Pane)`
  overflow: auto;
`

const Preview: FC<Props> = ({ vardefs }) => (
  <Wrapper>
    <SyntaxHighlighter
      language="php"
      style={{
        ...monokaiSublime,
        hljs: {
          ...monokaiSublime.hljs,
          background: 'transparent',
          padding: '1rem',
          margin: 0,
        },
      }}
    >
      {vardefs}
    </SyntaxHighlighter>
  </Wrapper>
)

export default Preview
