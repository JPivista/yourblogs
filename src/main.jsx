import ReactDOM from 'react-dom/client';

import './index.css'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { router } from './routes/router';
import { RouterProvider } from 'react-router-dom';
;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
