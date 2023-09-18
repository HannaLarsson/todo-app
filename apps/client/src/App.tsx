import { emojiValidator, type Emoji } from 'api';
import { useCallback, useState } from 'react';
import { EmojiDisplay } from './components/emoji-display';

const fetchRandomEmoji = async () => {
  const response = await (await fetch('/api/emoji')).json();
  return emojiValidator.parse(response);
};

export const App = () => {
  const [emoji, setEmoji] = useState<Emoji>();

  const handleOnClick = useCallback(async () => {
    try {
      const emoji = await fetchRandomEmoji();
      setEmoji(emoji);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <div className='emoji'>
        <EmojiDisplay emoji={emoji} />
        <button onClick={handleOnClick}>fetch random emoji</button>
      </div>
      <h1>Express + React + Typescript</h1>
    </>
  );
};
