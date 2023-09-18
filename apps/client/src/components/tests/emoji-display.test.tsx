import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { Emoji } from 'api';
import { EmojiDisplay } from '../emoji-display';

const mockEmojiObject: Emoji = {
  id: 'mock',
  kind: '😀',
  timestamp: new Date().toISOString(),
};

describe('Emoji Display', () => {
  beforeEach(() => {
    render(<EmojiDisplay emoji={mockEmojiObject} />);
  });

  test('should show a "😀" emoji', () => {
    expect(screen.getByText(/😀/i)).toBeDefined();
  });
});
