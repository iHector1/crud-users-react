import React from 'react'
import { useForm } from 'react-hook-form'

const UserFormEdit = (props) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: props.currentUser
    })
    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)
    console.log(props.currentUser)
    const onSubmit = (data, e) => {
        //console.log(data)
        props.updateUser(props.currentUser.id, data)
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
            <input className="form-control" value="" type="text" name='username'{...register("username", {
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
            <button className="btn btn-success mt-5">Edit user</button>
        </form>
    )
}

export default UserFormEdit