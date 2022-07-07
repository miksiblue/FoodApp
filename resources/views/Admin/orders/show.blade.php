<x-admin-layout>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Order {{$order->id}}
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
                                                <th class="px-4 py-3">Name</th>
                                                <th class="px-4 py-3">Price</th>
{{--                                                <th class="px-4 py-3">Sale</th>--}}
                                                <th class="px-4 py-3">Ingridients</th>

                                            </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

                                            @foreach($order->food as $food)
                                                <tr class="text-gray-700 dark:text-gray-400">
                                                    <td class="px-4 py-3">
                                                        <div class="flex items-center text-sm">

                                                            <div>
                                                                <p class="font-semibold">{{$food->id}}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-4 py-3 text-sm">
                                                        {{$food->name}}
                                                        <p class="text-xs text-gray-600 dark:text-gray-400">
                                                            {{$food->description}}
                                                        </p>
                                                    </td>

                                                    <td class="px-4 py-3 text-sm">
                                                        {{$food->sale===null ? $food->price : $food->sale }}
                                                    </td>


                                                        <td class="px-4 py-3 text-sm">
                                                        @foreach($food->ingredients as $ingredients)
                                                            {{$ingredients->ingredient}},
                                                            @endforeach
                                                        </td>



                                                </tr>
                                            @endforeach

                                            </tbody>
                                        </table>

                                        <p>Total: {{$order->price}} RSD</p>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
</x-admin-layout>



