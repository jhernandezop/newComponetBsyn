import React, { Component } from 'react';
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
    if(nuevoFormulario.formulario.caso_ES===null){
        this.setState({caso_ES:""});
        this.setState([{formulario:""}]);
    }else if(nuevoFormulario.formulario.caso_ES===this.state.caso_ES){

      console.log("elmismo")
      this.setState({formulario:this.state.formulario.concat(nuevoFormulario.formulario.datosFormulario)});

    }else{
      console.log("nuevo")
      this.setState({caso_ES:nuevoFormulario.formulario.caso_ES});
      this.setState([{formulario:nuevoFormulario.formulario.datosFormulario}]);
    }

  }


  componentWillReceiveProps(nextProps){
    console.log(nextProps.formulariol)
    if(nextProps.formulariol){
     this.actualizarformularios(nextProps); 
    }
    
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
          <div className='row contenedorFormularios'>{formulario}</div> 
         
      ); 
    }else{
      return ( 
          <div className='contenedorFormularios'>B</div> 
         
      ); 
    }
      
  }
}
export default AreaEdicion;

