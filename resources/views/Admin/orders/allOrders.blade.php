<x-admin-layout>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        All Orders
    </h2>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                            <table class="min-w-full divide-y divide-gray-200">

                                <tbody class=" divide-y divide-gray-200">
                                <div class="w-full overflow-hidden rounded-lg shadow-xs">
                                    <div class="w-full overflow-x-auto">
                                        <table class="w-full whitespace-no-wrap">
                                            <thead>
                                            <tr
                                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                                            >
                                                <th class="px-4 py-3">ID</th>
                                                <th class="px-4 py-3">Address</th>
                                                <th class="px-4 py-3">Price</th>
                                                <th class="px-4 py-3">Status</th>
                                                <th class="px-4 py-3">Restaurant ID</th>

                                            </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                                            @foreach($orders as $order)
                                                <tr class="text-gray-700 dark:text-gray-400">
                                                    <td class="px-4 py-3">
                                                        <div class="flex items-center text-sm">

                                                            <div>
                                                                <p class="font-semibold">{{$order->id}}</p>
                                                                <p class="text-xs text-gray-600 dark:text-gray-400">
                                                                    {{--                                                                    {{$food->description}}--}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-3 text-sm">
                                                        {{$order->address}}
                                                    </td>

                                                    <td class="px-4 py-3 text-sm">
                                                        {{$order->price}}
                                                    </td>
                                                    <td class="px-4 py-3 text-xs">

                                                        @if($order->active===0)
                                                            <span
                                                                class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-green-100">
                                                                Inactive
                                                           </span>
                                                        @else

                                                            <span
                                                                class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                                Active
                                                           </span>
                                                        @endif

                                                    </td>

                                                    <td class="px-4 py-3 text-sm">
                                                        {{$order->restaurant_id}}
                                                    </td>


                                                </tr>
                                            @endforeach

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
</x-admin-layout>



