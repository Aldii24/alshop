import { defineQuery } from "next-sanity";

export const SHOES_QUERY =
  defineQuery(`*[_type == "shoes"] | order(_createdAt desc) {
  _id, title, slug, category, description, price, size, image
}`);

export const SHOES_BY_SEARCH_QUERY = defineQuery(`*[
  _type == "shoes" &&
  defined(slug.current) &&
  image != null &&
  (!defined($search) || title match $search || category match $search)
] | order(_createdAt desc) {
  _id, title, slug, category, description, price, size, image
}
`);

export const SHOES_QUERY_BY_CATEGORY = defineQuery(`
  *[ 
    _type == "shoes" && 
    defined(slug.current) && 
    $category == "All" || category == $category
  ] | order(_createdAt desc) [$offset...$offset + $limit] {
    _id, title, slug, category, description, price, size, image
  }
  `);

export const SHOES_QUERY_BY_ID =
  defineQuery(`*[_type == "shoes" && defined(slug.current) && _id == $id ] | order(_createdAt) [0] {
  _id, title, slug, description, category,
    price, size, image
} `);

export const AUTHOR_BY_GOOGLE_ID_QUERY =
  defineQuery(`*[_type == "author" && defined(id) && id == $id] | order(_createdAt) [0] {
  _id, name, email, image
}`);
