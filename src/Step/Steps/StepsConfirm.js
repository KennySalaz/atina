import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../../Componentes/Modal';


const StepsConfirm = ({ formStep1, formStep2, formStep3, sendData,loadingModal }) => {










    useEffect(() => {
        AOS.init({

            duration: 1000,
            easing: 'ease',
            once: false
        });


    })

    return (
        <>
            <div data-aos="fade-up" >
                <h2 className="step-title">Confirmar Datos </h2>
                <div className="fadeTop">
                    <h3 className="step-sub-title">Tipo de póliza</h3>
                </div>
                <Modal loadingModal={loadingModal} />
                {
                    formStep1.option !== '' && (
                        <div className="row fadeTop">

                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Tipo de póliza
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text">

                                {formStep1.option}
                            </div>



                        </div>
                    )
                }


                {
                    formStep1.nombreTomador !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre Del Tomador
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">
                                {formStep1.nombreTomador}
                            </div>
                        </div>
                    )
                }

                {
                    formStep1.selectSeguro !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Compañia de seguro</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">

                                {formStep1.selectSeguro}
                            </div>
                        </div>
                    )
                }



                {
                    formStep2.option !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Titular o Beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12 confirm-text ">
                                {formStep2.option}
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.nombreTitularPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del Titular de la Poliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.nombreTitularPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.apellidoTitularPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del titular de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.apellidoTitularPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.cedulaTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.cedulaTitular
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.emailTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Correo electrónico del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.emailTitular
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.celularTitular !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Celular con WSP del titular</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.celularTitular
                                }
                            </div>
                        </div>
                    )
                }

                {
                    formStep2.nombreBeneficiarioPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Nombre del beneficiario de la póliza </div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.nombreBeneficiarioPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.apellidoBeneficiarioPoliza !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Apellido del beneficiario de la póliza</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.apellidoBeneficiarioPoliza
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.cedulaBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Cédula de identidad del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.cedulaBeneficiario
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.emailBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Correo electrónico del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.emailBeneficiario
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep2.celularBeneficiario !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Celular con WSP del beneficiario</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep2.celularBeneficiario
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.option !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Tipo de Reembolso</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.option
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.informeMedico !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Informe médico</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.informeMedico
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.recipeIndicaciones !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Récipe e indicaciones</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.recipeIndicaciones
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.examenesRealizados !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Exámenes realizados</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.examenesRealizados
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.facturas !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Facturas </div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.facturas
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.patologiaDiagnostico !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Patología o Diagnóstico</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.patologiaDiagnostico
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.fechaOcurrencia !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Fecha de ocurrencia</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.fechaOcurrencia
                                }
                            </div>
                        </div>
                    )
                }
                {
                    formStep3.montoTotal !== '' && (
                        <div className="row fadeTop">
                            <div className="col-md-4 col-sm-6 col-xs-12  confirm-label">Monto</div>
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                {
                                    formStep3.montoTotal
                                }
                            </div>
                        </div>
                    )
                }
             

                {/*   <div className="fadeTop">
                    <h3 className="step-sub-title">Datos del Titular / Beneficiario</h3>
                </div>

 */}












                <div className="fadeTop">
                    <div className="">
                        {/* <div>
                            <label className="checkbox-inline agreement">
                                <input id="agreement" name="agreement" type="checkbox" />I agree to
                                the <a href="#" target="_blank">terms of service</a>.
                            </label>
                        </div> */}
                        <button onClick={sendData} className='btn btn-green btn-rounded'>Enviar</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StepsConfirm