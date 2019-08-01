import React, { Component } from 'react';
import './login.css';

class Login extends Component {



  login= ()=> {
    var url = 'http://172.27.86.16:3000/bsync/face/getCasos';
    var data = {
                 "usuario":"eancan"
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
                    //console.log(response.casos);
                      
                     
                      const agrupaciones = []
                      const overlays = []
                      //[{"ID_ETAPA_PROCESO":"SCAN_OK", "NOTA":"AQUI HAY 2 FICHAS" },{"ID_ETAPA_PROCESO":"sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138", "NOTA":"AQUI HAY 1 FICHAS" }]
                      response.casos.forEach(function(element) {
                        //console.log(element);
                        if(agrupaciones.indexOf(element.estado_proceso)<0){
                                agrupaciones.push(element.estado_proceso)
                                overlays.push({"ID_ETAPA_PROCESO":element.estado_proceso, "NOTA":1 })
                        }else{
                            overlays[agrupaciones.indexOf(element.estado_proceso)].NOTA=overlays[agrupaciones.indexOf(element.estado_proceso)].NOTA+1
                              //console.log(agrupaciones.indexOf(element.estado_proceso))
                        }

                      }); 
                      //console.log(overlays)
                      this.props.actualizarFichas(response.casos, agrupaciones, "")
                      console.log("PASSSSSSS")
                      this.props.estadoLogin()

                    }})
    .catch(error => console.error('Error:', error));
    
    
  
  }

  render(){
    if(this.props.tipoLogin=="standar"){
      return ( <div id="log" className="fondo">
              <div className="inicio">
                <div className="logoini"></div>
                <form name="login">
                  <span id="div_login">
                    <div>Inicio de Sesión</div>
                    <input id="id_pass" name="id_pass"  className="form-control form-control-lg" type="text" placeholder="Usuario" />
                    <input id="pass" name="pass" className="form-control form-control-lg" type="password" placeholder="Password" />
                    <div id="msj" className=""></div>
                    <button type="button" id="login" className="btn btn-success btn-lg btn-block confirma_intencion"  onClick={this.login}>LOGIN</button>
                    <div className="ir_recuperar">¿Olvidaste tu clave?</div>
                  </span>
                  <span id="div_recuperar" style={{display:"none"}}>
                    <div>Regeneración de Clave</div>
                    <input id="Email_olv" name="Email_olv" className="form-control" type="text" placeholder="Ingrese su E-mail" />
                    <div id="msj_olv" className=""></div>
                    <div className="btn-group btn-group-justified" role="group" aria-label="...">
                      <div className="btn-group" role="group">
                        <button type="button" id="login_recuperacion" className="btn btn-success">REGENERAR CLAVE</button>
                      </div>
                    </div>
                    <div className="ir_login">Ir al inicio</div>
                  </span>
                </form>
                <div className="sombra"><img src="https://cabify.openpartner.cl/openpartner/img/OP.png" width="100" /></div>
               </div>
            </div> ); 
    }else if(this.props.tipoLogin=="face"){
      return ( <div id="log" className="fondo">
              <div className="inicio">
                <div className="logoini"></div>
                <form name="login">
                  <span id="div_login">
                    <div><h1>Bienvenido</h1></div> 
                    <div className="loader"></div> 
                    <input type="hidden" id="agenteID" name="agenteID"  /> 
                    <input type="hidden" id="uniqueid" name="uniqueid"/>  
                    <input type="hidden" id="idcampania" name="idcampania"/>  
                    <input type="hidden" id="id_tarea_llamando" name="id_tarea_llamando"/>  
                    <div><h3 id="msj" className="mensaje_usuario"></h3></div> 
                  </span>
                  
                </form>
                <div className="sombra"><img src="https://cabify.openpartner.cl/openpartner/img/OP.png" width="100" /></div>
               </div>
            </div> ); 
    }
  }
}

export default Login;