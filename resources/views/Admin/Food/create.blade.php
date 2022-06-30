<x-admin-layout>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Create new food
    </h2>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">




                        <div class="w-full overflow-hidden rounded-lg shadow-xs">


                            <div
                                class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
                            >
                                <form action="{{route('admin.food.store')}}" method="POST"
                                      enctype="multipart/form-data">



                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Name</span>
                                        <input
                                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            name="name"
                                            placeholder="Food name"
                                        />
                                    </label>

                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Price</span>
                                        <input
                                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            name="price"
                                            placeholder="Price"
                                        />
                                    </label>

                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Description</span>
                                        <input
                                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            name="description"
                                            placeholder="Description"
                                        />
                                    </label>

                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Calories</span>
                                        <input
                                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            name="calories"
                                            placeholder="Calories"
                                        />
                                    </label>



                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Image</span>
                                        <input   class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                 type="file" name="image">
                                    </label>


                                        <input type="hidden"
                                         name="restaurant_id"
                                         value={{$user->workpeople->restaurant_id}}
                                        />


                                    <button style="padding-top: 20px" class="form-control" type="submit">Add new food</button>

                                    @csrf
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
</x-admin-layout>



