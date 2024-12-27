import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Post, Comment } from '../../utils/type';
import { getPostDetails, getPostComments } from '../../services/api';
import { LoaderElement } from '../LoaderElement/loader-element';
import style from './style.module.scss';

export function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        if (id) {
          const postDetails = await getPostDetails(Number(id));
          const postComments = await getPostComments(Number(id));
          setPost(postDetails);
          setComments(postComments);
        }
      } catch (error) {
        console.error('Failed to fetch post details or comments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) {
    return <LoaderElement />;
  }

  if (!post) {
    return <p>Sorry! Post not found</p>;
  }

  const handleBackClick = () => {
    navigate('/');
  }

  return (
    <div className={style['post-details']}>
      <button className={style['back-button']} onClick={handleBackClick}>Back to posts</button>
      <h1 className={style['post-details__header']}>{post.title}</h1>
      <p className={style['post-details__body']}>{post.body}</p>
      <div className={style['post-details__comments']}>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
