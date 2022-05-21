import React, { useState, useEffect } from 'react'
import { addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/bootstrap.min.css'
import '../css/font.css'
import '../css/plugins.css'
import '../css/style.css'
import Steps from './Steps/Steps'
import Steps1 from './Steps/Steps1'
import Steps2 from './Steps/Steps2'
import StepsConfirm from './Steps/StepsConfirm'
import firebaseApp from '../firebase';
import Swal from 'sweetalert2'

import imgLogo from '../images/atinaL.png'

const db = getFirestore(firebaseApp)

const FullPage = () => {
    const Swal = require('sweetalert2')
    const [page, setPage] = useState(1)
    const [loadingModal, setLoadingModal] = useState(false)


    const [errorTipo, setErrorTipo] = useState({

        //ERRORES DE VALIDACION PASO 1
        errorTipoPoliza: null,
        errorNombreTomador: null,
        errorSelectSeguro: null,


        //ERRORES DE VALIDACION PASO 2
        errorTitularBeneficiario: false,
        errorNombreTitularPoliza: false,
        errorApellidoTitularPoliza: false,
        errorCedulaTitular: false,
        errorEmailTitular: false,
        errorCelularTitular: false,
        errorNombreBeneficiarioPoliza: false,
        errorApellidoBeneficiarioPoliza: false,
        errorCedulaBeneficiario: false,
        errorEmailBeneficiario: false,
        errorCelularBeneficiario: false,

        //ERRORES DE VALIDACION PASO 3
        errorTipoReembolso: false,
        errorInformeMedico: false,
        errorRecipeIndicaciones: false,
        errorExamenesRealizados: false,
        errorFacturas: false,
        errorPatologiaDiagnostico: false,
        errorFechaOcurrencia: false,
        errorMontoTotal: false,

    })
    const [formStep1, setFormStep1] = useState({
        option: '',
        nombreTomador: '',
        selectSeguro: ''

    })
    const [formStep2, setFormStep2] = useState({
        option: '',
        nombreTitularPoliza: '',
        apellidoTitularPoliza: '',
        cedulaTitular: '',
        emailTitular: '',
        celularTitular: '',
        nombreBeneficiarioPoliza: '',
        apellidoBeneficiarioPoliza: '',
        cedulaBeneficiario: '',
        emailBeneficiario: '',
        celularBeneficiario: '',
    })
    const [formStep3, setFormStep3] = useState({
        option: '',
        informeMedico: '',
        recipeIndicaciones: '',
        examenesRealizados: '',
        facturas: '',
        patologiaDiagnostico: '',
        fechaOcurrencia: '',
        montoTotal: '',
    })



    const validateDataStep1 = () => {


        let isValid = true

        if (formStep1.option === '') {
            setErrorTipo({ errorTipoPoliza: true })
            isValid = false
        } else if (formStep1.selectSeguro === '' || formStep1.selectSeguro === 'Selecciona') {
            setErrorTipo({ errorSelectSeguro: true })
            isValid = false
        } else if (formStep1.nombreTomador === '' && formStep1.option === 'Colectiva') {
            setErrorTipo({ errorNombreTomador: true })
            isValid = false
        }
        return isValid
    }

    const validateDataStep2 = () => {


        let isValid = true

        if (formStep2.option === '') {
            setErrorTipo({ errorTitularBeneficiario: true })
            isValid = false
        } else if (formStep2.nombreTitularPoliza === '' && formStep2.option === 'titular') {
            setErrorTipo({ errorNombreTitularPoliza: true })
            isValid = false
        } else if (formStep2.apellidoTitularPoliza === '' && formStep2.option === 'titular') {
            setErrorTipo({ errorApellidoTitularPoliza: true })
            isValid = false
        } else if (formStep2.cedulaTitular === '' && formStep2.option === 'titular') {
            setErrorTipo({ errorCedulaTitular: true })
            isValid = false
        } else if (formStep2.emailTitular === '' && formStep2.option === 'titular') {
            setErrorTipo({ errorEmailTitular: true })
            isValid = false
        } else if (formStep2.celularTitular === '' && formStep2.option === 'titular') {
            setErrorTipo({ errorCelularTitular: true })
            isValid = false
        }

        if (formStep2.option === '') {
            setErrorTipo({ errorTitularBeneficiario: true })
            isValid = false
        } else if (formStep2.nombreTitularPoliza === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorNombreTitularPoliza: true })
            console.log('aquiiii')
            isValid = false
        } else if (formStep2.apellidoTitularPoliza === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorApellidoTitularPoliza: true })
            isValid = false
        } else if (formStep2.cedulaTitular === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorCedulaTitular: true })
            isValid = false
        } else if (formStep2.emailTitular === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorEmailTitular: true })
            isValid = false
        } else if (formStep2.celularTitular === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorCelularTitular: true })
            isValid = false
        } else if (formStep2.nombreBeneficiarioPoliza === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorNombreBeneficiarioPoliza: true })
            isValid = false
        } else if (formStep2.apellidoBeneficiarioPoliza === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorApellidoBeneficiarioPoliza: true })
            isValid = false
        } else if (formStep2.cedulaBeneficiario === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorCedulaBeneficiario: true })
            isValid = false
        } else if (formStep2.emailBeneficiario === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorEmailBeneficiario: true })
            isValid = false
        } else if (formStep2.celularBeneficiario === '' && formStep2.option === 'beneficiario') {
            setErrorTipo({ errorCelularBeneficiario: true })
            isValid = false
        }

        return isValid
    }
    const validateDataStep3 = () => {


        let isValid = true

        if (formStep3.option === '') {
            setErrorTipo({ errorTipoReembolso: true })
            isValid = false
        } else if (formStep3.option === 'Selecciona el tipo de reembolso') {
            setErrorTipo({ errorTipoReembolso: true })
            isValid = false
        }

        if (formStep3.option === 'Consulta médica' && formStep3.informeMedico === '') {
            setErrorTipo({ errorInformeMedico: true })
            isValid = false
        } else if (formStep3.option === 'Consulta médica' && formStep3.recipeIndicaciones === '') {
            setErrorTipo({ errorRecipeIndicaciones: true })
            isValid = false
        } else if (formStep3.option === 'Consulta médica' && formStep3.examenesRealizados === '') {
            setErrorTipo({ errorExamenesRealizados: true })
            isValid = false
        } else if (formStep3.option === 'Consulta médica' && formStep3.facturas === '') {
            setErrorTipo({ errorFacturas: true })
            isValid = false
        } else if (formStep3.option === 'Consulta médica' && formStep3.patologiaDiagnostico === '') {
            setErrorTipo({ errorPatologiaDiagnostico: true })
            isValid = false
        } else if (formStep3.option === 'Consulta médica' && formStep3.fechaOcurrencia === '') {
            setErrorTipo({ errorFechaOcurrencia: true })
            isValid = false
        } else if (formStep3.option === 'Consulta médica' && formStep3.montoTotal === '') {
            setErrorTipo({ errorMontoTotal: true })
            isValid = false
        }

        return isValid
    }


    const nextSteps = () => {
        if (page === 1) {
            if (!validateDataStep1()) { return }
            setPage((current) => current + 1)
        }
        if (page === 2) {
            if (!validateDataStep2()) { return }
            setPage((current) => current + 1)
        }
        if (page === 3) {
            if (!validateDataStep3()) { return }
            setPage((current) => current + 1)
        }


    }

    const sendData = () => {

        setLoadingModal(true)
        setTimeout(() => {
            setLoadingModal(false)
            Swal.fire(
                'Solicitud enviada',
                'You clicked the button!',

            )


        }, 2000);

        /*   setdata({ ...formStep1, ...formStep2, ...formStep3 }) */

        /*  try {
             addDoc(collection(db, 'Planillas'), {
                 Tipodepóliza: formStep1.option,
                 NombreDelTomador: formStep1.nombreTomador,
                 CompañíadeSeguros: formStep1.selectSeguro,
                 UstedEsTitularOBeneficiario: formStep2.option,
                 Nombredeltitulardelapóliza: formStep2.nombreTitularPoliza,
                 Appellidodeltitulardelapóliza: formStep2.apellidoTitularPoliza,
                 CéduladeidentidadTitular: formStep2.cedulaTitular,
                 CorreoElectrónicoTitular: formStep2.emailTitular,
                 NumeroTelefonoTitular: formStep2.celularTitular,
                 NombredelBeneficiariodelapóliza: formStep2.nombreBeneficiarioPoliza,
                 AppellidodelBeneficiariodelapóliza: formStep2.apellidoBeneficiarioPoliza,
                 CéduladeidentidadBeneficiario: formStep2.cedulaBeneficiario,
                 CorreoElectrónicoBeneficiario: formStep2.emailBeneficiario,
                 NumeroTelefonoBeneficiario: formStep2.celularBeneficiario,
                 InformeMédicoPDF: formStep3.informeMedico,
                 RécipeEindicaciones: formStep3.recipeIndicaciones,
                 ExámenesRealizados: formStep3.examenesRealizados,
                 Facturas: formStep3.facturas,
                 PatologíaoDiagnóstico: formStep3.patologiaDiagnostico,
                 Fechadeocurrencia: formStep3.fechaOcurrencia,
                 Monto: formStep3.montoTotal
             })
             alert('SE HA ENVIADO EL FORMULARIO ')
         } catch (error) {
             alert(error)
         } */
    }


    /* 
        const handleSend1 = (e) => {
    
            const target = e.target
            const name = target.name
            const value = target.value
            setFormStep1({
                ...formStep1,
                [name]: value
            })
    
            if (e.target.value === 'Colectiva') {
                setIsActiveColective(true)
            } else {
                setIsActiveColective(false)
            }
    
        } */


    useEffect(() => {
        console.log(errorTipo.errorTipoPoliza, errorTipo.errorNombreTomador, errorTipo.selectSeguro)
    }, [errorTipo.errorTipoPoliza, errorTipo.errorNombreTomador, errorTipo.selectSeguro])

    useEffect(() => {
        if (formStep1.option !== '') {
            setErrorTipo({ errorTipoPoliza: false })
        }
        if (formStep1.nombreTomador !== '') {
            setErrorTipo({ errorNombreTomador: false })
        }
        if (formStep1.selectSeguro !== '') {
            setErrorTipo({ errorSelectSeguro: false })
        }
        if (formStep2.option !== '') {
            setErrorTipo({ errorTitularBeneficiario: false })
        }
        if (formStep2.nombreTitularPoliza !== '' && formStep2.option === 'titular') {
            setErrorTipo({ errorNombreTitularPoliza: false })
        }
        if (formStep2.apellidoTitularPoliza !== '' && formStep2.option === 'titular') {
            setErrorTipo({ errorApellidoTitularPoliza: false })
        }
        if (formStep2.cedulaTitular !== '' && formStep2.option === 'titular') {
            setErrorTipo({ errorCedulaTitular: false })
        }
        if (formStep2.emailTitular !== '' && formStep2.option === 'titular') {
            setErrorTipo({ errorEmailTitular: false })
        }
        if (formStep2.celularTitular !== '' && formStep2.option === 'titular') {
            setErrorTipo({ errorCelularTitular: false })
        }

        if (formStep2.nombreBeneficiarioPoliza !== '') {
            setErrorTipo({ errorNombreBeneficiarioPoliza: false })
        }
        if (formStep2.apellidoBeneficiarioPoliza !== '') {
            setErrorTipo({ errorApellidoBeneficiarioPoliza: false })
        }
        if (formStep2.cedulaBeneficiario !== '') {
            setErrorTipo({ errorCedulaBeneficiario: false })
        }
        if (formStep2.emailBeneficiario !== '') {
            setErrorTipo({ errorEmailBeneficiario: false })
        }
        if (formStep2.celularBeneficiario !== '') {
            setErrorTipo({ errorCelularBeneficiario: false })
        }

        if (formStep3.option !== '') {
            setErrorTipo({ errorTipoReembolso: false })
        }

        if (formStep3.informeMedico !== '') {
            setErrorTipo({ errorInformeMedico: false })
        }

    }, [
        formStep1.option,
        formStep1.nombreTomador,
        formStep1.selectSeguro,
        formStep2.option,
        formStep2.nombreTitularPoliza,
        formStep2.apellidoTitularPoliza,
        formStep2.cedulaTitular,
        formStep2.emailTitular,
        formStep2.celularTitular,
        formStep2.nombreBeneficiarioPoliza,
        formStep2.apellidoBeneficiarioPoliza,
        formStep2.cedulaBeneficiario,
        formStep2.emailBeneficiario,
        formStep2.celularBeneficiario,
        formStep3.option,
        formStep3.informeMedico,
    ])

    useEffect(() => {
        console.log(

            formStep3.option
        )
    }, [
        ,
        formStep3.option,


    ])

    useEffect(() => {
        AOS.init({

            duration: 1000,
            easing: 'ease',
            once: false
        });


    })

    return (


        <>
            <div className="luna-loader-container">
                <div className="luna-loader"></div>
            </div>
            <div className='luna-signup-container' data-aos='zoom-in'>
                <div className="luna-signup-left-overlay"></div>
                <div className='container'>
                    <div className="row">
                        <div className='luna-signup-left'>
                            <img className='luna-signup-logo img-responsive'
                                src={imgLogo} alt="logo" />
                            <div className="luna-navigation">
                                <a
                                    style={{ display: page <= 1 && 'none' }}
                                    onClick={() => setPage((current) => current - 1)}
                                    className="toPrev ">
                                    <i className="icon icon-arrow-up2"></i>
                                </a>
                                <ul className="dots"></ul>
                                <a
                                    style={{ display: page >= 4 && 'none' }}
                                    onClick={() => setPage((current) => current + 1)} className="toNext ">
                                    <i className="icon icon-arrow-down2"></i>
                                </a>
                            </div>
                        </div>
                        <div className='luna-signup-right'>
                            <div className="container-fluid">
                                <div className='steps-count'>
                                    Paso <span className="step-current"> {page} </span>/<span className="step-count"> 4 </span>
                                </div>
                                <form name='signupForm' >
                                    <div className="luna-steps">
                                        {
                                            page === 1 && (

                                                <Steps
                                                    formStep1={formStep1}
                                                    setFormStep1={setFormStep1}
                                                    errorTipo={errorTipo}

                                                />
                                            )
                                        }
                                        {
                                            page === 2 && (
                                                <Steps1
                                                    setFormStep2={setFormStep2}
                                                    formStep2={formStep2}
                                                    errorTipo={errorTipo}
                                                />
                                            )
                                        }
                                        {
                                            page === 3 && (
                                                <Steps2
                                                    setFormStep3={setFormStep3}
                                                    formStep3={formStep3}
                                                    errorTipo={errorTipo}
                                                />
                                            )
                                        }
                                        {
                                            page === 4 && (
                                                <StepsConfirm
                                                    formStep1={formStep1}
                                                    formStep2={formStep2}
                                                    formStep3={formStep3}
                                                    sendData={sendData}
                                                    loadingModal={loadingModal}
                                                />
                                            )
                                        }
                                    </div>
                                </form>
                            </div>

                            <div class='button-container'>

                                <div style={{ display: page >= 4 && 'none' }} onClick={nextSteps} className="btn btn-blue ">
                                    Continuar
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullPage