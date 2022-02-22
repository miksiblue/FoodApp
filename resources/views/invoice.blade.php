<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">


    <style>
        body {
            font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace !important;
            letter-spacing: -0.3px;
        }

        .invoice-wrapper {
            width: 700px;
            margin: auto;
        }

        .nav-sidebar .nav-header:not(:first-of-type) {
            padding: 1.7rem 0rem .5rem;
        }

        .logo {
            font-size: 50px;
        }

        .sidebar-collapse .brand-link .brand-image {
            margin-top: -33px;
        }

        .content-wrapper {
            margin: auto !important;
        }

        .billing-company-image {
            width: 50px;
        }

        .billing_name {
            text-transform: uppercase;
        }

        .billing_address {
            text-transform: capitalize;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            text-align: left;
            padding: 10px;
        }

        td {
            padding: 10px;
            vertical-align: top;
        }

        .row {
            display: block;
            clear: both;
        }

        .text-right {
            text-align: right;
        }

        .table-hover thead tr {
            background: #eee;
        }

        .table-hover tbody tr:nth-child(even) {
            background: #fbf9f9;
        }

        address {
            font-style: normal;
        }
    </style>
</head>
<body>
<div class="row invoice-wrapper">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <tr>
                        <td>
                            <h4>
                                <span class="">FoodApplication</span>
                            </h4>
                        </td>
                        <td class="text-right">
                            <strong>{{$order->created_at}}</strong>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <br><br>
        <div class="row invoice-info">
            <div class="col-md-12">
                <table class="table">
                    <tr>
                        <td>
                            <div class="">

                                    @foreach($order->food as $food)
                                        <strong>From</strong>
                                        {{$food->restaurant->name}}
                                        <br>
                                    <stong>Adress:  </stong>
                                    {{$food->restaurant->location}}<br>
                                        break;
                                @endforeach
                            </div>
                        </td>
                        <td>
                            <div class="">
                                To
                                <address>
                                    <strong class="billing_name">{{$order->user->name}}</strong><br>
                                    <span class="billing_address"> {{$order->address}}</span><br>
                                    Email: {{$order->user->email}}
                                </address>
                            </div>
                        </td>
                        <td>

                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <br><br>
        <div class="row">
            <div class="col-md-12 table-responsive">
                <table class="table table-condensed table-hover">
                    <thead>
                    <tr>
                        <th>Qty</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>


                    @foreach($order->food as $food)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td> {{$food->name}} </td>
                            <td>{{$food->description}}</td>
                            <td>   {{$food->price}}  </td>
                        </tr>
                    @endforeach


                    <tr>
                        <td colspan="3" class="text-right">Sub Total</td>
                        <td class="text-right"><strong>{{$order->price}}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <!-- /.col -->
        </div>
        <br><br><br>
        <div>
            <small><small>NOTE: This is system generate invoice no need of signature</small></small>
        </div>
    </div>
</div>
</body>
</html>









