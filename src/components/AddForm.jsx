import React from 'react'
import { useForm } from 'react-hook-form'

const AddForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data, e) => {
        //console.log(data)
        props.addUsers(data)
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input className="form-control" type="text" {...register("name", {
                required: {
                    value: true,
                    message: "Necesita estar lleno el campo"
                },
                maxLength: {
                    value: 17,
                    message: 'Maximo caracteres alcanzado'
                }, minLength: {
                    value: 5,
                    message: 'Debe tener mas caracteres'
                },
            })} />
            {errors.name && <span className="text-danger text-small d-block mb-2">{errors.name.message}</span>}
            <label>Username</label>
            <input className="form-control" type="text" name='username'{...register("username", {
                required: {
                    value: true,
                    message: "Necesita estar lleno el campo"
                },
                maxLength: {
                    value: 17,
                    message: 'Maximo caracteres alcanzado'
                }, minLength: {
                    value: 5,
                    message: 'Debe tener mas caracteres'
                },
            })} />
            {errors.username && <span className="text-danger text-small d-block mb-2">{errors.username.message}</span>}
            <button className="btn btn-success mt-5">Add new user</button>
        </form>
    )
}
export default AddForm