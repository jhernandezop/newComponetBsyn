// App.js
import React, { Component } from 'react';  
import './App.css';  
import Login from './components/login'; 
import BpmnViewer from './components/BpmnViewer'
import ConstruirFichas from './components/ConstruirFichas';
import AreaEdicion from './components/AreaEdicion';
import PrimerGrafico from './components/Dgraficos';
import ProcesoManual from './components/ProcesoManual';
//import Footer from './components/Footer';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       expandida: true,
       estadoLogin:false,
       tipoLogin:"standar",
       grupos:[],
       fichas:[],
       //opcionesOsuario:[{opcion:"Estado", funcion:"x"},{opcion:"Logoff Usuario", funcion:"x"},{opcion:"Pausar", funcion:"x"},{opcion:"Llamar", funcion:"x"},{opcion:"Cortar", funcion:"x"},{opcion:"Transferir", funcion:"x"}],
       opcionesOsuario:[
                        {
                          opcion:"fab fa-trello", 
                          funcion:"x"
                        },
                        {
                          opcion:"fas fa-chart-line", 
                          funcion:"x"
                        },
                        {
                          opcion:"fas fa-user-times", 
                          funcion:"x"
                        }
                       ],
       xmlProceso:"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\"\r\n             xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\"\r\n             xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\"\r\n             xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\"\r\n             xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n             expressionLanguage=\"http://www.w3.org/1999/XPath\"\r\n             typeLanguage=\"http://www.w3.org/2001/XMLSchema\"\r\n             targetNamespace=\"\"\r\n             xsi:schemaLocation=\"http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd\">\r\n<collaboration id=\"sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424\">\r\n    <participant id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" name=\"Customer\" processRef=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\">\r\n    </participant>\r\n</collaboration>\r\n<process id=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\" isClosed=\"false\" isExecutable=\"false\" name=\"Customer\" processType=\"None\">\r\n    <extensionElements/>\r\n    <laneSet id=\"sid-b167d0d7-e761-4636-9200-76b7f0e8e83a\">\r\n        <lane id=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254\">\r\n            <flowNodeRef>sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138</flowNodeRef>\r\n            <flowNodeRef>sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26</flowNodeRef>\r\n            <flowNodeRef>SCAN_OK</flowNodeRef>\r\n            <flowNodeRef>sid-E49425CF-8287-4798-B622-D2A7D78EF00B</flowNodeRef>\r\n            <flowNodeRef>sid-E433566C-2289-4BEB-A19C-1697048900D2</flowNodeRef>\r\n            <flowNodeRef>sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9</flowNodeRef>\r\n        </lane>\r\n    </laneSet>\r\n    <startEvent id=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" name=\"Notices&#10;QR code\">\r\n        <outgoing>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</outgoing>\r\n    </startEvent>\r\n    <task completionQuantity=\"1\" id=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" isForCompensation=\"false\" name=\"Scan QR code\" startQuantity=\"1\">\r\n        <incoming>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</incoming>\r\n        <outgoing>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</outgoing>\r\n    </task>\r\n    <exclusiveGateway gatewayDirection=\"Diverging\" id=\"SCAN_OK\" name=\"Scan successful?&#10;\">\r\n        <incoming>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</incoming>\r\n        <outgoing>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</outgoing>\r\n        <outgoing>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</outgoing>\r\n    </exclusiveGateway>\r\n    <task completionQuantity=\"1\" id=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" isForCompensation=\"false\" name=\"Open product information in mobile  app\" startQuantity=\"1\">\r\n        <incoming>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</incoming>\r\n        <outgoing>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</outgoing>\r\n    </task>\r\n    <endEvent id=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\" name=\"Is informed\">\r\n        <incoming>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</incoming>\r\n    </endEvent>\r\n    <exclusiveGateway gatewayDirection=\"Converging\" id=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\">\r\n        <incoming>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</incoming>\r\n        <incoming>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</incoming>\r\n        <outgoing>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</outgoing>\r\n    </exclusiveGateway>\r\n    <sequenceFlow id=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD\" sourceRef=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" targetRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\"/>\r\n    <sequenceFlow id=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A\" sourceRef=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" targetRef=\"SCAN_OK\"/>\r\n    <sequenceFlow id=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C\" sourceRef=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" targetRef=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\"/>\r\n    <sequenceFlow id=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB\" name=\"No\" sourceRef=\"SCAN_OK\" targetRef=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\"/>\r\n    <sequenceFlow id=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D\" sourceRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\" targetRef=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\"/>\r\n    <sequenceFlow id=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE\" name=\"Yes\" sourceRef=\"SCAN_OK\" targetRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\"/>\r\n</process>\r\n<bpmndi:BPMNDiagram id=\"sid-74620812-92c4-44e5-949c-aa47393d3830\">\r\n    <bpmndi:BPMNPlane bpmnElement=\"sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424\" id=\"sid-cdcae759-2af7-4a6d-bd02-53f3352a731d\">\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"933.0\" x=\"42.5\" y=\"75.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"59.142852783203125\" width=\"12.000000000000014\" x=\"47.49999999999999\" y=\"170.42857360839844\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254\" id=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"903.0\" x=\"72.5\" y=\"75.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" id=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138_gui\">\r\n            <omgdc:Bounds height=\"30.0\" width=\"30.0\" x=\"150.0\" y=\"165.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"22.0\" width=\"46.35714340209961\" x=\"141.8214282989502\" y=\"197.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" id=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"352.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"84.0\" x=\"360.5\" y=\"172.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"SCAN_OK\" id=\"SCAN_OK_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"550.0\" y=\"160.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"102.0\" x=\"521.0\" y=\"127.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" id=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"687.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"36.0\" width=\"83.14285278320312\" x=\"695.9285736083984\" y=\"162.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\" id=\"sid-E433566C-2289-4BEB-A19C-1697048900D2_gui\">\r\n            <omgdc:Bounds height=\"28.0\" width=\"28.0\" x=\"865.0\" y=\"166.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"11.0\" width=\"62.857147216796875\" x=\"847.5714263916016\" y=\"196.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\" id=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"240.0\" y=\"160.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A\" id=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A_gui\">\r\n            <omgdi:waypoint x=\"452.5\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"550.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB\" id=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB_gui\">\r\n            <omgdi:waypoint x=\"590.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"687.5\" y=\"180\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.048704338048935\" width=\"16.32155963195521\" x=\"597.8850936986571\" y=\"155\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD\" id=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD_gui\">\r\n            <omgdi:waypoint x=\"180.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"240.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D\" id=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D_gui\">\r\n            <omgdi:waypoint x=\"280.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"352.5\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C\" id=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C_gui\">\r\n            <omgdi:waypoint x=\"787.5\" y=\"180.0\"/>\r\n            <omgdi:waypoint x=\"865.0\" y=\"180.0\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE\" id=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE_gui\">\r\n            <omgdi:waypoint x=\"570.5\" y=\"200.0\"/>\r\n            <omgdi:waypoint x=\"570.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"200.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"21.4285888671875\" width=\"12.0\" x=\"550\" y=\"205\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n    </bpmndi:BPMNPlane>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"11.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"12.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n</bpmndi:BPMNDiagram>\r\n</definitions>\r\n\r\n",
       xmlOverlays:[{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":"AQUI HAY 3 FICHAS" },{"ID_ETAPA_PROCESO":"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138", "NOTA":"AQUI HAY 2 FICHAS" }],
       xmlViwEstadoProceso:"",
       edicion:[],
       procesomanual:[
                        {tag:"contacto", cantidad:0, ver: true, canales:[]},
                        {tag:"cotizaciones", cantidad:0, ver: true, canales:[]},
                        {tag:"seguimiento", cantidad:0, ver: true, canales:[{tag:"web",cantidad:0},{tag:"telefonia",cantidad:0}]}
                      ],
       procesomanualFiltro:[]


     }

    this.interfazExpandida = this.interfazExpandida.bind(this);
    this.estadoLogin = this.estadoLogin.bind(this);
    this.actualizarFichas = this.actualizarFichas.bind(this);
    this.actualizarOverlayXml = this.actualizarOverlayXml.bind(this);
    this.desplegarEdicion = this.desplegarEdicion.bind(this);
    this.estadoProceso = this.estadoProceso.bind(this);
    this.filtroFichas = this.filtroFichas.bind(this)

  }

  interfazExpandida() {
    
    this.setState(state => ({
      expandida: !state.expandida
    }));
  }

  estadoLogin() {
    
    this.setState(state => ({
      estadoLogin: !state.estadoLogin
    }));
  }

  actualizarFichas(fichas, grupos, overlays) {
   
    this.setState({fichas:fichas});
    this.setState({grupos: grupos});
    //this.setState({xmlOverlays: overlays});
    //ACTUALIZAR CANTIDADES DEL PROCESO
    const procesomanual=this.state.procesomanual

    //RRECORRO LA FICHAS
    fichas.forEach(function(element_a, index_a) {

        //RRECORRO EL PROCESO
        procesomanual.forEach(function(element_b, index_b) {
            if(element_b.tag==element_a.estado_proceso){
                procesomanual[index_b].cantidad=procesomanual[index_b].cantidad+1
            }
            
            //SI EXISTEN CANALES EN EL PROCESO
            //console.log(element_b.canales.length)
            if(element_b.canales.length>0){

              //RRECORRO LOS CANALES
               element_b.canales.forEach(function(element_c, index_c) {
                    console.log(  element_b.canales[index_c].tag+"/"+element_a.tipo_caso)
                     if( element_b.canales[index_c].tag == element_a.tipo_caso){
                        console.log("SUMO")
                        console.log(element_a.caso_ES)
                          procesomanual[index_b].canales[index_c].cantidad=procesomanual[index_b].canales[index_c].cantidad+1
                      }

               })
            

            }

        });
    })
    this.setState({procesomanual:procesomanual})
    

    
  }

  actualizarOverlayXml(overlays) {
    console.log(overlays)
    this.setState({xmlOverlays: [{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":overlays, "ID_FICHA":overlays }]});
    
   // console.log(this.state.xmlOverlays)
  }

  estadoProceso(en_esatdo){

    console.log(en_esatdo)
  }


  desplegarEdicion(datosFormulario, caso_ES) {
    console.log(datosFormulario)
    this.setState({edicion:[{"caso_ES": caso_ES, "datosFormulario":datosFormulario}]});

  }


  filtroFichas(filtro){
    //console.log(filtro)

    //procesomanualFiltro
    const filtro_actual=this.state.procesomanualFiltro
    const procesomanual=this.state.procesomanual
    //console.log(filtro_actual)
    if(filtro_actual.indexOf(filtro)===-1){
      //LLENO EL FILTRO
      filtro_actual.push(filtro)
      //ACTUALIZO EL RPOCESO
      procesomanual.forEach(function(element, index) {
        if(element.tag==filtro){
            procesomanual[index].ver=false
        }
      });
    }else{
      
      filtro_actual.splice(filtro_actual.indexOf(filtro), 1)
      //ACTUALIZO EL RPOCESO
       procesomanual.forEach(function(element, index) {
        if(element.tag==filtro){
            procesomanual[index].ver=true
        }
      });
    }
    this.setState({procesomanualFiltro:filtro_actual})
    this.setState({procesomanual:procesomanual})
   // console.log(this.state.procesomanualFiltro)
    //if()
    //this.setState({edicion:{"caso_ES": caso_ES, "datosFormulario":datosFormulario}});
    



  }


  render() {

    
    if(this.state.estadoLogin===false){

      return (
            <Login tipoLogin={this.state.tipoLogin} estadoLogin={this.estadoLogin} actualizarFichas={this.actualizarFichas}/>
        );
    }else if(this.state.estadoLogin===true){
      return (
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  opciones={this.state.opcionesOsuario} interfazExpandida={this.interfazExpandida} estado={this.state.expandida}/>
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">
                
                
                <div id="barra_lateral_fichas" className="col-2" style={{display: (this.state.expandida ? 'block' : 'none')}}>
                   
                   <div className="row h-25">
                     <div id="search">
                        <div className="col-auto">
                          <div className="input-group mb-2">
                            
                            <input type="text" className="form-control"  placeholder="Buscar" />
                            <div className="input-group-prepend">
                              <div className="input-group-text"><i className="fas fa-search"></i></div>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>

                   <div className="row h-75">
                      
                      <div className="col-12">
                        <ConstruirFichas 
                            fichas={this.state.fichas} 
                            grupos={this.state.grupos} 
                            filtro={this.state.procesomanualFiltro}
                            actualizarOverlayXml={this.actualizarOverlayXml} 
                            desplegarEdicion={this.desplegarEdicion}
                        /> 
                      </div>
                    </div>
                </div>
                <div className={this.state.expandida ? 'col-10' : 'col-12'}>
                  <div className="row h-100">
                      <div id="indicadores" className="col-12 h-25">
                         <div className="row contenedor_indicadores">
                            
                            <div className="col-2">
                                <a className="expandir" onClick={this.interfazExpandida}>  
                                    {this.props.estado ? <i className="fas fa-angle-right"></i> : <i className="fas fa-angle-left"></i>}
                                </a>

                              <div className="row indicaddor">
                                <div className="col-12">
                                   <div className="row">
                                      <div className="col-12 cantidad">256</div>
                                      <div className="col-12 descripcion">Con. en Cola</div>
                                   </div>
                                </div>
                              </div>



                            </div>
                            
                            <div className="col-6">
                              <div className="row">
                                  <ProcesoManual 
                                      procesomanual={this.state.procesomanual}
                                      procesomanualFiltro={this.state.procesomanualFiltro} 
                                      filtroFichas={this.filtroFichas} />
                              </div>
                            </div>
                            
                            <div className="col-4">
                              

                              <div className="row indicaddor">
                                <div className="col-6">
                                   <div className="row">
                                      <div className="col-12 cantidad">25</div>
                                      <div className="col-12 descripcion">Descartados</div>
                                   </div>
                                </div>
                                <div className="col-6">
                                   <div className="row">
                                      <div className="col-12 cantidad">65</div>
                                      <div className="col-12 descripcion">Exitos</div>
                                   </div>
                                </div>


                              </div>



                            </div>
                            
                            
                          
                        </div>
                      </div>
                      <div className="col-12 h-75" >
                        <div className="row h-100">
                          <div className="col-12 h-100">
                                <AreaEdicion formulario={this.state.edicion}  />

                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
  }
}

class OpcioneDeNavegacion extends Component {

/*
                              <BpmnViewer xmlProceso={this.state.xmlProceso} xmlOverlays={this.state.xmlOverlays} estadoProceso={this.state.xmlViwEstadoProceso}/>
                            */

  interfazExpandida = (event) => {

    event.preventDefault();
    this.props.interfazExpandida(this.props);
  }

  render() {

    const opciones = this.props.opciones
    const listItems = opciones.map((number) =>
      <button key={number.opcion} type="button" className="btn btn-light">
        <i className={number.opcion}></i>
      </button>
    );



    
    return (
      <div id="navegacion" className="row">
        <nav className="navbar navbar-light bg-light">
          <li className="navbar-brand"></li>
          <div className="btn-group" role="group" aria-label="Basic example">
            {listItems}
          </div>
        </nav>
      </div>
    );
  }

}

class AppBoton extends Component {
  render() {
    return (
            <button>  
                {this.props.estado.isToggleOn ? '<' : '>'}
            </button>
        
    );
  }
}



export default App;

