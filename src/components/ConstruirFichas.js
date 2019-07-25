import React, { Component } from 'react';
import * as d3 from "d3";
import './login.css';

class ConstruirFichas extends Component {
  //

  /*<PrimerGrafico id={this.state.id} data={this.state.data} width={this.state.width} height={this.state.height} />*/


  
    render(){
      const grupos = this.props.grupos;
      const fichas = this.props.fichas;

      const grupo_pestnias = grupos.map((number) =>
            <li key={number}  className="nav-item"  role='presentation'  >
              <a className="nav-link" id={number+"-tab"} data-toggle="tab" href={"#"+number} role="tab" aria-controls={number} aria-selected="true" >{number}</a>
            </li>

      );

      const grupo_contenedores_fichas = grupos.map((number) =>
            <div key={number} className="tab-pane fade row" id={number} role="tabpanel" aria-labelledby="profile-tab">
              <Fichas grupo={number} fichas={this.props.fichas} actualizarOverlayXml={this.props.actualizarOverlayXml}/>
            </div>

      );
      
      return ( 
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 tab-content'>
              <ul id='lista_opciones' className='nav nav-tabs justify-content-center'>
                  {grupo_pestnias}
              </ul>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-12 tab-content' id="myTabContent">
              {grupo_contenedores_fichas}
            </div>
          </div> 
         
      ); 
  }
}

class Fichas extends Component {

  

  componentDidMount() {
    this.drawChart();
  } 


  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    //const data = this.props.data;

    document.getElementById("chart").innerHTML = ""
    const svg = d3.select("#chart" )//+ this.props.id
        .append("svg")
        .attr("width", 200)//this.props.width
        .attr("height", 200)//this.props.height
        //.style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 200 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  }

   render(){

    const fichas = this.props.fichas;
    const grupo_fichas_filtradas = fichas.filter(fichas => {return fichas.estado_proceso== this.props.grupo});
    const grupo_fichas = grupo_fichas_filtradas.map((number) =>
              <UnaFicha key={number.caso_ES} datosFicha={number} actualizarOverlayXml={this.props.actualizarOverlayXml}/>
              //<div onClick={this.actualizarOverlayXml} key={number.caso_ES} >{number.caso_ES},{number.estado_proceso}</div>

            
    );
    return ( <div className="accordion" id="accordionExample">{grupo_fichas}</div> )
   }

}

class UnaFicha extends Component {

  actualizarOverlayXml = (event) => {
    event.preventDefault();
    this.props.actualizarOverlayXml(this.state.datos_ficha.dst);


  }

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

  render(){
    return ( <div className="card" onClick={this.actualizarOverlayXml}>
             <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapseOne_"+this.state.caso_ES.replace(".","")} aria-expanded="false" aria-controls={"collapseOne_"+this.state.caso_ES.replace(".","")}>
                    Nº Cotizacion: {this.state.datos_ficha.dst}
                  </button>
                </h2>
              </div>
              <div id={"collapseOne_"+this.state.caso_ES.replace(".","")} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  erwerwretrhe

                </div>
              </div>


            </div> )
   }

}

export default ConstruirFichas;

