import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
