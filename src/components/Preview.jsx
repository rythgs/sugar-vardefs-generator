import PropTypes from 'prop-types'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import styled from 'styled-components'

import Pane from './Pane'

const Preview = ({ text }) => (
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
      {text}
    </SyntaxHighlighter>
  </Wrapper>
)

Preview.propTypes = {
  text: PropTypes.string,
}

Preview.defaultProps = {
  text: '',
}

export default Preview

const Wrapper = styled(Pane)`
  overflow: auto;
`
