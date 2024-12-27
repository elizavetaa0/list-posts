import { MutatingDots } from 'react-loader-spinner';
import style from './style.module.scss';

export function LoaderElement () {
  return(
    <div className={style.loader}>
      <p className={style.loader__text}>Please, wait. Loading in progress</p>
      <MutatingDots
        color='#f3b894'
        secondaryColor='#f3b894'
        ariaLabel='mutating-dots-loading'
        height={100}
        width={100}
      />
    </div>
  )
}
