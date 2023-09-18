import { z } from 'zod';
import { EMOJI_KIND } from '../constants';

export const emojiValidator = z.object({
  id: z.string().uuid(),
  kind: z.enum(EMOJI_KIND),
  timestamp: z.string().datetime({ message: 'Invalid datetime string! Must be UTC.' }),
  // count: z.number().int().positive(),
});
