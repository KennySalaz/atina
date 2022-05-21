import React from 'react'

const Steps4 = () => {
    return (
        <>
            <div className="step" data-step-id='5'>
                <h2 className="step-title_title">Carta Aval/Reembolso</h2>

                <div className="step-label_botton">Para los Casos de Reconsideración y Complementario
                    indique el Nro. de Siniestro.
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="formLabel" >Clinica donde recibe el
                                tratamiento</label>
                            <input type="text" className="formInput" id='ClinicaRecibe'
                                name="ClinicaRecibe" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="formLabel" >Monto del
                                presupuesto</label>
                            <input type="text" className="formInput" id='PresupuestoName'
                                name="PresupuestoName" />
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="row">

                        <div className="col-sm-12 pl-2">

                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label className="formLabel">Sinistro N.:</label>
                                    <input type="text" className="formInput" id='sinistro'
                                        name="sinistro" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="formLabel"
                                        >Observaciones:</label>
                                    <input type="text" className="formInput" id='observacion'
                                        name="observacion" />
                                </div>
                            </div>


                        </div>
                        <div className="col-sm-12">

                            <div className="col-sm-4">

                                <div className="form-group deleteMrgin">
                                    <label className="radio-inline"><input type="radio"
                                        value="Reconsideración por:" name="gender"  />
                                        Reconsideración por: </label>
                                    <label className="radio-inline"><input type="radio"
                                        value=" Gastos no Cubiertos" name="gender" /> Gastos no
                                        Cubiertos</label>
                                    <label className="radio-inline"><input type="radio" value="Rechazo"
                                        name="gender" /> Rechazo </label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group deleteMrgin">
                                    <label className="radio-inline"><input type="radio"
                                        value="2da. opinión médica (Solo Carta Aval)"
                                        name="gender" /> 2da. opinión médica (Solo Carta Aval)
                                    </label>
                                    <label className="radio-inline"><input type="radio"
                                        value="Siniestro Complementario" name="gender" />
                                        Siniestro Complementario </label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="radio-inline"><input type="radio"
                                        value="Entrega de Recaudos" name="gender" />Entrega de
                                        Recaudos </label>
                                    <label className="radio-inline"><input type="radio" value="Otros"
                                        name="gender" />Otros </label>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Steps4