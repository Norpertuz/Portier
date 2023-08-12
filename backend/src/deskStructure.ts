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
    builder.listItem().title('InformationSection').child(
      builder.list().title('Information').items([
        builder.listItem()
          .title('Information elements')
          .child(
            builder.document()
              .title('Information')
              .schemaType('information')
              .documentId('information'),
          ),
      ]),
    ),
    builder.listItem().title('TestimonialsSection').child(
      builder.list().title('Testimonials').items([
        builder.listItem()
          .title('Testimonials elements')
          .child(
            builder.document()
              .title('Testimonials')
              .schemaType('testimonials')
              .documentId('testimonials'),
          ),
      ]),
    ),
    builder.listItem().title('FactsSection').child(
      builder.list().title('Facts').items([
        builder.listItem()
          .title('Facts elements')
          .child(
            builder.document()
              .title('Facts')
              .schemaType('facts')
              .documentId('facts'),
          ),
      ]),
    ),
    builder.listItem().title('SecondInformationSection').child(
      builder.list().title('SecondInformation').items([
        builder.listItem()
          .title('SecondInformation elements')
          .child(
            builder.document()
              .title('SecondInformation')
              .schemaType('secondinformation')
              .documentId('secondinformation'),
          ),
      ]),
    ),
    builder.listItem().title('CTASection').child(
      builder.list().title('CTASection').items([
        builder.listItem()
          .title('CTA elements')
          .child(
            builder.document()
              .title('CTA')
              .schemaType('cta')
              .documentId('cta'),
          ),
      ]),
    ),
  ]);

export default structure;
