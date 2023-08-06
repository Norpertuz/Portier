import { StructureBuilder } from 'sanity/desk';

const structure = (builder: StructureBuilder) => builder.list()
  .title('Navigation')
  .items([
    builder.listItem().title('IntroductionSection').child(
      builder.list().title('Introduction').items([
        builder.listItem()
          .title('Introduction elements')
          .child(
            builder.document()
              .title('Introduction')
              .schemaType('introduction')
              .documentId('introduction'),
          ),
      ]),
    ),
  ]);

export default structure;
