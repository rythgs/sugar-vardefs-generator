# 🍺 SugarCRM Vardefs Creator

Generate SugarCRM vardefs.

Enter the following text in the text area on the left.

```
<fieldName>@<fieldType>:<required>:<length>:<default>
```

like this `my_field@varchar:1:100:xyz`.  
Then vardefs will be output.


```php
$dictionary['@@module@@']['fields']['my_field'] = [
  'required' => true,
  'name' => 'my_field',
  'vname' => 'LBL_MY_FIELD',
  'type' => 'varchar',
  'massupdate' => false,
  'no_default' => false,
  'comments' => '',
  'help' => '',
  'importable' => 'true',
  'duplicate_merge' => 'enabled',
  'duplicate_merge_dom_value' => '1',
  'audited' => false,
  'reportable' => true,
  'unified_search' => false,
  'merge_filter' => 'disabled',
  'default' => 'xyz',
  'full_text_search' => [
    'enabled' => '0',
    'boost' => '1',
    'searchable' => false,
  ],
  'calculated' => false,
  'len' => '100',
  'size' => '20',
];
```

### Supported field type

| type | syntax |
| ---- | ------ |
| `varchar` | `example@varchar:1:100:aaa` |
| `phone` | `example@phone:1:100:aaa` |
| `text` | `example@text:1:100:aaa` |
| `date` | `example@date:1` |
| `datetime` | `example@datetime:1` |
| `int` | `example@int:1` |
| `enum` | `example@enum:1:100:aaa` |
| `multienum` | `example@multienum:1:100` |
| `radioenum` | `example@radioenum:1:100:aaa` |
| `currency` | `example@currency:1` |
| `relate` | `example@relate:1:::Users` |
| `bool` | `example@bool:1` |

### License

MIT
