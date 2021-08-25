const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data?.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allPosts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        bg {
          hex
        }
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1280, h: 800 }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `,
    { preview }
  );
  return data?.allPosts;
}

export async function getImageForHome() {
  const data = await fetchAPI(
    `{
      upload(filter: {id: {eq: "22038955"}}) {
        id
        url
        title
        responsiveImage(imgixParams: {auto: format, fit: crop, w: 1920, h: 1480}) {
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          bgColor
          base64
       }
    }
  }
 `
  );
  return data?.upload;
}


export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 1280, h: 800 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1280, h: 800 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
      }
    }
    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1280, h: 800 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
      }
    }
  }
  ${responsiveImageFragment}
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data;
}