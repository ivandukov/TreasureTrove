import { Select, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";


/**
 * retrieves categories from database
 * @returns {Response} response - fetched data
 */
const fetchCategories = async () => {
    try {
        const response = await fetch("http://localhost:8080/category/");

        if (!response.ok) {
            throw new Error("Fetch failed");
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error('There has been a problem with the fetch operation:', error);
        throw error; 
    }
};

interface Category {
    name: string;
}

/**
 * displays a Select with different selectable categories
 * @returns JSX element
 */
export default function CategorySelect() {
    interface QueryError {
        message: string;
    }

    const { data, error,  isLoading, isError } = useQuery<any, QueryError>({
        queryKey: ["categories"],
        queryFn: fetchCategories
    });

    if (isError) {
        return (
            <>
                <Text>Error: {error.message}</Text>
            </>
        );
    }

    return (
        <Select w="25%">
            {
                data?.categories.map((category: Category, index: number) => (
                    <option value={index}>
                        {category.name}
                    </option>
                ))
            }
        </Select>
    );
}
