
import path from 'path';
import { partytownVite } from '@builder.io/partytown/utils';

// vite.config.js

export default ({ command }) => ({
  base: "/",
  plugins: [
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown'),
    }),
  ],
});

