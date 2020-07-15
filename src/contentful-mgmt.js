import * as contentfulMgmt from "contentful-management";
require("babel-polyfill");
import moment from "moment";

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

     await environment.createAsset({
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
            upload: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_15.png' //`${post.imageUrl}`
          }
        }
      }
    })
    .then((asset) => asset.processForAllLocales())
    .then((asset) => asset.publish())
    .then((asset) => createPost(asset))
    .catch(console.error)

   
    
    const createPost = (image) => {
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
        .then(asset => console.log(asset))
        .catch(console.error);
    }  
      


      

    });



  }


  export {savePost};




  /*environment.createAssetFromFiles({
        fields: {
          title: {
            'en-US': 'Asset title'
          },
          description: {
            'en-US': 'Asset description'
          },
          file: {
            'en-US': {
              contentType: 'image/svg+xml',
              fileName: 'circle.svg',
              file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>'
            }
          }
        }
      }))
      .then((asset) => asset.processForAllLocales())
      .then((asset) => asset.publish())
      .catch(console.error)
*/