// src/handlers.js

import { rest } from 'msw';

export const handlers = [
  rest.get('/api/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: 'Mock data',
      })
    );
  }),
  // Define more handlers if needed
];
