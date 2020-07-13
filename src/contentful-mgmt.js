import * as contentfulMgmt from "contentful-management";
require("babel-polyfill");

const managementToken = "CFPAT-MmwiMN8jskUaXtik8XYd6eYNdUF9Axmp7nAnIf8jQtI";
const spaceId = "hpbqnf8cqvir";


//TODO: gehört später als initial setup in contentful.js
  //I just added "new" to Promise but is this really right? Isn't like that in the original example
  async function savePost({ post }) {
    return new Promise(async (resolve, reject) => {
      const client = contentfulMgmt.createClient({
        accessToken: managementToken
      });

      exports.onClientEntry = () => {
        require('babel-polyfill');
      }

      const space = await client.getSpace(spaceId);
      const environment = await space.getEnvironment("master");
      environment
        .createEntry("blogPost", {
          fields: {
            title: { "en-US": `${post.title}` },
            slug: { "en-US": `${post.title}` },
            description: { "en-US": `${post.description}` },
            body: { "en-US": `${post.body}` },
            //author: { "en-US": `${post.author}` },
            //publishDate: { "en-US": `${post.publishDate}` },
            tags: {}
          }
        })
        .then(entry => entry.publish())
        .then(asset => console.log(asset))
        .catch(console.error);
    });
  }


  export {savePost};