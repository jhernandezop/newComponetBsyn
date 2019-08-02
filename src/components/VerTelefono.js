
import React, { Component } from 'react';
import Draggable from 'react-draggable';


import './VerTelefono.css';

class Vertelefono extends Component {

    constructor(props){
        super(props);
        this.state = {
          numero:""
        }
        
      }


    numero(numero){
        console.log(numero)
        if(numero=="borrar"){
            this.setState({numero:this.state.numero.slice(0, -1)})    
        }else{
            this.setState({numero:this.state.numero+numero})
        }
       

    }

    llamarCliente() {
      
        if(this.state.numero!=""){

            fetch("http://172.27.86.16:3000/bsync/face/call", {
                "method": "POST",
                "headers": {
                  "content-type": "application/json"
                },
                "body": JSON.stringify({
                  "agente": "3999",
                  "accion": "Llamar",
                  "datos": {
                    "destino": this.state.numero
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

      }

   

  render() {

    const telefono=this.state.numero
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
            
            <Draggable  {...dragHandlers}>
                  
                <div id="vertelefono">
                    <div className="controlador">
                        <div class="btn-group btn-group-sm" role="group" >
                            <button type="button" class="btn btn-light"><i class="fas fa-window-minimize"></i></button>
                            <button type="button" class="btn btn-light"><i class="far fa-window-maximize"></i></button>
                            <button type="button" class="btn btn-light"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                    <div>
                        <input className="numero" type="text" value={telefono}   />
                    </div>
                    <div>
                        <div className="tecla" onClick={() => this.numero('1')}>1</div>
                        <div className="tecla" onClick={() => this.numero('2')}>2</div>
                        <div className="tecla" onClick={() => this.numero('3')}>3</div>
                    </div>
                    <div>
                        <div className="tecla" onClick={() => this.numero('4')}>4</div>
                        <div className="tecla" onClick={() => this.numero('5')}>5</div>
                        <div className="tecla" onClick={() => this.numero('6')}>6</div>
                    </div>
                    <div>
                        <div className="tecla" onClick={() => this.numero('7')}>7</div>
                        <div className="tecla" onClick={() => this.numero('8')}>8</div>
                        <div className="tecla" onClick={() => this.numero('9')}>9</div>
                    </div>
                    <div>
                        <div className="tecla" onClick={() => this.numero('*')}>*</div>
                        <div className="tecla" onClick={() => this.numero('0')}>0</div>
                        <div className="tecla" onClick={() => this.numero('#')}>#</div>
                    </div>
                    <div>
                        <div className="marcar" onClick={() => this.llamarCliente()}>LLAMAR</div>
                        <div className="borrar" onClick={() => this.numero("borrar")}><i class="fas fa-times"></i></div>
                    </div>
                </div>
            </Draggable>
        
    );
  }
}
export default Vertelefono;

