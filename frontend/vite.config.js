import { defineConfig } from 'vite'               // Importa la función para definir la configuración de Vite
import react from '@vitejs/plugin-react'          // Importa el plugin necesario para soportar JSX y React

export default defineConfig({
  plugins: [react()],                             // Aplica el plugin de React
})
