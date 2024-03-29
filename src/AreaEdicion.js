import React, { Component } from 'react';
import {Form} from 'react-formio';
import './AreaEdicion.css';
import moment from 'moment';
/*
import { prueba } from './formularios/Prueba.json';
import { agendamiento } from './formularios/Tipificacion_Agendamiento.json';
import { seguimiento } from './formularios/Tipificacion_casos_en_seguimiento.json';

*/
class AreaEdicion extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       ficha_S2_id:"",
       ficha_C_T_id:"",
       ficha_nro_gestion:"",
       ficha_estado:"",
       expandida: false,
       formulario:"detalleLLamada",
       detalleLLamada:""

     }

     this.ocultarfomrulario=this.ocultarfomrulario.bind(this)
     this.mostrarfomrulario=this.mostrarfomrulario.bind(this)
     
     
  }

  actualizarformularios(nuevoFormulario){
    
    console.log(nuevoFormulario.formulario[0])
      this.setState({caso_ES:nuevoFormulario.formulario[0].caso_ES});
      //ACTUALIZO ESTADO DEL AREA DE EDICION
       this.setState({ficha_S2_id:nuevoFormulario.formulario[0].ficha.caso_ES});
       this.setState({ficha_C_T_id:nuevoFormulario.formulario[0].ficha.caso_CAM});
       this.setState({ficha_nro_gestion:nuevoFormulario.formulario[0].ficha.nro_gestion});
       if(nuevoFormulario.formulario[0].ficha.estado_proceso=="nuevo"){
            this.setState({ficha_estado:"nuevo"});
        }else if(nuevoFormulario.formulario[0].ficha.estado_proceso=="en gestion"){
            this.setState({ficha_estado:"en_gestion"});
        }
       

      
      this.setState({formulario:""});
      this.setState({formulario:"detalleLLamada"});
      
      const f=nuevoFormulario.formulario[0].datosFormulario
      const newForm=detalleLLamada 
      //PESTAÑA INFO CLIENTE = detalleLLamada.components[0].components[0]
      newForm.components[0].components[0].components[0].columns[0].components[0].defaultValue=f.doc_nu_documento
      newForm.components[0].components[0].components[0].columns[0].components[1].defaultValue=f.doc_nombre+" "+f.Ap_paterno+" "+f.doc_Ap_materno
      newForm.components[0].components[0].components[0].columns[0].components[2].defaultValue=f.doc_nu_telefono

      newForm.components[0].components[0].components[0].columns[1].components[0].defaultValue=f.doc_nucotizacion
      newForm.components[0].components[0].components[0].columns[1].components[1].defaultValue=f.doc_version
      newForm.components[0].components[0].components[0].columns[1].components[2].defaultValue=f.doc_lugaratencion

      newForm.components[0].components[0].components[1].columns[0].components[0].defaultValue=f.doc_no_correo
      newForm.components[0].components[0].components[1].columns[1].components[0].defaultValue=f.doc_co_comuna
      newForm.components[0].components[0].components[1].columns[2].components[0].defaultValue=f.doc_no_direccion
      //PESTAÑA INFORMACION COMPLEMENTARIA = newForm.components[0].components[1] 
      //VEHICULO EN PARTE DE PAGO
      newForm.components[0].components[1].components[0].components[0].columns[0].components[0].defaultValue=f.doc_Retoma_no_patente
      newForm.components[0].components[1].components[0].components[0].columns[0].components[1].defaultValue=f.doc_Retoma_no_version
      newForm.components[0].components[1].components[0].components[0].columns[1].components[0].defaultValue=f.doc_Retoma_no_modelo
      newForm.components[0].components[1].components[0].components[0].columns[1].components[1].defaultValue=f.doc_Retoma_nu_anio
      newForm.components[0].components[1].components[0].components[0].columns[2].components[0].defaultValue=f.doc_Retoma_no_marca
      newForm.components[0].components[1].components[0].components[0].columns[2].components[1].defaultValue=f.doc_Retoma_ValorRetoma
      //CREDITO
      newForm.components[0].components[1].components[1].components[0].columns[0].components[0].defaultValue=f.doc_Credito_Tipo
      newForm.components[0].components[1].components[1].components[0].columns[0].components[1].defaultValue=f.doc_Credito_TotalaFinanciar
      newForm.components[0].components[1].components[1].components[0].columns[0].components[2].defaultValue=f.doc_Credito_Saldo
      newForm.components[0].components[1].components[1].components[0].columns[1].components[0].defaultValue=f.doc_Credito_MontoPie
      newForm.components[0].components[1].components[1].components[0].columns[1].components[1].defaultValue=f.doc_Credito_ValorCuota
      newForm.components[0].components[1].components[1].components[0].columns[1].components[2].defaultValue=f.doc_Credito_CAE
      newForm.components[0].components[1].components[1].components[0].columns[2].components[0].defaultValue=f.doc_Credito_Cuotas
      newForm.components[0].components[1].components[1].components[0].columns[2].components[1].defaultValue=f.doc_Credito_CostoTotal
      //SEURO
      newForm.components[0].components[1].components[2].components[0].columns[0].components[0].defaultValue=f.doc_Seguro_Deducible
      newForm.components[0].components[1].components[2].components[0].columns[1].components[0].defaultValue=f.doc_Seguro_PrimaAnual
      newForm.components[0].components[1].components[2].components[0].columns[2].components[0].defaultValue=f.doc_Seguro_PrimaMensual
      //PESTAÑA HISTORICO = detalleLLamada.components[0].components[2] 
      //VEHICULO EN PARTE DE PAGO
      /*detalleLLamada.components[0].components[2].components[0].components[0].columns[0].components[0].defaultValue=f.nucotizacion
      detalleLLamada.components[0].components[2].components[0].components[0].columns[0].components[1].defaultValue=f.Retoma_no_version
      detalleLLamada.components[0].components[2].components[0].components[0].columns[1].components[0].defaultValue=f.Retoma_no_modelo
      detalleLLamada.components[0].components[2].components[0].components[0].columns[1].components[1].defaultValue=f.Retoma_nu_anio
      detalleLLamada.components[0].components[2].components[0].components[0].columns[2].components[0].defaultValue=f.Retoma_no_marca
      detalleLLamada.components[0].components[2].components[0].components[0].columns[2].components[1].defaultValue=f.Retoma_ValorRetoma*/
      const ejecutivos = [];
      const los_ejecitivos=this.props.ejecutivos
      //console.log(los_ejecitivos)
      los_ejecitivos.forEach(function(element) {
        
        ejecutivos.push({
                                    "label": element.ConsultorVentas,
                                    "value": element.RUT
        })  

      }); 

      //RESULTADO DE LA LLAMADA
      seguimiento.components[0].components[2].columns[0].components[0].data.values=ejecutivos
      //console.log(seguimiento.components[0].components[2].columns[0].components[0].data.values)
      
      this.state.detalleLLamada=newForm
      console.log(this.state)
      this.mostrarfomrulario()
      console.log(this.state)

      //this.setState({expandida:true});


  }


  componentWillReceiveProps(nextProps){
    console.log(nextProps)
     this.ocultarfomrulario()
     
     
    //console.log(nextProps.formulario.length)
    if(nextProps.formulario.length>0){
      
      this.actualizarformularios(nextProps); 

    }
    

    
    
  }

  verFomrularioTipificacion(text) {
    console.log(this.state.ficha_estado)
    if(text=="tipificacion"){
        if(this.state.ficha_estado=="nuevo" || this.state.ficha_estado=="en gestion" || this.state.ficha_estado=="en_gestion"){
            this.setState({formulario:"seguimiento"});
        }else if(this.state.ficha_estado=="agendado_propio"){
            this.setState({formulario:"tipificacion"});

        }
    }else if(text=="detalleLLamada"){
        this.setState({formulario:"detalleLLamada"});
    }
  }

  

  enviargestion = (event) => {

    document.getElementById("submit").setAttribute("disabled","disabled");

    console.log(event)

     //const fecha_seguimiento="";
     //const fechas_seguimiento="";
    if(event.data.select=="agendamiento_tercero"){



        console.log(event.data.fechaDeAgendamiento)
        const los_ejecitivos=this.props.ejecutivos 
        const datos_ejecutivo = []
        los_ejecitivos.forEach(function(element) {
            if(element.RUT==event.data.ejecutivoDePiso){
                //console.log(rut, element.Sucursal) 
                datos_ejecutivo.push(element.Sucursal, element.COMUNA, element.CIUDAD)
                
            }
        })
       
        console.log(datos_ejecutivo)
        //const fechas_seguimiento=event.data.fechaDeAgendamiento
        //const fechas_seguimiento=fecha_seguimiento.split("T",2)
        this.props.formulario[0].datosFormulario["fecha_seguimiento"]=""
        this.props.formulario[0].datosFormulario["hora_seguimiento"]=""
        this.props.formulario[0].datosFormulario["tipo_seguimiento"]=""
        this.props.formulario[0].datosFormulario["comentario_piso"]=event.data.comentarioAEjecutivo
        this.props.formulario[0].datosFormulario["comentario_gestion"]=event.data.comentarios
        this.props.formulario[0].datosFormulario["sucursal_agenda"]=datos_ejecutivo[0]
        this.props.formulario[0].datosFormulario["ciudad_agenda"]=datos_ejecutivo[2]
        this.props.formulario[0].datosFormulario["comuna_agenda"]=datos_ejecutivo[1]
        this.props.formulario[0].datosFormulario["fecha_agenda"]=event.data.fechaDeAgendamiento.slice(0, 10)
        this.props.formulario[0].datosFormulario["hora_agenda"]=event.data.fechaDeAgendamiento.slice(11, 18)
        this.props.formulario[0].datosFormulario["rut_asesor_comercial"]=event.data.ejecutivoDePiso
        this.props.formulario[0].datosFormulario["puntodeventa"]=event.data.ejecutivoDePiso
    }else{

        this.props.formulario[0].datosFormulario["fecha_seguimiento"]=""
        this.props.formulario[0].datosFormulario["hora_seguimiento"]=""
        this.props.formulario[0].datosFormulario["tipo_seguimiento"]=""
        this.props.formulario[0].datosFormulario["comentario_piso"]=""
        this.props.formulario[0].datosFormulario["comentario_gestion"]=""
        this.props.formulario[0].datosFormulario["sucursal_agenda"]=""
        this.props.formulario[0].datosFormulario["ciudad_agenda"]=""
        this.props.formulario[0].datosFormulario["comuna_agenda"]=""
        this.props.formulario[0].datosFormulario["fecha_agenda"]=""
        this.props.formulario[0].datosFormulario["hora_agenda"]=""
        this.props.formulario[0].datosFormulario["rut_asesor_comercial"]=""
        this.props.formulario[0].datosFormulario["puntodeventa"]=""

    }
       
    
    this.props.formulario[0].datosFormulario["resultado_llamada"]=event.data.select

    const transaccion={
                        "tx":"gesSV",
                        "ts_o":moment().format('YYYY-MM-DDTHH:mm:ss'),
                        "tx_user":this.props.anexo,
                        "origen":"sv",
                        "caso": {
                            "nro_gestion": this.state.ficha_nro_gestion,
                            "S2_id":this.state.ficha_S2_id,
                            "resultado_llamada": event.data.select,
                            "C_T_id":this.state.ficha_C_T_id,
                            "user":this.props.anexo,
                            "tipo":"",
                            "padre":"0",
                            "campania":"",
                            "estado":this.state.ficha_estado,
                            "comentario_sv":event.data.comentarios,
                        },
                        "gestion":{},
                        "gestion_data":this.props.formulario[0].datosFormulario
                        }

                    console.log(transaccion)

          var url = 'https://bscore.openpartner.cl/gdm';
         
            fetch(url, {
              method: 'POST', 
              body: JSON.stringify(transaccion), 
              headers:{
              'Content-Type': 'text/plain'
              }
            })
            .then(res => res.json())
            .then(response => {if(response){
                            console.log(response);
                             this.props.pedirFichas()
                              this.setState({expandida:false});

                            }})
            .catch(error => console.error('Error:', error));
        

    
  }

  actualizar = (event) => {

    console.log(this.state)
    console.log(event.data)
    const actualizar=event.data
    this.setState({expandida:false});
    

  }
 
ocultarfomrulario() {
    

    this.setState({expandida:false});
    
  }

mostrarfomrulario() {
    
    this.setState({expandida:true});
  }
 
/*<div key={key} className="form-group">
          <label for={"exampleInputEmail1"+key}>{key}</label>
          <input type={key} value={formulario[key]} className="form-control" id={"Input"+key} aria-describedby={key} placeholder={"Enter"+key} />
        </div>*/
  render(){
    
    

/*{formulario}*/
    if(this.state.expandida==true ){

           
       
            return ( 
              <div id="contenedorFormularios"  className='row contenedorFormularios'>

                {this.state.formulario=="detalleLLamada" && <Form form={this.state.detalleLLamada} onSubmit={this.actualizar} />}
                {this.state.formulario=="seguimiento" && <Form form={seguimiento} onSubmit={this.enviargestion} />}
                {this.state.formulario=="tipificacion" && <Form form={tipificacion} onSubmit={this.enviargestion} />}

                <div className="btn-group"  role="group" aria-label="Basic example">
                  <button type="button" onClick={() => this.verFomrularioTipificacion("detalleLLamada")} className="btn btn-secondary">Detalle</button>
                  <button type="button" onClick={() => this.verFomrularioTipificacion("tipificacion")} className="btn btn-secondary">Tipificar</button>
                  <button type="button" onClick={this.ocultarfomrulario} className="btn btn-secondary">salir</button>
                  
                  
                </div>
                
                
              </div> 
             
          ); 
        
    }else{
      return ( 
          <div className='row contenedorFormularios'></div> 
         
      ); 
    }
      
  }
}

const detalleLLamada={
    "display": "form",
    "components": [
        {
            "label": "Tabs",
            "components": [
                {
                    "label": "Info. Cliente",
                    "key": "tab2",
                    "components": [
                        {
                            "label": "Datos Cotización",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Rut Cliente",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "rutCliente",
                                            "defaultValue": "25034824k",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "emz5gs"
                                        },
                                        {
                                            "label": "Nombre y Apellido",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "nombre",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "eo0hfrl"
                                        },
                                        {
                                            "label": "Teléfono Fijo",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "telefonoFijo",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e3mcn9"
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "eonla2g"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "N° Cotización WEB",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "nCotizacionWeb",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e0d8tr"
                                        },
                                        {
                                            "label": "Versión",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "version",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e2kzaxh"
                                        },
                                        {
                                            "label": "Punto de Venta",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "puntoDeVenta",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "evthbf6"
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "es3oktj"
                                }
                            ],
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "columns",
                            "input": false,
                            "key": "datosCotizacion",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "tab": 0,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "autoAdjust": false,
                            "hideOnChildrenHidden": false,
                            "id": "eggygaw"
                        },
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Email",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "email",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e6tt1lf"
                                        }
                                    ],
                                    "width": 4,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "ely1inl"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "Comuna",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "comuna",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "e6z6uky"
                                        }
                                    ],
                                    "width": 4,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "elgavas"
                                },
                                {
                                    "width": 4,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "type": "column",
                                    "input": false,
                                    "hideOnChildrenHidden": false,
                                    "key": "column",
                                    "tableView": true,
                                    "label": "Column",
                                    "components": [
                                        {
                                            "label": "Dirección",
                                            "allowMultipleMasks": false,
                                            "showWordCount": false,
                                            "showCharCount": false,
                                            "tableView": true,
                                            "alwaysEnabled": false,
                                            "type": "textfield",
                                            "input": true,
                                            "key": "direccion",
                                            "defaultValue": "",
                                            "validate": {
                                                "customMessage": "",
                                                "json": "",
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false,
                                                "minLength": "",
                                                "maxLength": "",
                                                "minWords": "",
                                                "maxWords": "",
                                                "pattern": ""
                                            },
                                            "conditional": {
                                                "show": "",
                                                "when": "",
                                                "json": "",
                                                "eq": ""
                                            },
                                            "widget": {
                                                "type": "",
                                                "format": "yyyy-MM-dd hh:mm a",
                                                "dateFormat": "yyyy-MM-dd hh:mm a",
                                                "saveAs": "text"
                                            },
                                            "reorder": false,
                                            "inputFormat": "plain",
                                            "encrypted": false,
                                            "properties": {},
                                            "customConditional": "",
                                            "logic": [],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "mask": false,
                                            "inputType": "text",
                                            "inputMask": "",
                                            "id": "ecy9eh"
                                        }
                                    ],
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": true,
                                    "hidden": false,
                                    "clearOnHide": true,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "conditional": {
                                        "show": null,
                                        "when": null,
                                        "eq": ""
                                    },
                                    "id": "ex5r2hh"
                                }
                            ],
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "columns",
                            "input": false,
                            "key": "columns2",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "tab": 0,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "reorder": false,
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "autoAdjust": false,
                            "hideOnChildrenHidden": false,
                            "id": "esg5d2q"
                        }
                    ]
                },
                {
                    "label": "Info. Complementaria",
                    "key": "infoComplementaria",
                    "components": [
                        {
                            "label": "Panel",
                            "title": "Vehiculo en Parte de Pago ",
                            "collapsible": false,
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "panel",
                            "input": false,
                            "key": "panel2",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "Patente",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "patente",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "e100o9a"
                                                },
                                                {
                                                    "label": "Versión",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "version2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "ez5ntvm"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "ea7glyp"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Modelo",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "modelo",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "e3rldig"
                                                },
                                                {
                                                    "label": "Año",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "ano",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "exjhyc"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "em5aju8"
                                        },
                                        {
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "components": [
                                                {
                                                    "label": "Marca",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "marca",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eu2s0vth"
                                                },
                                                {
                                                    "label": "Precio Estimado",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "precioEstimado",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eq6wzpw"
                                                }
                                            ],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "eu4bsv7"
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": "",
                                        "eq": ""
                                    },
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": false,
                                    "hidden": false,
                                    "clearOnHide": false,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "autoAdjust": false,
                                    "hideOnChildrenHidden": false,
                                    "id": "evisw5g"
                                }
                            ],
                            "tab": 1,
                            "collapsed": false,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "theme": "default",
                            "breadcrumb": "default",
                            "lazyLoad": false,
                            "id": "effgqe"
                        },
                        {
                            "label": "Panel",
                            "title": "Crédito",
                            "collapsible": false,
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "panel",
                            "input": false,
                            "key": "panel3",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "Tipo",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "tipo",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "e8um5t"
                                                },
                                                {
                                                    "label": "Total a Financiar",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "totalAFinanciar",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "exwo7bd"
                                                },
                                                {
                                                    "label": "Saldo Credito",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "saldoCredito",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "e84bag"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "enai22"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Monto Pie",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "montoPie",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "ec4smnma"
                                                },
                                                {
                                                    "label": "Valor Cuota",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "cuotas",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "evgvbgc"
                                                },
                                                {
                                                    "label": "CAE",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "cae",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "erbhg0w"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "e343vzq"
                                        },
                                        {
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "components": [
                                                {
                                                    "label": "Cuotas",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "deducible",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "etmit2j"
                                                },
                                                {
                                                    "label": "Costo Total",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "primaAnual",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eb0wyo"
                                                }
                                            ],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "elmmq2z"
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns3",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": "",
                                        "eq": ""
                                    },
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": false,
                                    "hidden": false,
                                    "clearOnHide": false,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "autoAdjust": false,
                                    "hideOnChildrenHidden": false,
                                    "id": "e8jemz"
                                }
                            ],
                            "tab": 1,
                            "collapsed": false,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "theme": "default",
                            "breadcrumb": "default",
                            "lazyLoad": false,
                            "id": "emr5c2"
                        },
                        {
                            "label": "Panel",
                            "title": "Seguro",
                            "collapsible": false,
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "panel",
                            "input": false,
                            "key": "panel4",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": "",
                                "eq": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "Deducible",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "deducible2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eyam9d8"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "e9ivg2e"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Prima Anual",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "primaAnual2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eoqmvuj"
                                                }
                                            ],
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "ekstfl8"
                                        },
                                        {
                                            "width": 4,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column",
                                            "components": [
                                                {
                                                    "label": "Prima Mensual",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "primaMensual",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": "",
                                                        "required": false,
                                                        "custom": "",
                                                        "customPrivate": false,
                                                        "minLength": "",
                                                        "maxLength": "",
                                                        "minWords": "",
                                                        "maxWords": "",
                                                        "pattern": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": "",
                                                        "eq": ""
                                                    },
                                                    "widget": {
                                                        "type": "",
                                                        "format": "yyyy-MM-dd hh:mm a",
                                                        "dateFormat": "yyyy-MM-dd hh:mm a",
                                                        "saveAs": "text"
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": [],
                                                    "placeholder": "",
                                                    "prefix": "",
                                                    "customClass": "",
                                                    "suffix": "",
                                                    "multiple": false,
                                                    "protected": false,
                                                    "unique": false,
                                                    "persistent": true,
                                                    "hidden": false,
                                                    "clearOnHide": true,
                                                    "dataGridLabel": false,
                                                    "labelPosition": "top",
                                                    "labelWidth": 30,
                                                    "labelMargin": 3,
                                                    "description": "",
                                                    "errorLabel": "",
                                                    "tooltip": "",
                                                    "hideLabel": false,
                                                    "tabindex": "",
                                                    "disabled": false,
                                                    "autofocus": false,
                                                    "dbIndex": false,
                                                    "customDefaultValue": "",
                                                    "calculateValue": "",
                                                    "allowCalculateOverride": false,
                                                    "refreshOn": "",
                                                    "clearOnRefresh": false,
                                                    "validateOn": "change",
                                                    "mask": false,
                                                    "inputType": "text",
                                                    "inputMask": "",
                                                    "id": "eaxiq6j"
                                                }
                                            ],
                                            "placeholder": "",
                                            "prefix": "",
                                            "customClass": "",
                                            "suffix": "",
                                            "multiple": false,
                                            "defaultValue": null,
                                            "protected": false,
                                            "unique": false,
                                            "persistent": true,
                                            "hidden": false,
                                            "clearOnHide": true,
                                            "dataGridLabel": false,
                                            "labelPosition": "top",
                                            "labelWidth": 30,
                                            "labelMargin": 3,
                                            "description": "",
                                            "errorLabel": "",
                                            "tooltip": "",
                                            "hideLabel": false,
                                            "tabindex": "",
                                            "disabled": false,
                                            "autofocus": false,
                                            "dbIndex": false,
                                            "customDefaultValue": "",
                                            "calculateValue": "",
                                            "allowCalculateOverride": false,
                                            "widget": null,
                                            "refreshOn": "",
                                            "clearOnRefresh": false,
                                            "validateOn": "change",
                                            "validate": {
                                                "required": false,
                                                "custom": "",
                                                "customPrivate": false
                                            },
                                            "conditional": {
                                                "show": null,
                                                "when": null,
                                                "eq": ""
                                            },
                                            "id": "erlqa9c"
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns4",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": "",
                                        "eq": ""
                                    },
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "placeholder": "",
                                    "prefix": "",
                                    "customClass": "",
                                    "suffix": "",
                                    "multiple": false,
                                    "defaultValue": null,
                                    "protected": false,
                                    "unique": false,
                                    "persistent": false,
                                    "hidden": false,
                                    "clearOnHide": false,
                                    "dataGridLabel": false,
                                    "labelPosition": "top",
                                    "labelWidth": 30,
                                    "labelMargin": 3,
                                    "description": "",
                                    "errorLabel": "",
                                    "tooltip": "",
                                    "hideLabel": false,
                                    "tabindex": "",
                                    "disabled": false,
                                    "autofocus": false,
                                    "dbIndex": false,
                                    "customDefaultValue": "",
                                    "calculateValue": "",
                                    "allowCalculateOverride": false,
                                    "widget": null,
                                    "refreshOn": "",
                                    "clearOnRefresh": false,
                                    "validateOn": "change",
                                    "validate": {
                                        "required": false,
                                        "custom": "",
                                        "customPrivate": false
                                    },
                                    "autoAdjust": false,
                                    "hideOnChildrenHidden": false,
                                    "id": "efsubsx"
                                }
                            ],
                            "tab": 1,
                            "collapsed": false,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": [],
                            "placeholder": "",
                            "prefix": "",
                            "customClass": "",
                            "suffix": "",
                            "multiple": false,
                            "defaultValue": null,
                            "protected": false,
                            "unique": false,
                            "persistent": false,
                            "hidden": false,
                            "clearOnHide": false,
                            "dataGridLabel": false,
                            "labelPosition": "top",
                            "labelWidth": 30,
                            "labelMargin": 3,
                            "description": "",
                            "errorLabel": "",
                            "tooltip": "",
                            "hideLabel": false,
                            "tabindex": "",
                            "disabled": false,
                            "autofocus": false,
                            "dbIndex": false,
                            "customDefaultValue": "",
                            "calculateValue": "",
                            "allowCalculateOverride": false,
                            "widget": null,
                            "refreshOn": "",
                            "clearOnRefresh": false,
                            "validateOn": "change",
                            "validate": {
                                "required": false,
                                "custom": "",
                                "customPrivate": false
                            },
                            "theme": "default",
                            "breadcrumb": "default",
                            "lazyLoad": false,
                            "id": "ejbaxxn"
                        }
                    ]
                },
                {
                    "label": "Info. Histórica",
                    "key": "infoHistorica",
                    "components": [
                        {
                            "label": "Panel",
                            "title": "Ultima Cotización Registrada",
                            "collapsible": false,
                            "mask": false,
                            "tableView": false,
                            "alwaysEnabled": false,
                            "type": "panel",
                            "input": false,
                            "key": "panel5",
                            "conditional": {
                                "show": "",
                                "when": "",
                                "json": ""
                            },
                            "components": [
                                {
                                    "label": "Columns",
                                    "columns": [
                                        {
                                            "components": [
                                                {
                                                    "label": "N° Cotización WEB",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "nCotizacionWeb2",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "properties": {},
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "customConditional": "",
                                                    "logic": []
                                                },
                                                {
                                                    "label": "Venta Registrada",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "ventaRegistrada",
                                                    "defaultValue": "Si",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "logic": [],
                                                    "customConditional": "",
                                                    "properties": {},
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "reorder": false
                                                }
                                            ],
                                            "width": 6,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column"
                                        },
                                        {
                                            "components": [
                                                {
                                                    "label": "Versión",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "version3",
                                                    "defaultValue": "",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "reorder": false,
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": []
                                                },
                                                {
                                                    "label": "Fecha",
                                                    "allowMultipleMasks": false,
                                                    "showWordCount": false,
                                                    "showCharCount": false,
                                                    "tableView": true,
                                                    "alwaysEnabled": false,
                                                    "type": "textfield",
                                                    "input": true,
                                                    "key": "fecha",
                                                    "defaultValue": "15/07/2019",
                                                    "validate": {
                                                        "customMessage": "",
                                                        "json": ""
                                                    },
                                                    "conditional": {
                                                        "show": "",
                                                        "when": "",
                                                        "json": ""
                                                    },
                                                    "widget": {
                                                        "type": ""
                                                    },
                                                    "inputFormat": "plain",
                                                    "encrypted": false,
                                                    "reorder": false,
                                                    "properties": {},
                                                    "customConditional": "",
                                                    "logic": []
                                                }
                                            ],
                                            "width": 6,
                                            "offset": 0,
                                            "push": 0,
                                            "pull": 0,
                                            "type": "column",
                                            "input": false,
                                            "hideOnChildrenHidden": false,
                                            "key": "column",
                                            "tableView": true,
                                            "label": "Column"
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": false,
                                    "alwaysEnabled": false,
                                    "type": "columns",
                                    "input": false,
                                    "key": "columns5",
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": []
                                }
                            ],
                            "tab": 2,
                            "collapsed": false,
                            "reorder": false,
                            "properties": {},
                            "customConditional": "",
                            "logic": []
                        }
                    ]
                }
            ],
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "tabs",
            "input": false,
            "key": "tabs2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": []
        }/*,
        {
            "type": "button",
            "label": "Actualizar",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }*/
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}



const seguimiento= {
    "display": "form",
    "components": [
        {
            "label": "Field Set",
            "legend": "Resultado llamada",
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "fieldset",
            "input": false,
            "key": "fieldSet2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccionar",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "select",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": "",
                        "required": true,
                        "select": false
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            {
                                "label": "En seguimiento",
                                "value": "en_seguimiento"
                            },
                            {
                                "label": "Sin interés",
                                "value": "sin_interes"
                            },
                            {
                                "label": "Agendamiento propio",
                                "value": "agendamiento_propio"
                            },
                            {
                                "label": "Agendamiento a tercero",
                                "value": "agendamiento_tercero"
                            },
                            {
                                "label": "Datos erróneos",
                                "value": "datos_erroneos"
                            },
                            {
                                "label": "Sin respuesta",
                                "value": "sin_respuesta"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false,
                    "reorder": false
                },
                {
                    "label": "Comentarios",
                    "showWordCount": false,
                    "showCharCount": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "textarea",
                    "input": true,
                    "key": "comentarios",
                    "defaultValue": "",
                    "validate": {
                        "customMessage": "",
                        "json": ""
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "inputFormat": "html",
                    "encrypted": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "autoExpand": true,
                    "isUploadEnabled": false,
                    "uploadUrl": "",
                    "uploadOptions": "",
                    "uploadDir": "",
                    "reorder": false
                },
                {
                    "label": "Detalle del Agendamiento",
                    "columns": [
                        {
                            "components": [
                                {
                                    "label": "Ejecutivo de Piso",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "select",
                                    "input": true,
                                    "key": "ejecutivoDePiso",
                                    "validate": {
                                        "customMessage": "",
                                        "json": "",
                                        "required": true,
                                        "select": false
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "data": {
                                        "values": [
                                            {
                                                "label": "",
                                                "value": ""
                                            }
                                        ]
                                    },
                                    "valueProperty": "value",
                                    "lazyLoad": false,
                                    "selectValues": "",
                                    "disableLimit": false,
                                    "sort": "",
                                    "reference": false,
                                    "selectThreshold": 0.3,
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "defaultValue": "",
                                    "reorder": false
                                },
                                {
                                    "label": "Fecha de Agendamiento",
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "datetime",
                                    "input": true,
                                    "key": "fechaDeAgendamiento",
                                    "suffix": true,
                                    "defaultValue": "",
                                    "widget": {
                                        "type": "calendar",
                                        "displayInTimezone": "viewer",
                                        "submissionTimezone": "America/Santiago",
                                        "language": "en",
                                        "useLocaleSettings": false,
                                        "allowInput": true,
                                        "mode": "single",
                                        "enableTime": true,
                                        "noCalendar": false,
                                        "format": "yyyy-MM-dd hh:mm a",
                                        "defaultDate": "",
                                        "hourIncrement": 30,
                                        "minuteIncrement": 1,
                                        "time_24hr": false,
                                        "minDate": "",
                                        "maxDate": "",
                                        "icons": "fontawesome",
                                        "i18n": {
                                            "lng": "en",
                                            "resources": {
                                                "en": {
                                                    "translation": {
                                                        "complete": "Submission Complete",
                                                        "error": "Please fix the following errors before submitting.",
                                                        "required": "{{field}} is required",
                                                        "pattern": "{{field}} does not match the pattern {{pattern}}",
                                                        "minLength": "{{field}} must be longer than {{length}} characters.",
                                                        "maxLength": "{{field}} must be shorter than {{length}} characters.",
                                                        "minWords": "{{field}} must have more than {{length}} words.",
                                                        "maxWords": "{{field}} must have less than {{length}} words.",
                                                        "min": "{{field}} cannot be less than {{min}}.",
                                                        "max": "{{field}} cannot be greater than {{max}}.",
                                                        "minSelectedCount": "You must select at least {{minCount}} items to continue.",
                                                        "maxSelectedCount": "You can only select up to {{maxCount}} items to continue.",
                                                        "maxDate": "{{field}} should not contain date after {{- maxDate}}",
                                                        "minDate": "{{field}} should not contain date before {{- minDate}}",
                                                        "invalid_email": "{{field}} must be a valid email.",
                                                        "invalid_url": "{{field}} must be a valid url.",
                                                        "invalid_regex": "{{field}} does not match the pattern {{regex}}.",
                                                        "invalid_date": "{{field}} is not a valid date.",
                                                        "invalid_day": "{{field}} is not a valid day.",
                                                        "mask": "{{field}} does not match the mask.",
                                                        "stripe": "{{stripe}}",
                                                        "month": "Month",
                                                        "day": "Day",
                                                        "year": "Year",
                                                        "january": "January",
                                                        "february": "February",
                                                        "march": "March",
                                                        "april": "April",
                                                        "may": "May",
                                                        "june": "June",
                                                        "july": "July",
                                                        "august": "August",
                                                        "september": "September",
                                                        "october": "October",
                                                        "november": "November",
                                                        "december": "December",
                                                        "next": "Next",
                                                        "previous": "Previous",
                                                        "cancel": "Cancel",
                                                        "submit": "Submit Form"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "validate": {
                                        "customMessage": "",
                                        "json": "",
                                        "required": true
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "datePicker": {
                                        "minDate": "",
                                        "maxDate": ""
                                    },
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {},
                                    "timePicker": {
                                        "hourStep": 30
                                    },
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        },
                        {
                            "components": [
                                {
                                    "label": "Comentario a ejecutivo",
                                    "autoExpand": false,
                                    "isUploadEnabled": false,
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "textarea",
                                    "input": true,
                                    "key": "comentarioAEjecutivo",
                                    "defaultValue": "",
                                    "refreshOn": "submit",
                                    "validate": {
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "conditional": {
                                        "show": "",
                                        "when": "",
                                        "json": ""
                                    },
                                    "inputFormat": "html",
                                    "encrypted": false,
                                    "uploadUrl": "",
                                    "uploadOptions": "",
                                    "uploadDir": "",
                                    "reorder": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "attributes": {}
                                },
                                {
                                    "label": "Enviar correo a Cliente",
                                    "labelPosition": "left-left",
                                    "optionsLabelPosition": "right",
                                    "values": [
                                        {
                                            "label": "",
                                            "value": "",
                                            "shortcut": ""
                                        }
                                    ],
                                    "mask": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "selectboxes",
                                    "input": true,
                                    "key": "enviarCorreoACliente",
                                    "defaultValue": {
                                        "": false
                                    },
                                    "validate": {
                                        "customMessage": "",
                                        "json": ""
                                    },
                                    "conditional": {
                                        "show": "true",
                                        "when": "select",
                                        "eq": "conAgendamiento",
                                        "json": ""
                                    },
                                    "inputType": "checkbox",
                                    "customConditional": "",
                                    "encrypted": false,
                                    "minSelectedCountMessage": "",
                                    "maxSelectedCountMessage": "",
                                    "properties": {},
                                    "logic": [],
                                    "attributes": {},
                                    "labelWidth": 29,
                                    "labelMargin": 1,
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "input": false,
                            "hideOnChildrenHidden": false,
                            "key": "column",
                            "tableView": true,
                            "label": "Column"
                        }
                    ],
                    "mask": false,
                    "tableView": false,
                    "alwaysEnabled": false,
                    "type": "columns",
                    "input": false,
                    "key": "detalleDelAgendamiento",
                    "conditional": {
                        "show": "true",
                        "when": "select",
                        "eq": "agendamiento_tercero",
                        "json": ""
                    },
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {},
                    "reorder": false
                }
            ],
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {}
        },
        {
            "label": "Enviar",
            "state": "",
            "shortcut": "",
            "disableOnInvalid": true,
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "button",
            "key": "submit",
            "input": true,
            "defaultValue": false,
            "validate": {
                "customMessage": "",
                "json": ""
            },
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "encrypted": false,
            "properties": {},
            "showValidations": false,
            "event": "",
            "url": "",
            "custom": "",
            "reorder": false,
            "customConditional": "",
            "logic": [],
            "attributes": {}
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}

const tipificacion= {
    "display": "form",
    "components": [
        {
            "label": "Field Set",
            "legend": "Resultado agendamiento",
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "fieldset",
            "input": false,
            "key": "fieldSet2",
            "conditional": {
                "show": "",
                "when": "",
                "json": ""
            },
            "components": [
                {
                    "label": "Seleccione",
                    "mask": false,
                    "tableView": true,
                    "alwaysEnabled": false,
                    "type": "select",
                    "input": true,
                    "key": "seleccione",
                    "defaultValue": "",
                    "validate": {
                        "select": false,
                        "customMessage": "",
                        "json": ""
                    },
                    "conditional": {
                        "show": "",
                        "when": "",
                        "json": ""
                    },
                    "data": {
                        "values": [
                            {
                                "label": "Cerrado con Venta",
                                "value": "cerradoconVenta"
                            },
                            {
                                "label": "Cerrado sin Venta",
                                "value": "cerradoSinVenta"
                            }
                        ]
                    },
                    "valueProperty": "value",
                    "selectThreshold": 0.3,
                    "encrypted": false,
                    "reorder": false,
                    "lazyLoad": false,
                    "selectValues": "",
                    "disableLimit": false,
                    "sort": "",
                    "reference": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": [],
                    "attributes": {}
                }
            ],
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": [],
            "attributes": {}
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }
    ],
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    }
}

export default AreaEdicion;

