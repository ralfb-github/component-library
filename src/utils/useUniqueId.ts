import { useState } from 'react';
import { customAlphabet } from 'nanoid';

const nanoId = customAlphabet('1234567890abcdef', 10);

export const useUniqueId = (): string => {
  const [id] = useState(nanoId);
  return id;
};
