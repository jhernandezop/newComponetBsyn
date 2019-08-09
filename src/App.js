// App.js
import React, { Component } from 'react';  
import './App.css';  
import Login from './components/login'; 
import BpmnViewer from './components/BpmnViewer'
import ConstruirFichas from './components/ConstruirFichas';
import AreaEdicion from './components/AreaEdicion';
import PrimerGrafico from './components/Dgraficos';
import ProcesoManual from './components/ProcesoManual';
import Vertelefono from './components/VerTelefono';
import Agenda from './components/Agenda';
import Search from './components/Search';
import Timelines from './components/Timeline';
import moment from 'moment';

//import Footer from './components/Footer';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       expandida: true,
       estadoLogin:false,
       tipoLogin:"standar",
       verTelefono: false,
       verAgenda:false,
       anexo:"",
       tipoUsuario:"",
       ejecutivos:[],
       interfaz:"gestion",
       grupos:[],
       fichas:[],
       //opcionesOsuario:[{opcion:"Estado", funcion:"x"},{opcion:"Logoff Usuario", funcion:"x"},{opcion:"Pausar", funcion:"x"},{opcion:"Llamar", funcion:"x"},{opcion:"Cortar", funcion:"x"},{opcion:"Transferir", funcion:"x"}],
       opcionesOsuario:[
                        {
                          opcion:"fab fa-trello", 
                          funcion:"gestion"
                        },
                        {
                          opcion:"fas fa-chart-pie", 
                          funcion:"reporte_superivisor"
                        },
                        {
                          opcion:"fas fa-chart-line", 
                          funcion:"reporte"
                        },
                        {
                          opcion:"far fa-calendar-alt", 
                          funcion:"agenda"
                        },
                        {
                          opcion:"fa fa-headset", 
                          funcion:"telefono"
                        },
                        {
                          opcion:"fas fa-user-times", 
                          funcion:"salir"
                        }
                       ],
       xmlProceso:"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\"\r\n             xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\"\r\n             xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\"\r\n             xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\"\r\n             xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n             expressionLanguage=\"http://www.w3.org/1999/XPath\"\r\n             typeLanguage=\"http://www.w3.org/2001/XMLSchema\"\r\n             targetNamespace=\"\"\r\n             xsi:schemaLocation=\"http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd\">\r\n<collaboration id=\"sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424\">\r\n    <participant id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" name=\"Customer\" processRef=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\">\r\n    </participant>\r\n</collaboration>\r\n<process id=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\" isClosed=\"false\" isExecutable=\"false\" name=\"Customer\" processType=\"None\">\r\n    <extensionElements/>\r\n    <laneSet id=\"sid-b167d0d7-e761-4636-9200-76b7f0e8e83a\">\r\n        <lane id=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254\">\r\n            <flowNodeRef>sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138</flowNodeRef>\r\n            <flowNodeRef>sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26</flowNodeRef>\r\n            <flowNodeRef>SCAN_OK</flowNodeRef>\r\n            <flowNodeRef>sid-E49425CF-8287-4798-B622-D2A7D78EF00B</flowNodeRef>\r\n            <flowNodeRef>sid-E433566C-2289-4BEB-A19C-1697048900D2</flowNodeRef>\r\n            <flowNodeRef>sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9</flowNodeRef>\r\n        </lane>\r\n    </laneSet>\r\n    <startEvent id=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" name=\"Notices&#10;QR code\">\r\n        <outgoing>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</outgoing>\r\n    </startEvent>\r\n    <task completionQuantity=\"1\" id=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" isForCompensation=\"false\" name=\"Scan QR code\" startQuantity=\"1\">\r\n        <incoming>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</incoming>\r\n        <outgoing>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</outgoing>\r\n    </task>\r\n    <exclusiveGateway gatewayDirection=\"Diverging\" id=\"SCAN_OK\" name=\"Scan successful?&#10;\">\r\n        <incoming>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</incoming>\r\n        <outgoing>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</outgoing>\r\n        <outgoing>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</outgoing>\r\n    </exclusiveGateway>\r\n    <task completionQuantity=\"1\" id=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" isForCompensation=\"false\" name=\"Open product information in mobile  app\" startQuantity=\"1\">\r\n        <incoming>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</incoming>\r\n        <outgoing>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</outgoing>\r\n    </task>\r\n    <endEvent id=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\" name=\"Is informed\">\r\n        <incoming>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</incoming>\r\n    </endEvent>\r\n    <exclusiveGateway gatewayDirection=\"Converging\" id=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\">\r\n        <incoming>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</incoming>\r\n        <incoming>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</incoming>\r\n        <outgoing>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</outgoing>\r\n    </exclusiveGateway>\r\n    <sequenceFlow id=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD\" sourceRef=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" targetRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\"/>\r\n    <sequenceFlow id=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A\" sourceRef=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" targetRef=\"SCAN_OK\"/>\r\n    <sequenceFlow id=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C\" sourceRef=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" targetRef=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\"/>\r\n    <sequenceFlow id=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB\" name=\"No\" sourceRef=\"SCAN_OK\" targetRef=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\"/>\r\n    <sequenceFlow id=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D\" sourceRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\" targetRef=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\"/>\r\n    <sequenceFlow id=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE\" name=\"Yes\" sourceRef=\"SCAN_OK\" targetRef=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\"/>\r\n</process>\r\n<bpmndi:BPMNDiagram id=\"sid-74620812-92c4-44e5-949c-aa47393d3830\">\r\n    <bpmndi:BPMNPlane bpmnElement=\"sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424\" id=\"sid-cdcae759-2af7-4a6d-bd02-53f3352a731d\">\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"933.0\" x=\"42.5\" y=\"75.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"59.142852783203125\" width=\"12.000000000000014\" x=\"47.49999999999999\" y=\"170.42857360839844\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254\" id=\"sid-57E4FE0D-18E4-478D-BC5D-B15164E93254_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"903.0\" x=\"72.5\" y=\"75.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138\" id=\"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138_gui\">\r\n            <omgdc:Bounds height=\"30.0\" width=\"30.0\" x=\"150.0\" y=\"165.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"22.0\" width=\"46.35714340209961\" x=\"141.8214282989502\" y=\"197.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26\" id=\"sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"352.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"84.0\" x=\"360.5\" y=\"172.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"SCAN_OK\" id=\"SCAN_OK_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"550.0\" y=\"160.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"102.0\" x=\"521.0\" y=\"127.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B\" id=\"sid-E49425CF-8287-4798-B622-D2A7D78EF00B_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"687.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"36.0\" width=\"83.14285278320312\" x=\"695.9285736083984\" y=\"162.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-E433566C-2289-4BEB-A19C-1697048900D2\" id=\"sid-E433566C-2289-4BEB-A19C-1697048900D2_gui\">\r\n            <omgdc:Bounds height=\"28.0\" width=\"28.0\" x=\"865.0\" y=\"166.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"11.0\" width=\"62.857147216796875\" x=\"847.5714263916016\" y=\"196.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9\" id=\"sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"240.0\" y=\"160.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A\" id=\"sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A_gui\">\r\n            <omgdi:waypoint x=\"452.5\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"550.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB\" id=\"sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB_gui\">\r\n            <omgdi:waypoint x=\"590.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"687.5\" y=\"180\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.048704338048935\" width=\"16.32155963195521\" x=\"597.8850936986571\" y=\"155\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD\" id=\"sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD_gui\">\r\n            <omgdi:waypoint x=\"180.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"240.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D\" id=\"sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D_gui\">\r\n            <omgdi:waypoint x=\"280.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"352.5\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C\" id=\"sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C_gui\">\r\n            <omgdi:waypoint x=\"787.5\" y=\"180.0\"/>\r\n            <omgdi:waypoint x=\"865.0\" y=\"180.0\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE\" id=\"sid-337A23B9-A923-4CCE-B613-3E247B773CCE_gui\">\r\n            <omgdi:waypoint x=\"570.5\" y=\"200.0\"/>\r\n            <omgdi:waypoint x=\"570.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"200.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"21.4285888671875\" width=\"12.0\" x=\"550\" y=\"205\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n    </bpmndi:BPMNPlane>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"11.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"12.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n</bpmndi:BPMNDiagram>\r\n</definitions>\r\n\r\n",
       xmlOverlays:[{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":"AQUI HAY 3 FICHAS" },{"ID_ETAPA_PROCESO":"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138", "NOTA":"AQUI HAY 2 FICHAS" }],
       xmlViwEstadoProceso:"",
       edicion:[],
       procesomanual:[
                        {tag:"contacto", cantidad:0, ver: true, canales:[]},
                        {tag:"nuevo", cantidad:0, ver: true, canales:[]},
                        {tag:"en gestion", cantidad:0, ver: true, canales:[]},
                        /*{
                          tag:"en gestion", 
                          cantidad:0, 
                          ver: true, 
                          canales:[
                                    { 
                                      tag:"seguimiento",cantidad:0, 
                                      ver: true, 
                                      tipificacion:[
                                                      {
                                                          tag:"sin respuesta", 
                                                          cantidad:0, 
                                                          ver:true
                                                      },
                                                      {
                                                          tag:"en seguimiento", 
                                                          cantidad:0, 
                                                          ver:true
                                                      }
                                                    ]
                                    },
                                    {tag:"agendado",cantidad:0, ver: true},
                                    {tag:"sin respuesta",cantidad:0, ver: true}
                                  ]
                        }*/
                      ],
       procesomanualFiltro:[],
       searchFiltro:""


     }

    this.interfazExpandida = this.interfazExpandida.bind(this);
    this.estadoLogin = this.estadoLogin.bind(this);
    this.actualizarFichas = this.actualizarFichas.bind(this);
    this.actualizarOverlayXml = this.actualizarOverlayXml.bind(this);
    this.desplegarEdicion = this.desplegarEdicion.bind(this);
    this.estadoProceso = this.estadoProceso.bind(this);
    this.filtroFichas = this.filtroFichas.bind(this)
    this.navegarInterfaz=this.navegarInterfaz.bind(this)
    this.estadoAgenda=this.estadoAgenda.bind(this)
    this.estadoTelefono=this.estadoTelefono.bind(this)
    this.searchFiltro=this.searchFiltro.bind(this)
    this.pedirFichas=this.pedirFichas.bind(this)
    

  }

  pedirFichas(){

    //console.log(this.state.anexo)

    var url = 'https://bscore.openpartner.cl/gdm%22,%7B';
    var data = {
                  "tx"      : "getTs",
                  "ts_o"    : moment().format('YYYY-MM-DDTHH:mm:ss'),
                  "tx_user"   : this.state.anexo,
                  "origen"    : "pruebas EFRAIN",
                  "columnas"  : ""
              };
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      "mime.type":"application/json; charset=utf8",  
      headers:{
      'Content-Type': 'text/plain'
      }
    })
    .then(res => res.json())
    .then(response => {if(response){
                    //console.log(response.casos);
                     const agrupaciones = []  
                    if(response.estatus=="OK"){
                     
                     
                      //const overlays = []
                      //[{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":"AQUI HAY 2 FICHAS" },{"ID_ETAPA_PROCESO":"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138", "NOTA":"AQUI HAY 1 FICHAS" }]
                      response.casos.forEach(function(element) {
                        //console.log(element);

                        //PARSEO DE DATOS 
                        if(element.estado=="nuevo"){
                          element.estado="nuevo";
                        }else if(element.estado=="en_gestion"){
                          element.estado="en gestion";
                        }else if(element.estado==""){
                           element.estado="nuevo";
                        }else if(element.estado=="seguimiento" || element.estado=="agendado propio" || element.estado=="sin respuesta"){
                           element.estado="en gestion";
                        }else if(element.canal=="web" && Number(element.nro_gestion)>=1){
                           element.estado="en gestion";
                        }else if(element.canal=="telefonia" && Number(element.nro_gestion)>=1){
                           element.estado="en gestion";
                        }
                        
                        //element.tipo_caso="Seguimiento"
                        //element["tipificacion"]="sin respuesta";

                        
                        if(agrupaciones.indexOf(element.estado_proceso)<0){
                                agrupaciones.push(element.estado_proceso)
                                //overlays.push({"ID_ETAPA_PROCESO":element.estado_proceso, "NOTA":1 })
                        }else{
                            //overlays[agrupaciones.indexOf(element.estado_proceso)].NOTA=overlays[agrupaciones.indexOf(element.estado_proceso)].NOTA+1
                              //console.log(agrupaciones.indexOf(element.estado_proceso))
                        }

                      }); 

                       //response.casos[2].estado_proceso="contacto";
                       //response.casos[2].tipificacion="en seguimiento"
                       //response.casos[4].tipificacion="en seguimiento"
                      //console.log(response.casos)
                      this.actualizarFichas(response.casos, agrupaciones, "")
                      //console.log("PASSSSSSS")
                      
                    }else{

                      this.actualizarFichas([], agrupaciones, "")
                      //console.log("PASSSSSSS")
                      

                    }

                    }})
    .catch(error => console.error('Error:', error));
    
    

  }

  pedirEjecutivos(){


    //console.log(this.state.anexo)

    var url = 'https://bscore.openpartner.cl/gdm%22,%7B';
    var data = {
                  "tx"      : "getEP",
                  "tx_user"   : "3099",
                  "tx_version": "0.3",
                  "destino"   : "test"
              };
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      "mime.type":"application/json; charset=utf8",  
      headers:{
      'Content-Type': 'text/plain'
      }
    })
    .then(res => res.json())
    .then(response => {
            
            if(response.estatus=="OK"){
              const ejecutivos = [];
              /*  response.data.forEach(function(element) {
                  ejecutivos.push({
                                    "label": element.ConsultorVentas,
                                    "value": element.RUT
                  })  

                }); 

            */


               this.setState({ejecutivos:response.data});


            }
            //console.log(this.state.ejecutivos)

    })
    .catch(error => console.error('Error:', error));




  }

  searchFiltro(texto){

    //console.log(texto)
    this.setState({searchFiltro:texto});

  }

  estadoTelefono(){
    this.setState(state => ({
      verTelefono: !state.verTelefono
    }));
  }

  estadoAgenda(){
    this.setState(state => ({
      verAgenda: !state.verAgenda
    }));
  }

  interfazExpandida() {
    
    this.setState(state => ({
      expandida: !state.expandida
    }));
  }

  estadoLogin(data) {
    //console.log(data)

    if(data.anexo!=""){
      this.setState({anexo:data.anexo});
      this.setState(state => ({
        estadoLogin: !state.estadoLogin
      }));
      this.pedirFichas();
      this.pedirEjecutivos();

    }
    
    
  }

  actualizarFichas(fichas, grupos, overlays) {
   //console.log(fichas)
    this.setState({fichas:fichas});
    this.setState({grupos: grupos});
    //this.setState({xmlOverlays: overlays});
    //ACTUALIZAR CANTIDADES DEL PROCESO
    const procesomanual=this.state.procesomanual
    //SETEO PROCESO MANUAL A 0
     procesomanual.forEach(function(element_a, index_a) {
          element_a.cantidad=0;
     })


    //RRECORRO LA FICHAS
    fichas.forEach(function(element_a, index_a) {

        //RRECORRO EL PROCESO
        procesomanual.forEach(function(element_b, index_b) {
            
            if(element_b.tag==element_a.estado){
                procesomanual[index_b].cantidad=procesomanual[index_b].cantidad+1
            }
            
            //SI EXISTEN CANALES EN EL PROCESO
            if(element_b.canales.length>0 && element_b.tag==element_a.estado){

              //RRECORRO LOS CANALES
               element_b.canales.forEach(function(element_c, index_c) {
                     
                    //CUENTO CUANTOS EN ESE CANAL
                     //console.log(  element_b.canales[index_c].tag+"/"+element_a.tipo_caso)
                     if( element_b.canales[index_c].tag == element_a.tipo_caso){
                        //console.log("SUMO")
                        //console.log(element_a.caso_ES)
                          procesomanual[index_b].canales[index_c].cantidad=procesomanual[index_b].canales[index_c].cantidad+1
                      }

                      //VERIFICO SI TIENE DEFINIDA TIPIFICACION
                      
                       if(element_c.tipificacion ){
                        
                          element_c.tipificacion.forEach(function(element_d, index_d) {

                            if(element_d.tag==element_a.tipificacion){
                                
                                procesomanual[index_b].canales[index_c].tipificacion[index_d].cantidad++
                               // element_d.cantidad++
                            }

                          })
                       }





               })
            

            }

        });
    })
    this.setState({procesomanual:procesomanual})
    console.log(this.state.procesomanual)

    
  }

  actualizarOverlayXml(overlays) {
    //console.log(overlays)
    this.setState({xmlOverlays: [{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":overlays, "ID_FICHA":overlays }]});
    
   // console.log(this.state.xmlOverlays)
  }

  estadoProceso(en_esatdo){

    //console.log(en_esatdo)
  }


  desplegarEdicion(datosFormulario, ficha) {
    //console.log(datosFormulario)
    
     
  
    this.setState({edicion:[{"ficha": ficha, "datosFormulario":datosFormulario}]});

  }


  filtroFichas(filtro){
    //console.log(filtro)

    //procesomanualFiltro
    const filtro_actual=this.state.procesomanualFiltro
    const procesomanual=this.state.procesomanual
    //console.log(filtro_actual)
    if(filtro_actual.indexOf(filtro)==-1){
      //LLENO EL FILTRO
      filtro_actual.push(filtro)
      //ACTUALIZO EL RPOCESO
      procesomanual.forEach(function(element, index) {
        //PRIMER NIVEL
        if(element.tag==filtro){
            procesomanual[index].ver=false
        }
        //SEGUNDO NIVEL
        element.canales.forEach(function(element_b, index_b) {
          if(element_b.tag==filtro){
            procesomanual[index].canales[index_b].ver=false
          }
          //TERCER NIVEL
          if(element_b.tipificacion){
            element_b.tipificacion.forEach(function(element_c, index_c) {
              if(element_c.tag==filtro){
                procesomanual[index].canales[index_b].tipificacion[index_c].ver=false
              }

            })
          }
          

        })


      });
    }else{
      
      filtro_actual.splice(filtro_actual.indexOf(filtro), 1)
      //ACTUALIZO EL RPOCESO
       procesomanual.forEach(function(element, index) {
        //PRIMER NIVEL
        if(element.tag==filtro){
            procesomanual[index].ver=true
        }
        //SEGUNDO NIVEL
        element.canales.forEach(function(element_b, index_b) {
          if(element_b.tag==filtro){
            procesomanual[index].canales[index_b].ver=true
          }
          //TERCER NIVEL
          if(element_b.tipificacion){
            element_b.tipificacion.forEach(function(element_c, index_c) {
              if(element_c.tag==filtro){
                procesomanual[index].canales[index_b].tipificacion[index_c].ver=true
              }

            })
          }

        })
      });
    }
    this.setState({procesomanualFiltro:filtro_actual})
    this.setState({procesomanual:procesomanual})
    //console.log(this.state.procesomanual)
    //if()
    //this.setState({edicion:{"caso_ES": caso_ES, "datosFormulario":datosFormulario}});
    



  }

  navegarInterfaz(opcion){
  
    if(opcion=="salir"){
      this.setState({estadoLogin:false})
      this.setState({interfaz:"gestion"})
    }else if(opcion=="telefono"){

      this.setState(state => ({
        verTelefono: !state.verTelefono
      }));

      console.log(this.state.verTelefono)

    }else if(opcion=="agenda"){

      this.setState(state => ({
        verAgenda: !state.verAgenda
      }));


    }else{
      this.setState({interfaz:opcion})

    }
  }


  render() {

   
    
    if(this.state.estadoLogin==false){

      return (
            <Login tipoLogin={this.state.tipoLogin} estadoLogin={this.estadoLogin} actualizarFichas={this.actualizarFichas}/>
        );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz=="gestion"){
      return (

        <div className="container-fluid h-100">
          

          {this.state.verTelefono ==true && <Vertelefono estadoTelefono={this.estadoTelefono} />}
          {this.state.verAgenda ==true && <Agenda  estadoAgenda={this.estadoAgenda}/>}
          
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                              opciones={this.state.opcionesOsuario} 
                              interfazExpandida={this.interfazExpandida} 
                              estado={this.state.expandida}
                              navegarInterfaz={this.navegarInterfaz}
                          />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">
                
                
                <div id="barra_lateral_fichas" className="col-2" style={{display: (this.state.expandida ? 'block' : 'none')}}>
                   
                   <div className="row h-25">

                    <Search  
                          procesomanual={this.state.procesomanual} 
                          filtroFichas={this.filtroFichas} 
                          filtro={this.state.procesomanualFiltro}
                          searchFiltro={this.searchFiltro}
                    />
                     
                   </div>

                   <div className="row h-75">
                      
                      <div className="col-12">
                        <ConstruirFichas 
                            fichas={this.state.fichas} 
                            grupos={this.state.grupos} 
                            filtro={this.state.procesomanualFiltro}
                            filtroFichas={this.filtroFichas}
                            searchFiltro={this.state.searchFiltro}
                            actualizarOverlayXml={this.actualizarOverlayXml} 
                            desplegarEdicion={this.desplegarEdicion}
                            procesomanual={this.state.procesomanual}
                        /> 
                      </div>
                    </div>
                </div>
                <div className={this.state.expandida ? 'col-8' : 'col-9'}>
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
                          <div   className="col-12 h-100">
                                <AreaEdicion 
                                  formulario={this.state.edicion} 
                                  estadoAgenda={this.estadoAgenda}
                                  ejecutivos={this.state.ejecutivos}
                                  anexo={this.state.anexo}
                                  pedirFichas={this.pedirFichas}
                                /> />

                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                <div id="lineadetiempo" className={this.state.expandida ? 'col-2 h-100' : 'col-3 h-100'}>
                  <Timelines  edicion={this.state.edicion}/>
                </div>
            </div>
          </div>
        );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz=="reporte"){
      return (
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                          opciones={this.state.opcionesOsuario} 
                          interfazExpandida={this.interfazExpandida} 
                          estado={this.state.expandida}
                          navegarInterfaz={this.navegarInterfaz}
                        />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">

                <iframe src={"https://ks2.openpartner.cl/s/gildemeister/app/kibana#/dashboard/3d231760-ba0a-11e9-9b8e-b94dc0c5d9c8?embed=true&_g=(filters:!())&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,field:doc_candidato_anexo,index:'1dc57010-b9f7-11e9-9b8e-b94dc0c5d9c8',key:doc_candidato_anexo,negate:!f,params:(query:'"+this.state.anexo+"'),type:phrase,value:'"+this.state.anexo+"'),script:(script:(lang:painless,params:(value:'"+this.state.anexo+"'),source:'boolean%20compare(Supplier%20s,%20def%20v)%20%7Breturn%20s.get()%20%3D%3D%20v;%7Dcompare(()%20-%3E%20%7B%20def%20nombre%3D%20doc%5B!'doc_co_lugaratencion.keyword!'%5D.value;%0D%0A%0D%0Aif%20(nombre%3D%3D%20%22AG20014%22)%20%7Breturn%20%223051%22%7D%0D%0Aif%20(nombre%3D%3D%20%22AG20015%22)%20%7Breturn%20%223003%22%7D%0D%0Aif%20(nombre%3D%3D%20%22AG20016%22)%20%7Breturn%20%223053%22%7D%0D%0Aif%20(nombre%3D%3D%20%22AG20023%22)%20%7Breturn%20%223001%22%7D%0D%0Aif%20(nombre%3D%3D%20%22AG20041%22)%20%7Breturn%20%223052%22%7D%20%0D%0Aif%20(nombre%3D%3D%20%22AG20057%22)%20%7Breturn%20%223006%22%7D%20%0D%0Aif%20(nombre%3D%3D%20%22AG20075%22)%20%7Breturn%20%223001%22%7D%0D%0Aif%20(nombre%3D%3D%20%22AG20076%22)%20%7Breturn%20%223006%22%7D%20%0D%0Aif%20(nombre%3D%3D%20%2225584175-0%22)%20%7Breturn%20%223099%22%7D%20%0D%0A%0D%0Aelse%20%7Breturn%20%223099%22%7D%20%0D%0A%0D%0A%20%7D,%20params.value);')))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:12,i:'1',w:7,x:0,y:0),id:'98c3edc0-ba09-11e9-9b8e-b94dc0c5d9c8',panelIndex:'1',title:'Casos%20del%20periodo',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:12,i:'2',w:19,x:7,y:0),id:'1a9a1000-ba13-11e9-9b8e-b94dc0c5d9c8',panelIndex:'2',title:'Estado%20de%20casos',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'3',w:7,x:26,y:0),id:'889f5880-ba13-11e9-9b8e-b94dc0c5d9c8',panelIndex:'3',title:Contactabilidad,type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'4',w:8,x:33,y:0),id:e443e2f0-ba13-11e9-9b8e-b94dc0c5d9c8,panelIndex:'4',title:Agendamiento,type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'5',w:7,x:41,y:0),id:'57d4b1e0-ba14-11e9-9b8e-b94dc0c5d9c8',panelIndex:'5',title:'Casos%20Gestionados',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:6,i:'6',w:22,x:26,y:6),id:'877b38f0-ba15-11e9-9b8e-b94dc0c5d9c8',panelIndex:'6',title:'M%C3%A9tricas%20por%20sucursal',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:5,i:'7',w:7,x:0,y:12),id:'1e601150-ba16-11e9-9b8e-b94dc0c5d9c8',panelIndex:'7',title:'C.%20%20gestionados%20del%20periodo',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:5,i:'8',w:7,x:0,y:17),id:'9a969040-ba1c-11e9-9b8e-b94dc0c5d9c8',panelIndex:'8',title:'Total%20gestiones%20del%20periodo',type:visualization,version:'7.3.0'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'9',w:19,x:7,y:12),id:'51305ce0-ba1e-11e9-9b8e-b94dc0c5d9c8',panelIndex:'9',title:'Resultado%20de%20gestion',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:10,i:'10',w:22,x:26,y:12),id:'51a9dd30-ba1f-11e9-9b8e-b94dc0c5d9c8',panelIndex:'10',title:'Gestiones%20por%20caso',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:9,i:'11',w:48,x:0,y:22),id:c09925a0-ba21-11e9-9b8e-b94dc0c5d9c8,panelIndex:'11',title:'Casos%20Ingresados%20Por%20D%C3%ADa%20y%20Gestionados',type:visualization,version:'7.3.0'),(embeddableConfig:(),gridData:(h:9,i:'12',w:48,x:0,y:31),id:'562e4c80-ba22-11e9-9b8e-b94dc0c5d9c8',panelIndex:'12',type:visualization,version:'7.3.0')),query:(language:kuery,query:''),timeRestore:!f,title:'FACE%200.3%20-%20EJECUTIVOS',viewMode:view)"} height="100%" width="100%"></iframe>
              }
               
                
          </div>
        </div>
      );
    }else if(this.state.estadoLogin==true &&  this.state.interfaz=="reporte_superivisor"){
      return (
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12">
                        <OpcioneDeNavegacion  
                          opciones={this.state.opcionesOsuario} 
                          interfazExpandida={this.interfazExpandida} 
                          estado={this.state.expandida}
                          navegarInterfaz={this.navegarInterfaz}
                        />
            </div>
          </div>
          <div id="contenedor_app" className="row h-100 ">

                <iframe src={"https://ks2.openpartner.cl/s/gildemeister/app/kibana#/dashboard/82e55d50-ba3a-11e9-9b8e-b94dc0c5d9c8?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A%272019-08-07T00%3A00%3A00.000Z%27%2Cto%3A%272019-08-09T23%3A59%3A59.999Z%27))"} height="100%" width="100%"></iframe>
              }
               
                
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
      <button key={number.opcion} type="button"  onClick={() => this.props.navegarInterfaz(number.funcion)} className="btn btn-light">
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

