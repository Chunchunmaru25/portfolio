import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from "react-router-dom";
import Header from './components/header.tsx';
import { ScrollProgress } from './components/ui/scroll-progress.tsx';
import { SmoothCursor } from './components/ui/smooth-cursor.tsx';
import ClickSpark from './components/reactbits/ClickSpark.tsx';
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Toaster />
        <SmoothCursor />
        <ClickSpark
          sparkColor="#62c1e5"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <ScrollProgress />
          <App />
        </ClickSpark>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
