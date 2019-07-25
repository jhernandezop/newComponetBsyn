import React, { Component } from 'react';
import './BpmnViewer.css';
import BpmnViewer from 'bpmn-js'

class BpmnViewerComponente extends Component {
  
//this.overlays = [{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":"AQUI HAY 2 FICHAS" },{"ID_ETAPA_PROCESO":"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138", "NOTA":"AQUI HAY 1 FICHAS" }]
  constructor(props){
    super(props);
    this.viewer = new BpmnViewer();
    this.generateId = 'bpmnContainer'+ Date.now();
    this.processDefinition = 'f4cf9280-72b2-11e9-afe1-0af90a69b8d6';
  
    
  }

  

  construirDiagrama(Overlays) {
    console.log(Overlays)
    if(!Overlays){
      Overlays=this.props.xmlOverlays
    }
  //AQUI SE ATACHA EL PROCESO AL ID DEL ELEMENTO
      this.viewer.attachTo('#'+ this.generateId);
      // FUNCION D EIMPORTACION  CREACION Y OVERLAYS
      function importXML(xml,Viewer, NotasOverlays) {
        // SE IMPORTA
        Viewer.importXML(xml, function(err) {
          //SI HAY ERROR SE ARROJA A LA CONSOLA
          if (err) {
            return console.error('could not import BPMN 2.0 diagram', err);
          }
          //SE HABILITAN EL VISON Y EL LA CAPA DE OVERLAYS
          var canvas = Viewer.get('canvas');
          var overlays = Viewer.get('overlays');
          // SE AJUSTA EL ZOON EN EL INICIO
          canvas.zoom('fit-viewport');
          // SE ATACHA LOS OVERLAYS (ID DE ESTADO EN EL PROCESO Y NOTA)
          //console.log(NotasOverlays)
          if(NotasOverlays){
            NotasOverlays.forEach(function(element) {
              //console.log(element);
              overlays.add(element.ID_ETAPA_PROCESO, 'note', {
                position: {
                  bottom: 0,
                  right: 0
                },
                html: '<div class="diagram-note">'+element.NOTA+'</div>'
              });


            });
          }
          
      });
      }
      // IMBOCO LA FUNCION
      importXML(this.props.xmlProceso, this.viewer, Overlays);
  }

  
  

  componentWillReceiveProps(nextProps){
    this.construirDiagrama(nextProps.xmlOverlays);
  }

  





    render(){
        return <div className="col-lg-12 BpmnViewer" id={this.generateId}></div>;
    }
}

export default BpmnViewerComponente;
