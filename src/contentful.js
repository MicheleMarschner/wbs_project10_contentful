//TO DO: use the process.env from the tutorial - if it's not working try Jorge's solution in Discord-general

import * as contentful from "contentful";

const client = contentful.createClient({
  space: "hpbqnf8cqvir" /*process.env.REACT_APP_SPACE_ID*/,
  accessToken:
    "JyVGvJ2Y4vnoGGE9v-f_wVm5Z0B0uid9LXUzpvRgr4U" /*process.env.REACT_APP_ACCESS_TOKEN*/
});
console.log({ client });
//I could put this part in either the App or a PostContainer to give them to posts as props
const getBlogPosts = () =>
  //?? what is slug? works like an id, but is it contentful specific?

  //zeile: 20 --> how to access items rightfully can be looked up with graphql
  //getEntries is predefined and returns a promise

  client
    .getEntries({
      content_type: "blogPost"
    })
    .then(response => response.items.map(i => i))
    .catch(console.error);

const getSinglePost = slug =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "blogPost"
    })
    .then(response => response.items)
    .catch(console.error);

export { getBlogPosts, getSinglePost };

/*same mit fetch & graphql
getEntries() is a customized method for the contentful object --> that does the API calls via fetch and returns a promise. 
By making a direct fetch call you are calling their enpoint directly
 const query = `{blogPostCollection{items {
  sys{id}
  title
  slug
  description
  body
  publishDate
}}
}`;

const options = {
  method: "post",
  headers: {
    "content-type": "application/json",
    authorization: "Bearer JyVGvJ2Y4vnoGGE9v-f_wVm5Z0B0uid9LXUzpvRgr4U"
  },
  body: JSON.stringify({
    query
  })
};

fetch(
  "https://graphql.contentful.com/content/v1/spaces/hpbqnf8cqvir/environments/master",
  options
)
  .then(resp => resp.json())
  .then(console.log);*/
