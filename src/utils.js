import _ from 'lodash'
import templates from './templates'

export const makeSingleVardefs = (template, fieldName, extra = {}) => {
  const compiled = _.template(template)
  return compiled({
    name: fieldName,
    ...extra
  })
}

export const parseVardefs = value => {
  const list = []
  value.split('\n').forEach(line => {
    const def = line.split('@')
    if (def.length !== 2) {
      return
    }

    const fieldName = def[0].trim()
    const fieldDefs = def[1].split(':').map(def => def.trim())

    const [fieldType, required, len, defaultValue, relateModule] = fieldDefs

    switch (fieldType) {
      case 'varchar':
        list.push(makeSingleVardefs(templates.VARCHAR, fieldName, { required, len, defaultValue }))
        break
      case 'phone':
        list.push(makeSingleVardefs(templates.PHONE, fieldName, { required, len, defaultValue }))
        break
      case 'text':
        list.push(makeSingleVardefs(templates.TEXTAREA, fieldName, { required, len, defaultValue }))
        break
      case 'date':
        list.push(makeSingleVardefs(templates.DATE, fieldName, { required }))
        break
      case 'datetime':
        list.push(makeSingleVardefs(templates.DATETIME, fieldName, { required }))
        break
      case 'int':
        list.push(makeSingleVardefs(templates.INT, fieldName, { required, len, defaultValue }))
        break
      case 'enum':
        list.push(makeSingleVardefs(templates.DROPDOWN, fieldName, { required, len, defaultValue }))
        break
      case 'multienum':
        list.push(makeSingleVardefs(templates.MULTISELECT, fieldName, { required, len, defaultValue }))
        break
      case 'radioenum':
        list.push(makeSingleVardefs(templates.RADIO, fieldName, { required, len, defaultValue }))
        break
      case 'currency':
        list.push(makeSingleVardefs(templates.CURRENCY, fieldName, { required, len, defaultValue }))
        break
      case 'relate':
        list.push(makeSingleVardefs(templates.RELATE, fieldName, { required, relateModule }))
        break
      case 'bool':
        list.push(makeSingleVardefs(templates.BOOL, fieldName, { required, defaultValue }))
        break
      default:
        console.log(`found unknown field type! => ${fieldType}`)
        break
    }
  })

  return list.join('').trim()
}
