<x-admin-layout>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Add staff
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
                                <form action="{{route('admin.storeStaff')}}" method="POST"
                                      enctype="multipart/form-data">
@method('PATCH')


                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Email</span>
                                        <input
                                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            name="email"
                                            placeholder="email"
                                        />
                                    </label>

                                    <label class="block text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">Shift</span>
                                        <input
                                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            name="shift"
                                            placeholder="shift"
                                        />
                                    </label>

                                    <label class="block text-sm">

                                        <span class="text-gray-700 dark:text-gray-400">Salary</span>
                                        <input
                                            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            name="salary"
                                            placeholder="salary"
                                        />
                                    </label>


                                    <label
                                        class="inline-flex items-center text-gray-600 dark:text-gray-400"
                                    >
                                        <input
                                            type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType"
                                            value=3
                                        />
                                        <span class="ml-2">Staff</span>
                                    </label>
                                    <label
                                        class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400"
                                    >
                                        <input
                                            type="radio"
                                            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                            name="accountType"
                                            value=4
                                        />
                                        <span class="ml-2">Manager</span>
                                    </label>


                                    <br>

                                    <button style="padding-top: 20px" class="form-control" type="submit">Add new staff</button>

                                    @csrf
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
</x-admin-layout>



