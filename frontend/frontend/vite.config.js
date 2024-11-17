import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react'
export default defineConfig({
  css: {
    postcss:{
      plugins:[tailwindcss()],
    },
  },
});

