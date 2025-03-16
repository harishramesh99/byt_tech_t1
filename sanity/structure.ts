// sanity/structure.ts
import { StructureBuilder } from 'sanity/desk';

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Profile')
        .child(
          S.documentList()
            .title('Profile')
            .filter('_type == "profile"')
        ),
      
      S.listItem()
        .title('Projects')
        .child(
          S.documentList()
            .title('Projects')
            .filter('_type == "project"')
        ),
      
      S.listItem()
        .title('Skills')
        .child(
          S.documentList()
            .title('Skills')
            .filter('_type == "skills"')
        ),
      
      S.listItem()
        .title('Posts')
        .child(
          S.documentList()
            .title('Posts')
            .filter('_type == "post"')
        ),
      
      S.listItem()
        .title('Case Studies')
        .child(
          S.documentList()
            .title('Case Studies')
            .filter('_type == "caseStudy"')
        ),
      
      S.listItem()
        .title('Testimonials')
        .child(
          S.documentList()
            .title('Testimonials')
            .filter('_type == "testimonial"')
        ),
      
      S.listItem()
        .title('Navigation')
        .child(
          S.documentList()
            .title('Navigation')
            .filter('_type == "navbar"')
        ),
        
      // Add this to show any other document types
      ...S.documentTypeListItems().filter(
        (listItem) => !['profile', 'project', 'skills', 'post', 'caseStudy', 'testimonial', 'navbar'].includes(listItem.getId() || '')
      )
    ]);