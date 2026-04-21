/**
 * KoochoolooKadeh - Standalone Website Entry Point
 * This app is served directly via index.html relative to the root.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// We do not mount anything here to avoid interfering with the standalone index.html
// but we leave this file to avoid Vite build errors if it expects a main entry.
console.log('KoochoolooKadeh Standalone Site Loaded');
