"use client";

const Discover = () => {
    return (
        <main className="px-2">
            <div className="flex p-6 border-4 w-full md:w-1/2 bg-gray-100 mt-4 gap-2">
                <input
                    type="text"
                    placeholder="Search your favorite music"
                    className="px-2 py-1 w-full h-10"
                />
                <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-100 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                    Search
                </button>
            </div>

            <div className="mt-4 p-6 text-2xl font-semibold border-y-4 border-red-500 md:w-1/2">
                <h1>Music & Video Exclusives</h1>
            </div>
        </main>
    );
};

export default Discover;
