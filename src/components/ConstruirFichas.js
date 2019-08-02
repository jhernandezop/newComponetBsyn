import React, { Component } from 'react';
import * as d3 from "d3";
import './login.css';
import './ficha.css';



class ConstruirFichas extends Component {
  //

  omponentDidMount() {
    this.componentWillReceiveProps();
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }


  
    render(){
      const grupos = this.props.grupos;
      const fichas = this.props.fichas;

      const grupo_pestnias = grupos.map((number) =>
          <div key={number}> </div>
            /*<li key={number}  className="nav-item"  role='presentation'  >
              <a className="nav-link" id={number+"-tab"} data-toggle="tab" href={"#"+number} role="tab" aria-controls={number} aria-selected="true" >{number}</a>
            </li>*/

      );

      const grupo_fichas = fichas.map((number) =>
            
                <UnaFicha 
                  key={number.caso_ES} 
                  datosFicha={number} 
                  filtro={this.props.filtro}
                  desplegarEdicion={this.props.desplegarEdicion}
                />
              
            
      );



/*<div id='lista_opciones' className='tab-content'>
                <ul  className='nav nav-tabs justify-content-center'>
                    {grupo_pestnias}
                </ul>
              </div>*/
      
      return ( 
          <div id="divFichas" className='row'>

           
              
             
            
            <div id="lista_fichas" className="col-sm-12 col-md-12 col-lg-12 accordion h-75"  >
              
                {grupo_fichas}
              
            </div>
          </div> 
         
      ); 
  }
}

class UnaFicha extends Component {
  constructor(props) {
    super(props);
    this.state = {  
          acciones: this.props.datosFicha.acciones,
          caso_CAM: this.props.datosFicha.caso_CAM,
          caso_ES: this.props.datosFicha.caso_ES,
          datos_ficha: this.props.datosFicha.datos_ficha,
          estado_proceso: this.props.datosFicha.estado_proceso,
          nro_gestion: this.props.datosFicha.nro_gestion,
          timeline: this.props.datosFicha.timeline
    }


  }
  
  

  llamarFormulario= (event) => {
      console.log(this.state.caso_ES)
      this.props.desplegarEdicion(["1"], this.state.caso_ES);

  }

  llamarCliente(numero) {
      console.log(numero)

    fetch("http://172.27.86.16:3000/bsync/face/call", {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          "agente": "3999",
          "accion": "Llamar",
          "datos": {
            "destino": "979670431"
          }
        })
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    

  }

  render(){

    const indicador=this.state.datos_ficha.calldate.split("T", 2)

    const detalle = this.state.datos_ficha

    const estado_proceso=this.state.estado_proceso
    const filtro= this.props.filtro
    
    //console.log(filtro)
    //console.log(estado_proceso)
    //console.log(filtro.indexOf(estado_proceso))
    
    if(filtro.indexOf(estado_proceso)===-1){
      return ( <div className="card ficha"  onDoubleClick = {this.llamarFormulario}>
             <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapseOne_"+this.state.caso_ES.replace(".","")} aria-expanded="false" aria-controls={"collapseOne_"+this.state.caso_ES.replace(".","")}>
                    <div className="row">
                      <div className="col-12"><i className="far fa-calendar-alt"></i> {indicador[0]}</div>
                      <div className="col-12"><i className="far fa-clock"></i> {indicador[1].replace(".000Z","")}</div>
                    </div>
                    
                    
                  </button>
                </h2>
              </div>
              <div id={"collapseOne_"+this.state.caso_ES.replace(".","")} className="collapse" aria-labelledby="headingOne" data-parent="#lista_fichas">
                <div className="card-body detalle">
                  
                  <div className="row">
                      <div className="col-12">{detalle.disposition}</div>
                      <div className="col-12">{detalle.dst}</div>
                      <div className="col-12">{detalle.src}</div>
                      <div className="col-12">{detalle.uniqueid}</div>
                    </div>

                </div>
              </div>
              <div className="card-body telefono">
                <button type="button" onClick={() => this.llamarCliente(this.state.datos_ficha.src)} className="btn btn-light">
                    <i className="fas fa-headset"></i> {this.state.datos_ficha.src}
                    <span className="nro_gestion badge badge-pill badge-light">{this.state.nro_gestion}</span>
                </button>

              </div>


            </div> 
        )
      }else{
        return (<div></div>)
      }
   }

}

export default ConstruirFichas;

