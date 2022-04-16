import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { ErrorMessage } from '@hookform/error-message';
import "react-datepicker/dist/react-datepicker.css";
import "./Styles.css"



export const CustomForm = () => {
    
    const { register, watch, handleSubmit, formState :{errors, isValid} } = useForm();
    const watchShowFieldEmergency = watch("emergency", false);
    const onSubmit = data => {
        console.log(data)
        window.localStorage.setItem(data.email,data)
    };
    console.log(errors)
    return(
        <section className="container">
            <form className="innerContainer" onSubmit={handleSubmit(onSubmit)}>
                <h1>Formulario de contacto</h1>
                <div className="id">
                    <div className="box-field">
                        <label className="label"> Primer Nombre</label>
                        <input className="input" {...register("firsName", { 
                            required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            },
                            maxLength:{
                                value: 25,
                                message: "El largo del texto debe ser menor a 26 caracteres."
                            }                     
                        })}/>
                        <ErrorMessage errors={errors} name="firsName" render={({ message }) => <p className="error">{message}</p>} />  
                    </div>
                    <div className="box-field" >
                        <label className="label"> Segundo Nombre</label>
                        <input className="input" {...register("secondName", { 
                            required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            },
                            maxLength:{
                                value: 25,
                                message: "El largo del texto debe ser menor a 26 caracteres."
                            }
                        
                        })}/>
                        <ErrorMessage errors={errors} name="secondName" render={({ message }) => <p className="error">{message}</p>} />  
                    </div>    
                </div> 
                <div className="id">
                    <div className="box-field">
                        <label className="label">Primer Apellido</label>
                        <input className="input" {...register("surName", { 
                            required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            },
                            maxLength:{
                                value:20,
                                message: "El largo del texto debe ser menor a 20 caracteres"
                            }
                        })}/>
                        <ErrorMessage errors={errors} name="surName" render={({ message }) => <p className="error">{message}</p>} />  
                    </div>
                    <div className="box-field" >
                        <label className="label">Segundo Apellido</label>
                        <input className="input" {...register("lastName", { 
                            required:{
                                value:true,
                                message: "Este campo es obligatorio."
                            },
                            maxLength:{
                                value:20,
                                message: "El largo del texto debe ser menor a 20 caracteres"
                            }
                        })}/>
                        <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p className="error">{message}</p>} />  
                    </div>                     
                </div> 
                <div className="id">
                    <div className="small-box-field">
                        <label className="label">Fecha de nacimiento</label>
                        <input className="input" type="text" placeholder="DD/MM/AAAA" {...register("birthDate",{
                            required:{
                                value:true,
                                message: "Este campo es obligatorio."                   
                            }
                        })}/>
                        <ErrorMessage errors={errors} name="birthDate" render={({ message }) => <p className="error">{message}</p>} />  
                    </div>
                <div className="meddium-box-field" >
                        <label className="label">Correo Electronico</label>
                        <input className="input"  {...register("email", { 
                            required:{
                                value:true,
                                message: "Este campo es obligatorió."
                            },
                            pattern:{
                                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Este correo no es valido."
                            }   
                        })}/>
                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="error">{message}</p>} />  
                </div>
                    <div className="meddium-box-field" >
                        <label className="label">Dirección</label>
                        <input className="input" {...register("address", { 
                            required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            }
                        })}/>
                        <ErrorMessage errors={errors} name="address" render={({ message }) => <p className="error">{message}</p>} />  
                    </div>
                </div>
                <div className="id" style={{marginTop:'35px'}}>
                    <div className="small-box-field">
                        <label className="label">Codigó internacional (+502,+503 etc)</label>
                        <input  className="input" {...register("mobileCode",{
                        required:{
                            value:true,
                            message:"Este campo es obligatorio."
                        },
                        pattern:{
                            value:/^\+(?:[0-9] ?){2,6}$/,
                            message:"El codigo telefonico es incorrecto"
                        }    
                    })}/>
                     <ErrorMessage errors={errors} name="mobileCode" render={({ message }) => <p className="error">{message}</p>} />   
                    </div>
                        <div className="meddium-box-field">
                            <label className="label">Numero telefonicó</label>
                            <input maxLength={8} className="input"{...register("phone", {
                                required:{
                                    value:true,
                                    message:"Este campo es obligatorio."
                                },
                                pattern:{
                                    value:/^[0-9]{8}$/,
                                    message:"El numero telefonicó es incorrecto"
                                }
                            })}/>
                        <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className="error">{message}</p>} />   
                        </div>            
                        <div className="meddium-box-field">
                            <label className="label">Numero telefonico de casa</label>
                            <input maxLength={8} className="input"{...register("phone_house")}/>
                        </div>
                </div>
                <div className="id" style={errors.mobileCode && { marginTop:'50px'}}>
                    <div className="meddium-box-field">
                        <label className="label">Número de identificación personal</label>
                        <input className="input" {...register("personalID",{
                            required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            }
                        })}/>
                        <ErrorMessage errors={errors} name="personalID" render={({ message }) => <p className="error">{message}</p>} /> 
                    </div>
                    <div className="meddium-box-field">
                        <label className="label">Número de pasaporte</label>
                        <input className="input"{...register("passport",{
                             required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            }
                        })}/>
                    <ErrorMessage errors={errors} name="passport" render={({ message }) => <p className="error">{message}</p>} />       
                    </div>
                </div>
                <div className="id">
                    <div className="meddium-box-field">
                        <label className="label">Número de tarjeta de crédito</label>
                        <input className="input"{...register("creditCard",{
                              required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            }
                        })}/>
                    <ErrorMessage errors={errors} name="creditCard" render={({ message }) => <p className="error">{message}</p>} />
                    </div>
                    <div className="meddium-box-field">
                        <label className="label">Fecha de caducidad de la tarjeta</label>
                        <input className="input" {...register("creditCardDue",{
                              required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            }
                        })}/>
                        <ErrorMessage errors={errors} name="creditCardDue" render={({ message }) => <p className="error">{message}</p>} />
                    </div>
                    <div className="small-box-field" style={{ marginTop:"0px"}}>
                        <label className="label">CVC</label>
                        <input maxLength={3} className="input" {...register("cvc",{
                              required:{
                                value:true,
                                message: "Este campo es obligatorio"
                            }
                        })}/>
                       
                       <ErrorMessage errors={errors} name="cvc" render={({ message }) => <p className="error">{message}</p>} /> 
                    </div>
                </div>
                <div className="id">
                    <div className="box-field">
                        <label className="label">Datos de emergencia</label>
                        <input  {...register("emergency")}  type='checkbox'/>
                    </div>
                </div>
               
                {watchShowFieldEmergency &&
                    <>
                    <h1>Contacto de emergencia</h1>
                        <div className="id">
                          <div className="box-field">
                              <label className="label"> Nombres </label>
                              <input className="input" {...register("firsNameEmergency", { 
                                  required:{
                                      value:watchShowFieldEmergency,
                                      message: "Este campo es obligatorio"
                                  },
                                  maxLength:{
                                      value: 25,
                                      message: "El largo del texto debe ser menor a 26 caracteres."
                                  }
                              
                              })}/>
                              <ErrorMessage errors={errors} name="firsNameEmergency" render={({ message }) => <p className="error">{message}</p>} />  
                          </div>
                          <div className="meddium-box-field" >
                              <label className="label"> Primer Apellido</label>
                              <input className="input" {...register("fatherLastNameEmergency", { 
                                  required:{
                                      value:watchShowFieldEmergency,
                                      message: "Este campo es obligatorio"
                                  },
                                  maxLength:{
                                      value: 25,
                                      message: "El largo del texto debe ser menor a 26 caracteres."
                                  }
                              
                              })}/>
                              <ErrorMessage errors={errors} name="fatherLastNameEmergency" render={({ message }) => <p className="error">{message}</p>} />  
                          </div>      
                      </div> 
                      <div className="id">
                        <div className="meddium-box-field" >
                              <label className="label"> Segundo Apellido</label>
                              <input className="input" {...register("motherLastNameEmergency", { 
                                  required:{
                                      value:watchShowFieldEmergency,
                                      message: "Este campo es obligatorio"
                                  },
                                  maxLength:{
                                      value: 25,
                                      message: "El largo del texto debe ser menor a 26 caracteres."
                                  }
                              
                              })}/>
                              <ErrorMessage errors={errors} name="motherLastNameEmergency" render={({ message }) => <p className="error">{message}</p>} />  
                        </div>  
                        <div className="small-box-field">
                            <label className="label">Fecha de nacimiento</label>
                            <input className="input" placeholder="DD/MM/AAAA" {...register("birthDateEmergency",{
                                required:{
                                    value:watchShowFieldEmergency,
                                    message: "Este campo es obligatorio."                   
                                }
                            })}/>
                            <ErrorMessage errors={errors} name="birthDateEmergency" render={({ message }) => <p className="error">{message}</p>} />  
                        </div> 
                        <div className="meddium-box-field" >
                            <label className="label">Correo Electronico</label>
                            <input className="input"  {...register("emailEmergency", { 
                                required:{
                                    value:watchShowFieldEmergency,
                                    message: "Este campo es obligatorió."
                                },
                                pattern:{
                                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Este correo no es valido."
                                }   
                            })}/>
                            <ErrorMessage errors={errors} name="emailEmergency" render={({ message }) => <p className="error">{message}</p>} />  
                        </div>
                      </div>
                        <div className="id">
                            <div className="meddium-box-field" >
                                <label className="label">Dirección</label>
                                <input className="input" {...register("addressEmergency", { 
                                    required:{
                                        value:watchShowFieldEmergency,
                                        message: "Este campo es obligatorio"
                                    }
                                })}/>
                                <ErrorMessage errors={errors} name="addressEmergency" render={({ message }) => <p className="error">{message}</p>} />  
                            </div>
                            <div className="small-box-field">
                                <label className="label">Codigó internacional (+502,+503 etc)</label>
                                <input  className="input" {...register("mobileCodeEmergency",{
                                required:{
                                    value:watchShowFieldEmergency,
                                    message:"Este campo es obligatorio."
                                },
                                pattern:{
                                    value:/^\+(?:[0-9] ?){2,6}$/,
                                    message:"El codigo telefonico es incorrecto"
                                }    
                            })}/>
                            <ErrorMessage errors={errors} name="mobileCodeEmergency" render={({ message }) => <p className="error">{message}</p>} />   
                            </div>
                            <div className="meddium-box-field">
                                <label className="label">Numero telefonicó</label>
                                <input  className="input"{...register("phoneEmergency", {
                                    required:{
                                        value:watchShowFieldEmergency,
                                        message:"Este campo es obligatorio."
                                    },
                                    pattern:{
                                        value:/^[0-9]{8}$/,
                                        message:"El numero telefonicó es incorrecto"
                                    }
                                })}/>
                                <ErrorMessage errors={errors} name="phoneEmergency" render={({ message }) => <p className="error">{message}</p>} />   
                            </div>  
                        </div>
                    </> 
                    }
                <div className="submit">
                    <input type={"submit"}/>
                </div>
            </form>
        </section>
       
    )
}