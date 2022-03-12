import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { ErrorMessage } from '@hookform/error-message';
import "react-datepicker/dist/react-datepicker.css";
import "./Styles.css"



export const CustomForm = () => {
    const { register, handleSubmit, formState :{errors, isValid} } = useForm();
    const onSubmit = data => {
        console.log(data)
        window.localStorage.setItem(data.email,data)
    };
    console.log(errors,isValid)
    return(
        <div className="container">
            <div className="innerContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">Nombre</label>
                    <input className="text-field" {...register("firsName", { 
                        required:{
                            value:true,
                            message: "Este campo es obligatorio"
                        },
                        maxLength:{
                            value: 25,
                            message: "El largo del texto debe ser menor a 26 caracteres."
                        }
                    
                    })}/>
                    <ErrorMessage errors={errors} name="firstName" as="p"/>
                    <label>Primer Apellido</label>
                    <input className="text-field" {...register("surName", { 
                        required:{
                            value:true,
                            message: "Este campo es obligatorio"
                        },
                        maxLength:{
                            value:20,
                            message: "El largo del texto debe ser menor a 20 caracteres"
                        }
                    })}/>
                    <label>Segundo Apellido</label>
                    <input className="text-field" {...register("lastName", { 
                        required:{
                            value:true,
                            message: "Este campo es obligatorio."
                        },
                        maxLength:{
                            value:20,
                            message: "El largo del texto debe ser menor a 20 caracteres"
                        }
                    })}/>
                    <label>Fecha de nacimiento</label>
                    <input {...register("birthDate",{required:{
                        value:true,
                        message: "Este campo es obligatorio."                   
                    }})}/>
                    <label>Email</label>
                    <input {...register("email",{ 
                        required:{
                            value:true,
                            message: "Este campo es obligatorió."
                        },
                        pattern:{
                            value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Este correo no es valido."
                        }   
                    })}/>
                    <label>Dirección</label>
                    <input {...register("address",{
                        required:{
                            value:true,
                            message:"Este campo es obligatorio."
                        }
                        
                        })}/>
                    <label>Codigo de Marcado Movil</label>
                    <input {...register("mobileCode",{
                        required:{
                            value:true,
                            message:"Este campo es obligatorio."
                        },
                        pattern:{
                            value:/^\+(?:[0-9] ?){2,6}$/,
                            message:"Verifique el codigó telefonicó"
                        }
                        
                    })}/>
                    <label>Numero telefonicó</label>
                    <input {...register("phone", {
                        required:{
                            value:true,
                            message:"Este campo es obligatorio."
                        },
                        pattern:{
                            value:/^[0-9]{8}$/,
                            message:"El numero telefonicó es incorrecto"
                        }
                    })}/>
                    <label>Numero de telefono de casa</label>
                    <input {...register('phone-house')}/>
                    <label>Número de identificación personal</label>
                    <input {...register("pernonalID",{
                        required: true,
                        message: "Este campo es obligatorio"
                    })}/>
                    <label>Número de pasaporte</label>
                    <input {...register("passport",{
                        required: true,
                        message: "Este campo es obligatorio"
                    })}/>
                    <label>Número de tarjeta de crédito</label>
                    <input {...register("passport",{
                        required: true,
                        message: "Este campo es obligatorio"
                    })}/>
                    <label>Mes y año de vencimiento de la tarjeta</label>
                    <input {...register("creditCardDue",{
                        required: true,
                        message: "Este campo es obligatorio"
                    })}/>
                    <label>El código de verificación de la tarjeta, o CVC.</label>
                    <input {...register("codeCvc",{
                        required: true,
                        message: "Este campo es obligatorio"
                    })}/>
                    <label>Datos de emergencia</label>
                    <input type='text'/>
                    <input type={"submit"}/>
                </form>
            </div>
        </div>
    )
}