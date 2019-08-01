import React, { Component } from 'react';
import './ProcesoManual.css';


class ProcesoManual extends Component {
  
//this.overlays = [{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":"AQUI HAY 2 FICHAS" },{"ID_ETAPA_PROCESO":"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138", "NOTA":"AQUI HAY 1 FICHAS" }]
  constructor(props){
    super(props);
    this.state = {
      procesomanualFiltro:[]
    }
    
  }

 componentDidMount() {
    this.componentWillReceiveProps();
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  
  


    render(){

        const proceso = this.props.procesomanual;
        const dimension = 100/3 
        const estilos ={ width: dimension+"%"};
        const filtro= this.props.filtro


        const elementos_proceso = proceso.map((number) => (number.ver==true) ?
             
                <li key={number.tag}  className="" style={estilos}>
                  <span className="cantidad" onClick={() => this.props.filtroFichas(number.tag)}>
                    {number.cantidad}
                    <span className="tag"  >{number.tag}</span>
                  </span>
                  
                </li>
              :
                <li key={number.tag}  className="" style={estilos}>
                  <span className="cantidad off" onClick={() => this.props.filtroFichas(number.tag)}>
                    {number.cantidad}
                    <span className="tag"  >{number.tag}</span>
                  </span>
                  
                </li>

             

        );

        return ( <ul id="linea_proceso" className="linea_proceso" >
          <span className="linea"></span>
          {elementos_proceso}
        </ul>);
    }
}

export default ProcesoManual;
