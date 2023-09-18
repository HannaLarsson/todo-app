import type { Emoji } from 'api';
import devoteamLogo from '/devoteam.svg';

export const EmojiDisplay = (props: { emoji?: Emoji }) => {
  if (!props.emoji)
    return <img height={100} src={devoteamLogo} className='devoteam' alt='Devoteam logo' />;

  return (
    <>
      <span>{props.emoji.kind}</span>
      <time>{new Date(props.emoji.timestamp).toLocaleString()}</time>
    </>
  );
};
