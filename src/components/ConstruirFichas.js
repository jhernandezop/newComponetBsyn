import React, { Component } from 'react';
import * as d3 from "d3";
import './login.css';
import './ficha.css';



class ConstruirFichas extends Component {
  //
  
  componentDidMount(nextProps) {
    //console.log(nextProps)
    this.componentWillReceiveProps(nextProps);
  }

  componentWillReceiveProps(nextProps){
    //console.log(nextProps)
  }

  


  
    render(){
      const grupos = this.props.grupos;
      const fichas = this.props.fichas;
      //FILTROS
     

      //GRUPOS 
      

      const grupo_fichas = fichas.map((number) =>
            
                <UnaFicha 
                  key={number.caso} 
                  datosFicha={number} 
                  filtro={this.props.filtro}
                  desplegarEdicion={this.props.desplegarEdicion}
                  searchFiltro={this.props.searchFiltro}
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
          caso_CAM: this.props.datosFicha.casoCAM,
          caso_ES: this.props.datosFicha.caso,
          datos_ficha: this.props.datosFicha.datos_ficha,
          estado_proceso: this.props.datosFicha.estado,
          nro_gestion: this.props.datosFicha.nro_gestion,
          timeline: this.props.datosFicha.timeline,
          tipo_caso:this.props.datosFicha.tipo,
          tipificacion:this.props.datosFicha.tipificacion
    }


  }
  
  

  llamarFormulario= (event) => {
      //console.log(this.state)
       //console.log(this.state.estado_proceso)
      
 
      if(this.state.estado_proceso=="contacto"){
         this.props.desplegarEdicion(["1"], this.state.caso_ES);
      }else{

          var url = 'https://bscore.openpartner.cl/';
          var data = {
                      "tx": "doc0",
                      "ts_o": "2019-08-07T17:30:58",
                      "tx_user": "",
                      "origen": "face",
                      "caso": {
                        "user": "3099",
                        "tipo": "",
                        "S2_id": "1565191644097",
                        "C_T_id": "b808421c-b928-11e9-8ea2-0af90a69b8d6",
                        "campania": "",
                        "estado": ""
                      }
                    };
            fetch(url, {
              method: 'POST', 
              body: JSON.stringify(data), 
              headers:{
              'Content-Type': 'text/plain'
              }
            })
            .then(res => res.json())
            .then(response => {if(response){
                            console.log(response);
                              this.props.desplegarEdicion(response.data, this.state.caso_ES);
                              

                            }})
            .catch(error => console.error('Error:', error));



      }


  }

  llamarCliente(numero) {
      //console.log(numero)

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

  filtrarFicha(ficha){

    if(this.props.searchFiltro==""){ 
      return true;
    }else{
      for (const prop in ficha) {
        if(typeof (ficha[prop])=="string"){
            const dimension = this.props.searchFiltro.length
            if(ficha[prop].slice(0, dimension)==this.props.searchFiltro){
              return true;
            }
        }
      }
    }
   return false
  }

  render(){

    const indicador=this.state.datos_ficha.fecha_co.split("T", 2)

    const detalle = this.state.datos_ficha

    const estado_proceso=this.state.estado_proceso
    const filtro= this.props.filtro

    const tipo_caso=this.state.tipo_caso
    const tipificacion=this.state.tipificacion

    
    //console.log(filtro.indexOf(tipo_caso))
    //console.log(estado_proceso)
    //console.log(filtro.indexOf(estado_proceso))
    
    if(filtro.indexOf(estado_proceso)==-1 && filtro.indexOf(tipo_caso)==-1 && filtro.indexOf(this.state.tipificacion)==-1 && this.filtrarFicha(this.props.datosFicha)==true){
      return ( <div className="card ficha"  onDoubleClick = {this.llamarFormulario}>
             <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapseOne_"+this.state.caso_ES.replace(".","")} aria-expanded="false" aria-controls={"collapseOne_"+this.state.caso_ES.replace(".","")}>
                    <div className="row">
                      <div className="col-12 cotizacion"><i className="far fa-hand-paper"></i> {detalle.cotizacion}</div>
                      <div className="col-12"><i className="far fa-calendar-alt"></i> {indicador[0]}</div>
                      <div className="col-12"><i className="far fa-clock"></i> {indicador[1].replace(".000Z","")}</div>
                    </div>
                    
                    
                  </button>
                </h2>
              </div>
              <div id={"collapseOne_"+this.state.caso_ES.replace(".","")} className="collapse" aria-labelledby="headingOne" data-parent="#lista_fichas">
                <div className="card-body detalle">
                  
                  <div className="row">
                      <div className="col-12">{detalle.nombre}</div>
                      <div className="col-12">{detalle.rut}</div>
                      <div className="col-12">{detalle.correo}</div>
                      <div className="col-12">{detalle.sucursal}</div>
                    </div>

                </div>
              </div>
              <div className="card-body telefono">
                <button type="button" onClick={() => this.llamarCliente(this.state.datos_ficha.telefono)} className="btn btn-light">
                    <i className="fas fa-headset"></i> {this.state.datos_ficha.telefono}
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

