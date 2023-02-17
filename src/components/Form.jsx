import React from 'react'
import { useForm } from 'react-hook-form'
import Table from './Table'


const Form = ({query, submit, isLoading}) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    return (
            <div>
                
                <div className='form'>
                    
                <form onSubmit={handleSubmit(submit)}>
                    <div className='form-container_data'>
                        <label htmlFor="date_1">Fecha inicial <b>*</b></label> <br />
                        <input {...register("fec_ini", {
                            required: true
                        })} type="date" id='date_1' placeholder='2022-12-09'/>
                        <div className='underline'></div>
                        {errors.fec_ini?.type === "required" && <p>La fecha inicial es requerida
                            <i className="fa-solid fa-circle-exclamation"></i></p>}
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="date_2">Fecha final <b>*</b> </label> <br />
                        <input {...register("fec_fin", {
                            required: true
                        })} type="date" id='date_2' />
                        <div className='underline'></div>
                        {errors.fec_fin?.type === "required" && <p>La fecha final es requerida
                        <i className="fa-solid fa-circle-exclamation"></i></p>}
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="num_tc">Numero tarjeta (opcional)</label> <br />
                        <input {...register("nro_tar")} type="text" id='num_tc'/>
                        <div className='underline'></div>
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="num_auth">Numero autorizacion (opcional)</label> <br />
                        <input {...register("nro_auth")} type="text" id='num_auth'/>
                        <div className='underline'></div>
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="num_recibo">Numero recibo (opcional)</label> <br />
                        <input {...register("nro_recibo")} type="text" id='num_recibo'/>
                        <div className='underline'></div>
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="cod_ref">Record (opcional)</label> <br />
                        <input {...register("cod_Ref", {
                            maxLength: 6
                        })} type="text" id='cod_ref'/>
                        <div className='underline'></div>
                        {errors.cod_Ref?.type === "maxLength" && <p>El record no puede tener mas de 6 caracteres</p>}
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="cod_resp">Codigo de respuesta (opcional)</label> <br />
                        <input {...register("cod_resp")} type="text" id='cod_resp'/>
                        <div className='underline'></div>
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="num_id">ID (opcional)</label> <br />
                        <input {...register("id")} type="text" id='num_id'/>
                        <div className='underline'></div>
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="agt_id">Agent ID <b>*</b></label> <br />
                        <input {...register("agent_id", {
                            required: true
                        })} type="text" id='agt_id' placeholder='AN2'/>
                        <div className='underline'></div>
                        {errors.agent_id?.type === "required" && <p>El codigo de agente es requerido
                        <i className="fa-solid fa-circle-exclamation"></i></p>}
                    </div>
        
                    <div className='form-container_data'>
                        <label htmlFor="flg_type">Flag Type <b>*</b></label> <br />
                        <input {...register("flag_type", {
                            required: true
                        })} type="text" id='flg_type' placeholder='T'/>
                        <div className='underline'></div>
                        {errors.flag_type?.type === "required" && <p>El codigo es requerido
                        <i className="fa-solid fa-circle-exclamation"></i></p>}
                    </div>
        
                    <button className="form_button"><b>Consultar</b></button>
        
                    <div className='form-header'>Filtros de busqueda</div>
                    </form>
                </div>
        
                
        
                <div className="table">
                    <Table query={query} isLoading={isLoading}/>
                </div>
        
            </div>
          )
}

export default Form