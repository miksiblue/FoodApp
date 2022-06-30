import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div style={{'height': 'calc(111vh - 30rem)',
            'background': `url('https://images.squarespace-cdn.com/content/v1/5c0ed9a3f93fd4e41d0dcd82/1554384014944-IC20AT9ZIK3C50R87K7C/WBC_4469.jpg?format=1000w')`,
            'background-repeat': 'no-repeat',

            'background-attachment': 'fixed',
            'background-position': 'center center',
            'background-size': 'cover',
            }}
              className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
        >


            {/*<div>*/}

            {/*    <img  style={{"width":"300px",*/}
            {/*        'margin-right': 'auto',*/}
            {/*        'padding-left': '150px',*/}
            {/*        'padding-bottom':'9px',*/}
            {/*    }}*/}
            {/*          src="https://cdn.discordapp.com/attachments/920970435498242049/976111176276639804/logo3-removebg-preview.png" />*/}
            {/*</div>*/}
<div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>

                <div>Andjela</div>
</div>
            </div>

    );
}
