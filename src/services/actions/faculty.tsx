'use server'

export const getFacultyProfileInfo = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/faculty-details/${id}`, {
        cache: 'no-store',
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data[0];
}
export const getAllFaculty = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/all-faculty`, {
        cache: 'no-store',
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data;
}

