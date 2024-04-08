

/**
 * retrieves user data from database
 * TODO: Retrieve data from the currently logged in user
 * @returns {Response} response - fetched data
 */
const fetchUser = async () => {

    const response = await fetch('http://localhost:8080/user/');

    if(!response.ok) {
        throw new Error('Fetch failed');
    }
    return response.json();
}

export default function UserPage() {

    return (
        <>
        </>
    );

}