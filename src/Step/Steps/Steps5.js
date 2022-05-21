import React from 'react'

const Steps5 = () => {
    return (
        <>
            <div className="step" data-step-id='6'>
                <h2 className="step-title_title">Datos de la Domiciliación del Pago</h2>

                <div className="step-label_botton">Estos datos sólo deben ser llenados en caso de no
                    estar Domiciliado o para la Actualización de Datos
                </div>
                <div className="step-label_banco">
                    Declaro que los datos de la Cuenta Bancaria corresponden al titular de la Póliza
                    indicado en esta planilla
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="step-label">Banco</div>
                            <select id='country' name="country" className="selectpicker form-control">
                                <option>Selecciona el banco</option>
                                <option>Banco de Venezuela S.A.</option>
                                <option>Venezolano de Crédito S.A.</option>
                                <option>Banco Mercantil, C.A</option>
                                <option>Banco Provincial, S.A.</option>
                                <option>Bancaribe C.A.</option>
                                <option>Banco Exterior C.A.</option>
                                <option>Banco Occidental de Descuento, C.A.</option>
                                <option>Banco Caroní C.A.</option>
                                <option>Banesco S.A.C.A.</option>
                                <option>Banco Sofitasa C.A.</option>
                                <option>Banco Plaza C.A.</option>
                                <option>BFC Banco Fondo Común C.A.</option>
                                <option>100% Banco, C.A.</option>
                                <option>DelSur, C.A.</option>
                                <option>Banco del Tesoro, C.A.</option>
                                <option>Banco Agrícola de Venezuela, C.A</option>
                                <option>Bancrecer, S.A.</option>
                                <option>Mi Banco C.A.</option>
                                <option>Banco Activo, C.A.</option>
                                <option>Bancamiga, C.A.</option>
                                <option>Banplus, C.A.</option>
                                <option>Banco Bicentenario C.A.</option>
                                <option>Banco de la Fuerza Armada Nacional Bolivariana</option>
                                <option>Banco Nacional de Crédito, C.A.</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="step-label">Tipo de cuenta</div>
                            <label className="radio-inline"><input type="radio" value="Corriente"
                                name="gender" /> Corriente </label>
                            <label className="radio-inline"><input type="radio" value="Ahorro"
                                name="gender" /> Ahorro </label>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="formLabel" >Ciudad</label>
                            <input type="text" className="formInput" id='name' name="name"
                                  />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="formLabel">Date of Birth</label>
                            <input type="text" className="formInput datepicker" id='birthdate'
                                name="birthdate"   />
                        </div>
                    </div>
                </div>
                <div className="font-classSIZE">
                    Datos del Asegurado: Declaro que las informaciones y documentos suministrados al
                    Asegurador, son verdaderas, completas y servirán de base para el cálculo de la
                    indemnización aquí solicitada, siempre que los gastos ocasionados estén
                    cubiertos por la Póliza, en caso de que proceda el reembolso y sea efectuado el
                    pago, Mercantil
                    Seguros, C.A. quedará hasta por el monto indemnizado liberado de la obligación a
                    su cargo, otorgándole el Finiquito de Ley.
                    Autorizo a los médicos y al instituto de hospitalización a proporcionar sin
                    reservas la información solicitada en esta planilla, así como cualquier
                    información adicional que
                    el Asegurador estime conveniente solicitar. Asimismo doy fe que las actividades
                    económicas desarrolladas por mi corresponden a una fuente licita.
                </div>
                <div className="font-classSIZE">
                    Mercantil Seguros, C.A. – RIF: J-000901805 – NIT: 00000-185-6-2. Inscrita en el
                    Registro Mercantil Primero de la Circunscripción Judicial del Distrito Federal y
                    Estado Miranda, el 20-02-1974,
                    bajo el Nro. 66, Tomo 7-A, autorizada por la Superintendencia de la Actividad
                    Aseguradora del Ministerio del Poder Popular de Economía y Finanzas, bajo el
                    Nro. 74. Dirección Sede Principal: Av.
                    Libertador C/A Isaías “Látigo” Chávez, Edif. Seguros Mercantil, piso 6, Urb.
                    Chacao, Z.P. 1060, Caracas - República Bolivariana de Venezuela. Telf. (0212)
                    276.2000. Apartado 61.618 (del Este)
                    Z.P. 1060, Direc. Cable “Censeca”. Télex 24119. Dirección Internet
                    www.mercantilseguros.com
                </div>


            </div>
        </>
    )
}

export default Steps5