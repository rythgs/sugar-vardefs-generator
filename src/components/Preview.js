import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Prism from 'prismjs'

import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import '../highlight.css'

import Pane from './Pane'

const Preview = ({ text }) => {
  useEffect(() => Prism.highlightAll())
  return (
    <Wrapper>
      <pre>
        <code className="language-php" dangerouslySetInnerHTML={{ __html: text }} />
      </pre>
    </Wrapper>
  )
}
Preview.propTypes = {
  text: PropTypes.string
}

export default Preview

const Wrapper = styled(Pane)`
  overflow: auto;
`
