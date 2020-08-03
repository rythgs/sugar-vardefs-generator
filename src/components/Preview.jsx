// import '../highlight.css'

// import Prism from 'prismjs'
// import loadLanguages from 'prismjs/components'
import PropTypes from 'prop-types'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import styled from 'styled-components'

import Pane from './Pane'

// loadLanguages(['php'])

const Preview = ({ text }) => {
  // useEffect(() => Prism.highlightAll())
  return (
    <Wrapper>
      <SyntaxHighlighter language="php">{text}</SyntaxHighlighter>
    </Wrapper>
  )
}
Preview.propTypes = {
  text: PropTypes.string,
}

export default Preview

const Wrapper = styled(Pane)`
  overflow: auto;
`
