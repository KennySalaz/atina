import React from 'react'

const Steps3 = () => {
  return (
    <>
      <div className="step" data-step-id='4'>
        <h2 className="step-title">Datos de solicitud de carta Aval</h2>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="formLabel">Clinica donde recibe el
                tratamiento</label>
              <input type="text" className="formInput" id='clinicaName' name="clinicaName"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="formLabel" >Monto del
                presupuesto</label>
              <input type="text" className="formInput" id='motoPresupuesto'
                name="motoPresupuesto" />
            </div>
          </div>

        </div>
        <div className="row">
          <div className="step-label_2">Documento a consignar para el tramite de Carta Aval
          </div>

          <div className="col-sm-4">
            <div className="form-group deleteMrgin">

              <label className="radio-inline"><input type="radio" value="Copia Ampliada de la Cedula de identidad
                                                    Titular o Beneficiario" name="gender" /> Copia Ampliada de la
                Cedula de identidad
                Titular o Beneficiario </label>
              <label className="radio-inline"><input type="radio" value="Presupuesto"
                name="gender" /> Presupuesto</label>
              <label className="radio-inline"><input type="radio" value="Informe medico"
                name="gender" /> Informe medico </label>

              <label className="radio-inline"><input type="radio"
                value="Resonancia Magentica" name="gender" /> Resonancia Magentica
              </label>
              <label className="radio-inline"><input type="radio" value="Radioterapia"
                name="gender" /> Radioterapia </label>




            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group deleteMrgin">
              <label className="radio-inline"><input type="radio" value="Radioterapia"
                name="gender" /> Radioterapia </label>
              <label className="radio-inline"><input type="radio" value="Rehabilitacion"
                name="gender" /> Rehabilitacion </label>

              <label className="radio-inline"><input type="radio" value="Urografias"
                name="gender" /> Urografias </label>
              <br />
              <label className="radio-inline"><input type="radio" value="Citologias"
                name="gender" /> Citologias </label>
              <label className="radio-inline"><input type="radio"
                value="Examenes de laboratorio" name="gender" /> Examenes de
                laboratorio </label>

            </div>

          </div>

          <div className="col-sm-4">
            <div className="form-group">
              <label className="radio-inline"><input type="radio" value="Biopsias"
                name="gender" /> Biopsias </label>
              <label className="radio-inline"><input type="radio" value="Ecosonogramas"
                name="gender" /> Ecosonogramas </label>
              <label className="radio-inline"><input type="radio" value="Quimioterapia"
                name="gender" /> Quimioterapia </label>
              <label className="radio-inline"><input type="radio" value="Radiografias"
                name="gender" /> Radiografias </label>
              <br />

              <label className="radio-inline"><input type="radio" value="Otros"
                name="gender" /> Otros </label>
            </div>

          </div>


        </div>


      </div>
    </>
  )
}

export default Steps3