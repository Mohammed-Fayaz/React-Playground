import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>Le App</div>
        </QueryClientProvider>
    );
};

export default React.memo(App);
