import { useEffect, useState } from "react";

import { getBlogPosts } from "../contentful";

const promise = getBlogPosts();

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //?? useEffect in a custom hook instead of a component - when does he get triggered?
  useEffect(() => {
    promise.then(blogPosts => {
      let ids = blogPosts.map(post => post.sys.id);
      blogPosts = blogPosts.map(post => post.fields);
      blogPosts = blogPosts.map(ele => ({ ...ele, id: ids[ele] }));

      setPosts(blogPosts);
      setLoading(false);
    });
  }, []);

  return [posts, isLoading];
}

/* whole process in one file: 
const client = contentful.createClient({
  space: "hpbqnf8cqvir",
  accessToken: "JyVGvJ2Y4vnoGGE9v-f_wVm5Z0B0uid9LXUzpvRgr4U"
});

const promise/getBlogPosts = () => {
  client
    .getEntries()
    .then(response => response.items)
    .then(blogPosts => {
      setPosts(blogPosts);
      setLoading(false);
    });
    .catch(console.error);
}

--> puts BlogPosts as array objects into the state
--> sets Loading to false - so tells also the user that asynchronous task has finished
*/
