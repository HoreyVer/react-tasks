import React, {useState, useEffect} from 'react';
import useDebounce from "../hooks/useDebounce";


const DebounceComponent = () => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedQuery) {
            // Simulate API call
            console.log('Searching for:', debouncedQuery);
        }
    }, [debouncedQuery]);

    return (
        <input
            type="text"
            placeholder="Search users..."
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        />
    );
};

export default DebounceComponent;