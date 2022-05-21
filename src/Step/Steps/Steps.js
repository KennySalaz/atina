import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Steps = ({ formStep1, setFormStep1, handleSend1, errorTipo }) => {

    const [isActiveColective, setIsActiveColective] = useState(false)
    useEffect(() => {

        if (formStep1.option === 'Colectiva') {
            setIsActiveColective(true)
        } else if (formStep1.option === 'Individual') {
            setIsActiveColective(false)
        }
    }, [formStep1.option])

    useEffect(() => {
        AOS.init({

            duration: 1000,
            easing: 'ease',
            once: false
        });


    })

    useEffect(() => {
        console.log(formStep1.selectSeguro)


    }, [])

    return (
        <div data-aos="fade-up" >
            <h2 className="step-title">  Tipo de póliza y compañía de seguros</h2>
            <div className="row">
                <div className="col-sm-6">


                    <div className="form-group">


                       {/*  <div class="flex justify-space-around">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input form-check-input appearance-none rounded-full h-8 w-8 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Individual</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input form-check-input appearance-none rounded-full h-8 w-8 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">Colectiva</label>
                            </div>
                           
                        </div> */}
                        {/* <div class="form-check">
                            <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                                Individual
                            </label>
                            <input onChange={e => setFormStep1({ ...formStep1, option: e.target.value })} value='Individual' class="form-check-input appearance-none rounded-full h-8 w-8 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="Individual" />

                        </div>
 */}


                        {/*    <div className="step-label">Tipo de póliza</div> */}
                        <label className="radio-inline">
                            <input type="radio" value="Individual"
                                name="op" onChange={e => setFormStep1({ ...formStep1, option: e.target.value })} />
                            Individual
                        </label>
                        <label className="radio-inline">
                            <input type="radio" value="Colectiva" name='op' onChange={e => setFormStep1({ ...formStep1, option: e.target.value })}
                            />
                            Colectiva
                        </label>
                        {
                            errorTipo.errorTipoPoliza === true &&
                            <span style={{ color: 'red' }}>
                                Obligarotio
                            </span>
                        }
                    </div>
                </div>
                {
                    isActiveColective && (
                        <div data-aos="fade-left" className="col-sm-6">
                            <div className="form-group">

                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
                                    {
                                        errorTipo.errorNombreTomador ?
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
                                    onChange={e => setFormStep1({ ...formStep1, nombreTomador: e.target.value })}
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
                                    placeholder="Nombre del Tomador"
                                />



                            </div>

                        </div>
                    )
                }
            </div>
            <div className="col-sm-12">
                <label
                    class="block uppercase tracking-wide text-gray-400 text-md font-bold mb-2" for="grid-last-name">
                    {
                        errorTipo.errorSelectSeguro ?
                            <span style={{ color: 'red' }}>
                                Obligatorio
                            </span>
                            :
                            <span >
                                Compañía de Seguros
                            </span>
                    }
                </label>
                <select onChange={e => setFormStep1({ ...formStep1, selectSeguro: e.target.value })} class="form-select appearance-none block w-full px-5 py-4 text-md font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option value={'Selecciona'}>Selecciona </option>
                    <option value={'Mercantil Seguros'}>Mercantil Seguros</option>
                    <option value={'Mapfre'}>Mapfre</option>
                    <option value={'Seguros Caracas'}>Seguros Caracas</option>
                    <option value={'Seguros Venezuela'}>Seguros Venezuela</option>
                    <option value={'Pirámide'}>Pirámide</option>
                    <option value={'Oceánica'}>Oceánica</option>
                    <option value={'Real Seguros'}>Real Seguros</option>
                    <option value={'La Internacional'}>La Internacional</option>
                    <option value={'Asistensi'}>Asistensi</option>
                </select>
                {/* 
                <div className="form-group">
                    <div className="step-label">Compañía de Seguros</div>
                    <select id='country' name="country" onChange={e => setFormStep1({ ...formStep1, selectSeguro: e.target.value })} className="selectpicker form-control">
                        <option>Selecciona </option>
                        <option>Mercantil Seguros</option>
                        <option>Mapfre</option>
                        <option>Seguros Caracas</option>
                        <option>Seguros Venezuela</option>
                        <option>Pirámide</option>
                        <option>Oceánica</option>
                        <option>Real Seguros</option>
                        <option>La Internacional</option>
                        <option>Asistensi</option>
                    </select>
                    {
                        errorTipo.errorSelectSeguro === true &&
                        <span style={{ color: 'red' }}>
                            Obligarotio
                        </span>
                    }
                </div> */}

            </div>

        </div>
    )
}

export default Steps