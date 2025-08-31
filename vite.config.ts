import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const isPages = mode === 'pages'
    return {
        base: isPages ? '/a0-pomodoro/' : '/',
        plugins: [react()],
    }
})
