import { z } from 'zod';
import { emojiValidator } from '../validators';

export type Emoji = z.infer<typeof emojiValidator>;
