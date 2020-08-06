import { template } from 'lodash-es'

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

export const makeSingleVardefs = (
  tmpl: string,
  module = '@@module@@',
  name = '@@fileName@@',
  extra = {},
): string => {
  const compiled = template(tmpl)
  return compiled({
    module,
    name,
    ...extra,
  })
}

export const parseVardefs = (value: string): string => {
  const list: string[] = []
  let module: string

  value.split('\n').forEach((line) => {
    const tmp = line.trim()
    if (!tmp) return

    // モジュール名取得
    // # hogehoge => hogehoge
    const [, m] = tmp.match(/^#\x20([a-zA-Z][a-zA-Z\\_0-9]*)$/) ?? []
    if (m) {
      module = m
      return
    }

    const def = tmp.split('@')
    if (def.length !== 2) {
      return
    }

    const fieldName = def[0].trim()
    const fieldDefs = def[1].split(':').map((d) => d.trim())

    const [fieldType, required, len, defaultValue, relateModule] = fieldDefs

    switch (fieldType) {
      case 'varchar':
        list.push(
          makeSingleVardefs(VARCHAR, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'phone':
        list.push(
          makeSingleVardefs(PHONE, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'text':
        list.push(
          makeSingleVardefs(TEXTAREA, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'date':
        list.push(makeSingleVardefs(DATE, module, fieldName, { required }))
        break
      case 'datetime':
        list.push(makeSingleVardefs(DATETIME, module, fieldName, { required }))
        break
      case 'int':
        list.push(
          makeSingleVardefs(INT, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'enum':
        list.push(
          makeSingleVardefs(DROPDOWN, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'multienum':
        list.push(
          makeSingleVardefs(MULTISELECT, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'radioenum':
        list.push(
          makeSingleVardefs(RADIO, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'currency':
        list.push(
          makeSingleVardefs(CURRENCY, module, fieldName, {
            required,
            len,
            defaultValue,
          }),
        )
        break
      case 'relate':
        list.push(
          makeSingleVardefs(RELATE, module, fieldName, {
            required,
            relateModule,
          }),
        )
        break
      case 'bool':
        list.push(
          makeSingleVardefs(BOOL, module, fieldName, {
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
