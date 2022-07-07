import Swal from "sweetalert2";

export default function DeleteRestaurant(props){


    const deleteRestaurant = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if (!isConfirm) {
            return;
        }
        await axios.delete(`http://192.168.31.230/api/v1/restaurants/${id}`).then(({data}) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            return navigator('/');

        }).catch(({response: {data}}) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }

    return (
        <button className='btn btn-success me-2' variant="danger" onClick={()=>deleteRestaurant(props.restaurant.id)}>
            Delete
        </button>
    );
}
