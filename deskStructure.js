// Packages
import S from '@sanity/desk-tool/structure-builder'
import {
  FaTools
} from 'react-icons/fa'

export default () =>
  S
    .list()
    .title('Content')
    .items([
      S
        .listItem()
        .title('Settings')
        .icon(FaTools)
        .child(
          S
            .document()
            .schemaType('settings')
            .documentId('settings')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem => ![
          'settings'
        ].includes(
          listItem.getId()
        )
      )
    ])