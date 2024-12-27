import { useEffect, useState } from 'react';
import { Post } from '../../utils/type'
import { LoaderElement, PostItem } from '../index';
import { getPosts } from '../../services/api';
import style from './style.module.scss';

export function PostList () {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <LoaderElement />;
  }

  return (
    <div className={style['post-list']}>
      <h1 className={style['post-list__header']}>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className={style['post-list__item']}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
