import React, { Component } from 'react';
import {Form} from 'react-formio';
import './AreaEdicion.css';


class AreaEdicion extends Component {

  constructor(props) {
    super(props);
    this.state = { 
       caso_ES:"", 
       expandida: false,
       formulario:[]
     }


  }

  actualizarformularios(nuevoFormulario){
    console.log(nuevoFormulario.formulario.caso_ES)
    if(nuevoFormulario.formulario.caso_ES===null || nuevoFormulario.formulario.caso_ES==="null"){
        this.setState({caso_ES:""});
        this.setState([{formulario:""}]);
    }else if(nuevoFormulario.formulario.caso_ES===this.state.caso_ES ){

      console.log("elmismo")
      //this.setState({formulario:this.state.formulario.concat(nuevoFormulario.formulario.datosFormulario)});

    }else{
      console.log("nuevo")
      this.setState({caso_ES:nuevoFormulario.formulario.caso_ES});
      //this.setState([{formulario:nuevoFormulario.formulario.datosFormulario}]);
      this.setState({formulario:this.state.formulario.concat(nuevoFormulario.formulario.datosFormulario)});
    }

  }


  componentWillReceiveProps(nextProps){
    console.log(nextProps.formulario)
    if(nextProps.formulario){
     this.actualizarformularios(nextProps); 
    }
    
  }

  construirFormulario(nextProps){
    
    const components=  [
      {
            "label": "Field Set",
            "legend": "Data Basica",
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
                    "label": "Columns",
                    "columns": [
                        {
                            "components": [
                                {
                                    "label": "Text Field",
                                    "allowMultipleMasks": false,
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "textfield",
                                    "input": true,
                                    "key": "textField",
                                    "defaultValue": "",
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
                                    "inputFormat": "plain",
                                    "encrypted": false,
                                    "properties": {},
                                    "customConditional": "",
                                    "logic": [],
                                    "widget": {
                                        "type": ""
                                    },
                                    "reorder": false
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "hideOnChildrenHidden": false,
                            "input": true,
                            "key": "column5",
                            "tableView": true,
                            "label": ""
                        },
                        {
                            "components": [
                                {
                                    "label": "Text Field",
                                    "allowMultipleMasks": false,
                                    "showWordCount": false,
                                    "showCharCount": false,
                                    "tableView": true,
                                    "alwaysEnabled": false,
                                    "type": "textfield",
                                    "input": true,
                                    "key": "textField2",
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
                                }
                            ],
                            "width": 6,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "type": "column",
                            "hideOnChildrenHidden": false,
                            "input": true,
                            "key": "column6",
                            "tableView": true,
                            "label": ""
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
                        "json": ""
                    },
                    "reorder": false,
                    "properties": {},
                    "customConditional": "",
                    "logic": []
                }
            ],
            "reorder": false,
            "properties": {},
            "customConditional": "",
            "logic": []
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
      ]




      




    
  }

/*<div key={key} className="form-group">
          <label for={"exampleInputEmail1"+key}>{key}</label>
          <input type={key} value={formulario[key]} className="form-control" id={"Input"+key} aria-describedby={key} placeholder={"Enter"+key} />
        </div>*/
  render(){
    const formulario=JSON.stringify(this.state.formulario)
    /*const tifOptions = Object.keys(formulario).map(key => 
        <div key={key}>{formulario[key]}</div>
    )*/


    if(this.state.expandida===false){
        return ( 
          <div className='row contenedorFormularios'>
            {formulario}
            <Form src="https://example.form.io/example" onSubmit={console.log} />
          </div> 
         
      ); 
    }else{
      return ( 
          <div className='contenedorFormularios'>B</div> 
         
      ); 
    }
      
  }
}
export default AreaEdicion;

