import Title from './components/Title';
import PostList from './components/PostList';
import { Post } from './components/PostList.types';

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <>
      <Title title="Hello, Next.js with TypeScript!" />
      <PostList posts={posts} />
    </>
    
  );
}