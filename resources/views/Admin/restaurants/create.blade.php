<x-admin-layout>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Create new restaurant
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
                                            <form action="{{route('admin.store')}}" method="POST"
                                                  enctype="multipart/form-data">



                                            <label class="block text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">Name</span>
                                                <input
                                                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                  name="name"
                                                    placeholder="Restaurant name"
                                                />
                                            </label>

                                                <label class="block text-sm">
                                                    <span class="text-gray-700 dark:text-gray-400">Phone</span>
                                                    <input
                                                        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                        name="phone"
                                                        placeholder="Phone"
                                                    />
                                                </label>

                                                <label class="block text-sm">
                                                    <span class="text-gray-700 dark:text-gray-400">Email</span>
                                                    <input
                                                        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                        name="email"
                                                        placeholder="Phone"
                                                    />
                                                </label>

                                                <label class="block text-sm">
                                                    <span class="text-gray-700 dark:text-gray-400">Location</span>
                                                    <input
                                                        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                        name="location"
                                                        placeholder="Location"
                                                    />
                                                </label>

                                                <label class="block text-sm">
                                                    <span class="text-gray-700 dark:text-gray-400">Working hours</span>
                                                    <input
                                                        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                        name="working_hours"
                                                        placeholder="working hours"
                                                    />
                                                </label>



                                            <label class="block mt-4 text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">Description</span>
                                                <textarea
                                                    class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                                    rows="3"
                                                    name="description"
                                                    placeholder="Enter description for restaurant."
                                                ></textarea>
                                            </label>

                                                <label class="block mt-4 text-sm">
                                                <span class="text-gray-700 dark:text-gray-400">Image</span>
                                                    <input   class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                           type="file" name="image">
                                            </label>
                                                <button class="form-control" type="submit">Add new restaurant</button>

                                                @csrf
                                            </form>
                                        </div>


{{--                                        <form action="{{route('admin.store')}}" method="POST"--}}
{{--                                              enctype="multipart/form-data">--}}

{{--                                            <div class="form-group">--}}
{{--                                                <strong> <label for="exampleFormControlInput1">Ime:</label> </strong>--}}
{{--                                                <input class="form-control" type="text" name="ime"--}}
{{--                                                       placeholder="ime glumca" value="{{old('ime')}}">--}}
{{--                                                <div>{{$errors->first('ime')}}</div>--}}
{{--                                            </div>--}}

{{--                                            <div class="form-group" style="padding-bottom: 20px">--}}
{{--                                                <strong> <label for="exampleFormControlInput1">Biografija:</label>--}}
{{--                                                </strong>--}}
{{--                                                <textarea class="form-control" name="biografija" cols="30"--}}
{{--                                                          rows="10">{{old('biografija')}}</textarea>--}}
{{--                                                {{$errors->first('biografija')}}--}}
{{--                                            </div>--}}

{{--                                            <div class="form-group">--}}
{{--                                                <strong> <label for="exampleFormControlInput1">Slika:</label> </strong>--}}
{{--                                                <input class="form-control" type="file" name="slika">--}}
{{--                                                <div>{{$errors->first('slika')}}</div>--}}
{{--                                            </div>--}}

{{--                                            <div class="form-group" style="padding-bottom: 20px">--}}
{{--                                                <strong> <label for="exampleFormControlInput1">Datum rodjenja:</label>--}}
{{--                                                </strong>--}}
{{--                                                <input class="form-control" type="date" name="datum_rodjenja">--}}
{{--                                                {{$errors->first('datum_rodjenja')}}--}}
{{--                                            </div>--}}

{{--                                            <button class="form-control" type="submit">Dodaj glumca</button>--}}
{{--                                            @csrf--}}
{{--                                        </form>--}}
                                    </div>

                        </div>
                    </div>
                </div>
            </div>
</x-admin-layout>



