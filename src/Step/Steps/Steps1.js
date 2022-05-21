import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Steps1 = ({ formStep2, setFormStep2, errorTipo }) => {

    const [formValue, setFormValue] = useState('')
    const [isActiveTitular, setIsActiveTitular] = useState(false)
    const [isActiveBeneficiario, setIsActiveBeneficiario] = useState(false)



    useEffect(() => {
        if (formStep2.option === 'titular') {
            setIsActiveTitular(true)
        } else {
            setIsActiveTitular(false)
        }


        if (formStep2.option === 'beneficiario') {
            setIsActiveBeneficiario(true)
        } else {
            setIsActiveBeneficiario(false)
        }
    }, [formStep2.option])


    useEffect(() => {
        AOS.init({

            duration: 1000,
            easing: 'ease',
            once: false
        });


    })
    useEffect(() => {
        console.log('formStep2', formStep2.option)


    }, [formStep2.option])
    return (
        <>

            <div data-aos="fade-up">
                <h2 className="step-title">TRAMITACIÓN DE SINIESTROS
                    DE RECLAMOS HCM</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="step-label">Es usted el titular de la póliza?</div>
                            <label className="radio-inline">
                                <input type="radio" value="titular" onChange={e => setFormStep2({ ...formStep2, option: e.target.value })} name="op" />
                                Soy el titular
                            </label>
                            <label className="radio-inline">
                                <input type="radio" value="beneficiario" onChange={e => setFormStep2({ ...formStep2, option: e.target.value })} name="op" />
                                Soy Beneficiario
                            </label>


                        </div>
                        {
                            errorTipo.errorTitularBeneficiario === true &&
                            <span style={{ color: 'red' }}>
                                Debes Ingresar Un tipo
                            </span>
                        }
                    </div>
                </div>
                {/*  <div className="step-label_2">Datos del intermediario</div> */}
                {/*  <div className="row">

                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="formLabel" for="Codigo">Codigo</label>
                            <input type="text" className="formInput" id='Codigo' name="Codigo"
                            />
                        </div>
                    </div>
                </div>
 */}


                {
                    isActiveTitular && <>
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="form-group">


                                    <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorNombreTitularPoliza ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Nombre
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, nombreTitularPoliza: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre del titular de la póliza"
                                    />


                                    {/*  <input
                                        type="text"
                                        onChange={e => setFormStep2({ ...formStep2, nombreTitularPoliza: e.target.value })}
                                        className="form-control"
                                        placeholder="Nombre del titular de la póliza"
                                    /> */}

                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorApellidoTitularPoliza ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Apellido
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, apellidoTitularPoliza: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Apellido del titular de la póliza"
                                    />

                                    {/*  <input 
                                    onChange={e => setFormStep2({ ...formStep2, apellidoTitularPoliza: e.target.value })} 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Apellido del titular de la póliza" 
                                    /> */}
                                </div>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorCedulaTitular ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Cédula
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, cedulaTitular: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Cédula de identidad del titular"
                                    />



                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorEmailTitular ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Correo
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, emailTitular: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico del titular"
                                    />




                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorCelularTitular ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Numero
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, celularTitular: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Numero de telefono"
                                    />




                                </div>

                            </div>
                        </div></>

                }

                {
                    isActiveBeneficiario &&
                    <>
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorNombreTitularPoliza ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Nombre del titular de la póliza
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, nombreTitularPoliza: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre del titular de la póliza"
                                    />




                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">

                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorApellidoTitularPoliza ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Apellido
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, apellidoTitularPoliza: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Apellido del titular de la póliza"
                                    />




                                </div>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorCedulaTitular ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Cédula
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, cedulaTitular: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Cédula de identidad"
                                    />

                                </div>


                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorEmailTitular ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Correo electrónico
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, emailTitular: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico"
                                    />

                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorCelularTitular ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Celular con WSP
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, celularTitular: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico"
                                    />
                                </div>


                            </div>
                        </div>

                        <div className="row">

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorNombreBeneficiarioPoliza ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Nombre del beneficiario
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, nombreBeneficiarioPoliza: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Nombre del beneficiario de la póliza"
                                    />


                                </div>


                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorApellidoBeneficiarioPoliza ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Apellido del beneficiario de la póliza
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, apellidoBeneficiarioPoliza: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Apellido del beneficiario de la póliza"
                                    />


                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorCedulaBeneficiario ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Cédula de identidad del beneficiario
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, cedulaBeneficiario: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Cédula de identidad del beneficiario"
                                    />

                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorEmailBeneficiario ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    Cédula de identidad del beneficiario
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, emailBeneficiario: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Correo electrónico del beneficiario"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label
                                        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                        {
                                            errorTipo.errorCelularBeneficiario ?
                                                <span style={{ color: 'red' }}>
                                                    Obligatorio
                                                </span>
                                                :
                                                <span >
                                                    "Celular con WSP del beneficiario
                                                </span>
                                        }
                                    </label>
                                    <input
                                        onChange={e => setFormStep2({ ...formStep2, celularBeneficiario: e.target.value })}
                                        class="
                                        appearance-none 
                                        block 
                                        w-full 
                                        bg-gray-200 
                                        text-gray-700 
                                        border border-gray-200 
                                         rounded 
                                         py-3 
                                         px-4 
                                         leading-tight 
                                         focus:outline-none
                                          focus:bg-white 
                                          focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Celular con WSP del beneficiario"
                                    />


                                </div>

                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Steps1