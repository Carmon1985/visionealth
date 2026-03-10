// Prefix public asset paths with the Vite base URL (needed for GitHub Pages subdirectory deployment)
export const asset = (path) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
