import { Link } from 'react-router-dom';
import { Post } from '../../utils/type';
import style from './style.module.scss';

interface PostItemProps {
  post: Post;
}
export function PostItem ({ post }: PostItemProps) {

  return (
    <>
      <Link to={`/posts/${post.id}`} className={style['post-item__link']}>
        <h2 className={style['post-item__title']}>{post.title}</h2>
        <p className={style['post-item__body']}>{post.body.substring(0, 100)}...</p>
      </Link>
    </>
  )
}
