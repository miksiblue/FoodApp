import { Link } from "react-router-dom";
import {useState} from "react";

const Ruta=(props)=> {

    // const [s,setS]=useState('res');

    return (


        <div style={{
            'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center', 'padding-bottom': '20px',
            'background':'white',
            'padding-top':'30px',
            'font-family': 'serif',
            'font-style': 'italic',
            'font-size': '17px'
        }}>

            <Link to='/dashboard' style={{'text-decoration':'none'}}> <p  style={{'padding-right': '100px' ,'text-decoration': 'none',
                'color': 'black'}}><b> All Restaurants </b></p></Link>
            <Link to='/random' style={{'text-decoration':'none'}}><p style={{'padding-right': '100px', 'text-decoration': 'none',
                'color': 'black'}}><b>Random</b> </p></Link>
            <Link to='/favorite' style={{'text-decoration':'none'}}><p style={{'padding-right': '100px', 'text-decoration': 'none',
                'color': 'black'}}><b> Favorite Restaurants </b> </p></Link>
            <Link to='/topRated' style={{'text-decoration':'none'}}><p style={{'padding-right': '100px','text-decoration': 'none',
                'color': 'black'}}><b> Top Rated </b> </p></Link>

            {/*<p style={{'padding-right':'100px'}}>Top Rated</p>*/}
            <Link to='/promotions' style={{'text-decoration':'none'}}><p style={{'padding-right': '100px','text-decoration': 'none',
                'color': 'black'}}><b> Promotions </b> </p></Link>


            <hr/>
        </div>


    );

}


export default Ruta;
