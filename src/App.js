import React, { Component } from 'react'
import _ from 'lodash'
import Prism from 'prismjs'

import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'

import templates from './templates'

import './App.css'
import './highlight.css'

const SEP = '@'

class App extends Component {
  constructor() {
    super()
    this.state = {
      vardefs: []
    }
  }

  render() {
    const html = Prism.highlight(this.state.vardefs.join(''), Prism.languages.php, 'php')
    return (
      <div className="App">
        <section className="App-header">
          <div>
            <textarea
              className="paste-area"
              placeholder="🍺 This app is vardefs creator. Paste vardef definition!&#13;&#10;<fieldName>@<fieldType>:<required>:<length>:<defaultValue>&#13;&#10;ex. example@varchar:1:30:hoge"
              onInput={({ target: { value } }) => this.generate(value)}
            />
          </div>
          <div className="preview">
            <pre>
              <code className="language-php" dangerouslySetInnerHTML={{ __html: html }} />
            </pre>
          </div>
        </section>
      </div>
    )
  }

  generate(value = '') {
    const list = []
    value.split('\n').forEach(line => {
      const def = line.split(SEP)
      if (def.length !== 2) {
        return
      }

      const fieldName = def[0]
      const fieldDefs = def[1].split(':')

      const [fieldType, required, len, defaultValue, relateModule] = fieldDefs

      switch (fieldType) {
        case 'varchar':
          list.push(this.vardefs(templates.VARCHAR, fieldName, { required, len, defaultValue }))
          break
        case 'phone':
          list.push(this.vardefs(templates.PHONE, fieldName, { required, len, defaultValue }))
          break
        case 'text':
          list.push(this.vardefs(templates.TEXTAREA, fieldName, { required, len, defaultValue }))
          break
        case 'date':
          list.push(this.vardefs(templates.DATE, fieldName, { required }))
          break
        case 'datetime':
          list.push(this.vardefs(templates.DATETIME, fieldName, { required }))
          break
        case 'int':
          list.push(this.vardefs(templates.INT, fieldName, { required, len, defaultValue }))
          break
        case 'enum':
          list.push(this.vardefs(templates.DROPDOWN, fieldName, { required, len, defaultValue }))
          break
        case 'multienum':
          list.push(this.vardefs(templates.MULTISELECT, fieldName, { required, len, defaultValue }))
          break
        case 'radioenum':
          list.push(this.vardefs(templates.RADIO, fieldName, { required, len, defaultValue }))
          break
        case 'currency':
          list.push(this.vardefs(templates.CURRENCY, fieldName, { required, len, defaultValue }))
          break
        case 'relate':
          list.push(this.vardefs(templates.RELATE, fieldName, { required, relateModule }))
          break
        case 'bool':
          list.push(this.vardefs(templates.BOOL, fieldName, { required, defaultValue }))
          break
        default:
          console.log(`found unknown field type! => ${fieldType}`)
          break
      }
    }, this)

    this.setState({ vardefs: list })
  }

  vardefs(template, fieldName, extra = {}) {
    const compiled = _.template(template)
    return compiled({
      name: fieldName,
      ...extra
    })
  }
}

export default App
