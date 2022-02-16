import React from 'react'
import Swal from 'sweetalert2'

export default function Alert(props) {
    // const capitalization = (word) =>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1)
    // }
    

const popup = () =>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: props.alert.msg
    })
}

if(props.alert != null){
    popup();
}

    return (
        // props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} id="alert" role="alert">
        //     <strong>{capitalization(props.alert.type)}</strong>: {props.alert.msg}
        // </div>
        <div className=""></div>
    )
}
