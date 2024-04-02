import { Select, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

/**
 * retrieves categories from database
 * @returns {Response} response - fetched data
 */
const fetchCategories = async () => {
    const response = await fetch('http://localhost:8080/category/');

    if(!response.ok) {
        throw new Error('Fetch failed');
    }
    return response.json();
}

interface Category {
    Name: string;
}

/**
 * displays a Select with different selectable categories
 * @returns JSX element
 */
export default function CategorySelect() {

    interface QueryError {
        message: string;
    }

    const { status, data, error } = useQuery<any, QueryError>({
        queryKey: ['categories'], 
        queryFn: fetchCategories
    });

    if(status === 'loading') {
        return (
            <>
            </>
        );
    }
    
    if(status === 'error') {
        return (
            <>
                <Text>Error: {error.message}</Text>
            </>
        );
    }

    return (
        <Select w="25%">
            {data.categories.map((category: Category, index: number) => (
                <option value={index}>{category.Name}</option>
            ))}
        </Select>
    );
}
