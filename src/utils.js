import _ from 'lodash'

import {
  BOOL,
  CURRENCY,
  DATE,
  DATETIME,
  DROPDOWN,
  INT,
  MULTISELECT,
  PHONE,
  RADIO,
  RELATE,
  TEXTAREA,
  VARCHAR,
} from './templates'

export const makeSingleVardefs = (template, fieldName, extra = {}) => {
  const compiled = _.template(template)
  return compiled({
    name: fieldName,
    ...extra,
  })
}

export const parseVardefs = (value) => {
  const list = []
  value.split('\n').forEach((line) => {
    const def = line.split('@')
    if (def.length !== 2) {
      return
    }

    const fieldName = def[0].trim()
    const fieldDefs = def[1].split(':').map((d) => d.trim())

    const [fieldType, required, len, defaultValue, relateModule] = fieldDefs

    switch (fieldType) {
      case 'varchar':
        list.push(
          makeSingleVardefs(VARCHAR, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'phone':
        list.push(
          makeSingleVardefs(PHONE, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'text':
        list.push(
          makeSingleVardefs(TEXTAREA, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'date':
        list.push(makeSingleVardefs(DATE, fieldName, { required }))
        break
      case 'datetime':
        list.push(makeSingleVardefs(DATETIME, fieldName, { required }))
        break
      case 'int':
        list.push(
          makeSingleVardefs(INT, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'enum':
        list.push(
          makeSingleVardefs(DROPDOWN, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'multienum':
        list.push(
          makeSingleVardefs(MULTISELECT, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'radioenum':
        list.push(
          makeSingleVardefs(RADIO, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'currency':
        list.push(
          makeSingleVardefs(CURRENCY, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'relate':
        list.push(
          makeSingleVardefs(RELATE, fieldName, {
            required,
            relateModule,
          }),
        )
        break
      case 'bool':
        list.push(
          makeSingleVardefs(BOOL, fieldName, {
            required,
            defaultValue,
          }),
        )
        break
      default:
        console.log(`found unknown field type! => ${fieldType}`)
        break
    }
  })

  return list.join('').trim()
}
