import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './Timeline.css';  



class Timelines extends Component {


  constructor(props) {
    super(props);
    this.state = {
      timelinedata: [],
      uniqueid:""
    }
      //this.handleSubmit = this.handleSubmit.bind(this)
  }
// RECIBO EL MENSAJE
  componentDidMount () {


   
  }

  componentWillReceiveProps(nextProps){
   

    if(nextProps.edicion.length>=1){

        console.log(nextProps.edicion[0].ficha.caso_ES)
        const uid=nextProps.edicion[0].ficha.caso_ES
        this.state.uniqueid=uid
        console.log(this.state.uniqueid)
        this.handleSubmit()
    }
    
  }
// ENVÍO MENSAJE AL SERVIDOR
  handleSubmit () {
    
    let uid = this.state.uniqueid //event.target.value
    console.log(this.state.uniqueid)
    console.log(uid)
      // acá guardo el estado
     // this.setState({...this.state.uniqueid, uid});
    
     fetch("https://bscore.openpartner.cl/gdm",{
      method: 'POST',
        headers: {'Content-Type':'text/plain'},
        body:JSON.stringify({
          "tx"    : "anyQ",
          "index" : "gm_webleads_full_0.3",
          "query" :{
                    "sort" : [
                              { "ges_ts": { "order" : "desc"}
                    }
                    ],
          "_source": ["caso_ts", "ges_ts", "ges_resultado"],
          "query": {
          "bool": {
            "should": [
              {
                "term": {
                  "caso_S2_id.keyword": uid
                }
              }
            ]
          }
        }
      }
      })
    })
    .then(res => res.json())
    .then(
      (data) => {
        //console.log("prueba0: "+JSON.stringify(this.state));
        //console.log("prueba1: "+JSON.stringify(data.data));
        this.setState({
          timelinedata: data.data.hits.hits
        });
        //console.log("prueba3: "+JSON.stringify(this.state));
      },
        
        //alert(result)
      

      (error) => {
      console.log(error)
      }
    );
      //console.log(this.state.uniqueid)
      
  }

  render() {
   
    // acá actualizo el componente y recorro el estado com map


    const timelinedata = this.state.timelinedata.map((timeline, index) => {
      //console.log('todo: '+ JSON.stringify(timeline._source.ges_ts));
      
      if(!timeline._source.ges_ts){
         // esta es la primera gestion
         var str = timeline._source.caso_ts;
         var res = str.split(".");
         var fecha = res[0];

         var str2 = fecha;
         var res2 = str2.split("T");
         fecha = res2[0]+' '+res2[1];

          return <div>
                  <TimelineItem
                    key={index}
                    dateText={fecha}
                    style={{ color: '#00a09d', background: '#00a09d!important' }}
                    
                  >
                    <span className="titulo">Recepción de caso</span>
                    <span className="subtitulo">Nuevo caso</span>
                    
                    
                  </TimelineItem>
                </div>
       
      }else{
        var str = timeline._source.ges_ts;
        var res = str.split(".");
        var fecha = res[0];

        var str2 = fecha;
        var res2 = str2.split("T");
        fecha = res2[0]+' '+res2[1];

        return <div>
                  <TimelineItem
                    key={index}
                    dateText={fecha}
                    style={{ color: '#e86971' }} 
                  >
                    <span className="titulo">Gestión</span>
                    <span className="subtitulo">{timeline._source.ges_resultado.replace("_"," ")}</span>
                  
                  </TimelineItem>
                </div>
               
      }
      
      
    });
    
    // el return devuelve el conenido
    return(
            
              <Timeline lineColor={'#9e9d9d'}>
                {timelinedata} 
              </Timeline>
            

     
    )
  }
}

export default Timelines;
//ReactDOM.render(<Chat/>, document.getElementById('root'));





