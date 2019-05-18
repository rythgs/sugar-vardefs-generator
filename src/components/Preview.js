import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Prism from 'prismjs'

import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import '../highlight.css'

import Pane from './Pane'

class Preview extends Component {
  render() {
    return (
      <Wrapper>
        <pre>
          <code className="language-php" dangerouslySetInnerHTML={{ __html: this.props.text }} />
        </pre>
      </Wrapper>
    )
  }

  componentDidUpdate() {
    Prism.highlightAll()
  }
}

Preview.propTypes = {
  text: PropTypes.string
}

export default Preview

const Wrapper = styled(Pane)`
  overflow: auto;
`
