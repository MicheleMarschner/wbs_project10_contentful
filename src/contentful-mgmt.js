import * as contentfulMgmt from "contentful-management";
require("babel-polyfill");
import moment from "moment";

const managementToken = "CFPAT-MmwiMN8jskUaXtik8XYd6eYNdUF9Axmp7nAnIf8jQtI";
const spaceId = "hpbqnf8cqvir";


const uploadAsset = async ({ post }, environment) => {
   const asset = environment.createAsset({
    fields: {
    title: {
      'en-US': 'Playsam Streamliner'
    },
    description: {
      'en-US': 'Streamliner description'
    },
    file: {
      'en-US': {
        contentType: 'image/png',
        fileName: 'example.png',
        upload: `${post.heroImage}`
      }
    }
  }
})
.then((asset) => asset.processForAllLocales())
.then((asset) => asset.publish())
.catch(console.error)
return asset;
}


const createPost = async ({ post },image, environment) => {
  environment
    .createEntry("blogPost", {
      fields: {
        title: { "en-US": `${post.title}` },
        slug: { "en-US": `${post.title}` },
        description: { "en-US": `${post.description}` },
        body: { "en-US": `${post.body}` },
        heroImage: {
          "en-US": {
            'sys': {
              'id': image.sys['id'],
              'linkType': 'Asset',
              'type': 'Link',
          }
              }
        }, //author: { "en-US": `${post.author}` },
        publishDate: { "en-US": moment().format() },
        tags: {}
      }
    })
    .then(entry => entry.publish())
    .catch(console.error);
}  




  //??I just added "new" to Promise but is this really right? Isn't like that in the original example
  async function savePost({ post }) {

    return new Promise(async (resolve, reject) => {
      const client = contentfulMgmt.createClient({
        accessToken: managementToken
      });

      const space = await client.getSpace(spaceId);
      const environment = await space.getEnvironment("master");

      const asset = await uploadAsset({ post }, environment);
      await createPost({ post },asset, environment);
      alert("BlogPost successfully sent");
    });
  }


  export {savePost};