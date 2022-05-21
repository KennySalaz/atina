import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/bootstrap.min.css'
import '../../css/font.css'
import '../../css/plugins.css'
import '../../css/style.css'




const Steps2 = ({ setFormStep3, formStep3, errorTipo }) => {


    const [options, setOptions] = useState(false)
    const [options2, setOptions2] = useState(false)
    const [options3, setOptions3] = useState(false)
    const [options4, setOptions4] = useState(false)

    useEffect(() => {

        if (formStep3.option === 'Consulta médica') {
            setOptions(true)
        } else {
            setOptions(false)
        }


        if (formStep3.option === 'Fármacos') {
            setOptions2(true)
        } else {
            setOptions2(false)
        }
        if (formStep3.option === 'Sesiones de rehabilitación, terapias, fisioterapia') {
            setOptions3(true)
        } else {
            setOptions3(false)
        }
        if (formStep3.option === 'Emergencia') {
            setOptions4(true)
        } else {
            setOptions4(false)
        }
    }, [formStep3.option])
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
                {/*    <h2 className="step-title">Tipo de reembolso</h2> */}
                <div className="col-sm-12">
                    <div className="form-group">
                        <select onChange={e => setFormStep3({ ...formStep3, option: e.target.value })} className="form-control">
                            <option>Selecciona el tipo de reembolso  </option>
                            <option>Consulta médica</option>
                            <option>Fármacos</option>
                            <option>Sesiones de rehabilitación, terapias, fisioterapia</option>
                            <option>Emergencia</option>
                        </select>
                    </div>


                    {
                        errorTipo.errorTipoReembolso === true &&
                        <span style={{ color: 'red' }}>
                            Obligatorio
                        </span>
                    }
                </div>




                {
                    options && <>

                        <div className='row'>
                            <div className="col-sm-6">
                                <div className="col-sm-12">
                                    <div className="step-label">Informe médico</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, informeMedico: e.target.value })} />
                                    </div>

                                    {
                                        errorTipo.errorInformeMedico === true &&
                                        <span style={{ color: 'red' }}>
                                            Obligatorio
                                        </span>
                                    }
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, recipeIndicaciones: e.target.value })} />
                                    </div>
                                    {
                                        errorTipo.errorRecipeIndicaciones === true &&
                                        <span style={{ color: 'red' }}>
                                            Obligatorio
                                        </span>
                                    }
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Exámenes realizados opcional</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, examenesRealizados: e.target.value })} />
                                    </div>
                                    {
                                        errorTipo.errorExamenesRealizados === true &&
                                        <span style={{ color: 'red' }}>
                                            Obligatorio
                                        </span>
                                    }
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, facturas: e.target.value })} />
                                    </div>
                                    {
                                        errorTipo.errorFacturas === true &&
                                        <span style={{ color: 'red' }}>
                                            Obligatorio
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div className="col-sm-12">
                                    <div className="step-label">Patología o Diagnóstico</div>
                                    <div className="form-group">


                                        <input onChange={e => setFormStep3({ ...formStep3, patologiaDiagnostico: e.target.value })} type="text" class="form-control" placeholder="Patología o Diagnóstico" />
                                    </div>
                                    {
                                        errorTipo.errorPatologiaDiagnostico === true &&
                                        <span style={{ color: 'red' }}>
                                            Obligatorio
                                        </span>
                                    }
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Fecha de ocurrencia</div>


                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker1'>
                                            <input type='text' class="form-control" onChange={e => setFormStep3({ ...formStep3, fechaOcurrencia: e.target.value })} />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                        {
                                        errorTipo.errorFechaOcurrencia === true &&
                                        <span style={{ color: 'red' }}>
                                            Obligatorio
                                        </span>
                                    }
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Monto total del reembolso (Bss)</div>
                                    <div className="form-group">

                                        <input type="text" class="form-control" placeholder="Bs" onChange={e => setFormStep3({ ...formStep3, montoTotal: e.target.value })} />
                                    </div>
                                    {
                                        errorTipo.errorMontoTotal === true &&
                                        <span style={{ color: 'red' }}>
                                            Obligatorio
                                        </span>
                                    }
                                </div>
                            </div>

                        </div>


                    </>
                }
                {
                    options2 && <>
                        <div className='row'>
                            <div className="col-sm-6">
                                <div className="col-sm-12">
                                    <div className="step-label">Informe médico con referencia medica</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, informeMedico: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, recipeIndicaciones: e.target.value })} />
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="step-label">Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, facturas: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div className="col-sm-12">
                                    <div className="step-label">Patología o Diagnóstico</div>
                                    <div className="form-group">


                                        <input onChange={e => setFormStep3({ ...formStep3, patologiaDiagnostico: e.target.value })} type="text" class="form-control" placeholder="Patología o Diagnóstico" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Fecha de ocurrencia</div>


                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker1'>
                                            <input type='text' class="form-control" onChange={e => setFormStep3({ ...formStep3, fechaOcurrencia: e.target.value })} />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Monto total del reembolso (Bss)</div>
                                    <div className="form-group">

                                        <input type="text" class="form-control" placeholder="Bs" onChange={e => setFormStep3({ ...formStep3, montoTotal: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                }
                {
                    options3 && <>

                        <div className='row'>
                            <div className="col-sm-6">
                                <div className="col-sm-12">
                                    <div className="step-label">Informe médico</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, informeMedico: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label"> indicaciones (Sesiones de rehabilitación, terapias, fisioterapia)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, recipeIndicaciones: e.target.value })} />
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="step-label"> Facturas (Con los requerimientos del Seniat y sello húmedo de pagado)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, facturas: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div className="col-sm-12">
                                    <div className="step-label">Patología o Diagnóstico</div>
                                    <div className="form-group">


                                        <input onChange={e => setFormStep3({ ...formStep3, patologiaDiagnostico: e.target.value })} type="text" class="form-control" placeholder="Patología o Diagnóstico" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Fecha de ocurrencia</div>


                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker1'>
                                            <input type='text' class="form-control" onChange={e => setFormStep3({ ...formStep3, fechaOcurrencia: e.target.value })} />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Monto total del reembolso (Bss)</div>
                                    <div className="form-group">

                                        <input type="text" class="form-control" placeholder="Bs" onChange={e => setFormStep3({ ...formStep3, montoTotal: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                }
                {
                    options4 && <>
                        <div className='row'>
                            <div className="col-sm-6">
                                <div className="col-sm-12">
                                    <div className="step-label">Informe médico</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, informeMedico: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Récipe e indicaciones (Fármacos/tratamiento)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, recipeIndicaciones: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Exámenes realizados opcional</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, examenesRealizados: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Facturas con su respectivo desglose (Con los requerimientos del Seniat y
                                        sello húmedo de pagado)</div>
                                    <div className="form-group">

                                        <input type="file" onChange={e => setFormStep3({ ...formStep3, facturas: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">

                                <div className="col-sm-12">
                                    <div className="step-label">Patología o Diagnóstico</div>
                                    <div className="form-group">


                                        <input onChange={e => setFormStep3({ ...formStep3, patologiaDiagnostico: e.target.value })} type="text" class="form-control" placeholder="Patología o Diagnóstico" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Fecha de ocurrencia</div>


                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker1'>
                                            <input type='text' class="form-control" onChange={e => setFormStep3({ ...formStep3, fechaOcurrencia: e.target.value })} />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="step-label">Monto total del reembolso (Bss)</div>
                                    <div className="form-group">

                                        <input type="text" class="form-control" placeholder="Bs" onChange={e => setFormStep3({ ...formStep3, montoTotal: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                }

                <h6 style={{ padding: '17px' }} >

                    Información necesaria y documentos a anexar (Los documentos deben estar en
                    formato .PDF y debidamente identificados con tipo de documento y su nombre y
                    apellido)
                </h6>





            </div>
        </>
    )
}

export default Steps2