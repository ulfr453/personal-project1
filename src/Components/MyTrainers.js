import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import Footer from './Footer'

const drillBody = {
    // backgroundImage: 'url(https://lh3.googleusercontent.com/hD8U_2yXxm_0CKWnMVvY9GgoVzMa8eAJGkMQuG6SGxeABr8C9aRdvvqrBk6IQRUeQKIh2AFcfOUTqLx_GxFMPW0P-ZXNd8d2qxyaXwmbTSg2kSp3wvP2X5ySqIqxCa1CYKNHW98ySAz9ppY5D4pyrnfbqZ26cd4rCHZE11XcC_O4uRhKpkIvYrYWVt5csC9T4mn9sAliSkQTl8lusmoCMm2TrcBt-K6am0Z0AuiuTdSkvbsoZBELnCXwbNXckL-1KbBPr0uQ2aof89RNml8pzt-YCBXw2EB8zg7DE1FOX8d1y46ao0qLbMoeVkRen4IKtHUO0rkKFMsLArfpQVO6yvuMUK2QLQr22DhC6PUZLkiKe-fZ425iPD4CVuFIDehRocGEbwkNWwGSwrR_ylUBYtKf2RmbTowRI1e8onVR3fmvIEXdRhIvHPaJJ6anSmNMyLtMtSY20Lks7eV8YyP1y8KXBtKthrj2R4vMdcVoQdpTmzpDw3Vu7Eqjk0AlUjn5jXaBNrcTNdDhQnbCXW9x-3h-fbKV8F5MdVRvptOF-RrudqcnkLP0ReEaWK_OU2DRG661LscDxBXGzm7f3p-ZYWZ8lFg_cWXlMs-ya604u1o-d6Qt0MaKLZxPn0Sv7nEMchjXUjZDp3cW26ty5BoIeUUBXW1JTN_D31cThNRB3vpVqr_VAX25zmli=w431-h657-no)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100%',
    // backgroundPosition: 'center',
    // backgroundAttachment: 'fixed',
    // backgroundColor: 'transparent', 
    // backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const space = {
    backgroundColor: 'black',
    width: '100%',
    height: '5px'
}

const quoteBox = {
    // backgroundColor: 'rgb(223, 206, 206)',
    backgroundColor: 'rgba(117, 111, 111, 0.95)',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'

}

const buttonDiv = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const drilltable = {
    backgroundImage: 'url(https://lh3.googleusercontent.com/hD8U_2yXxm_0CKWnMVvY9GgoVzMa8eAJGkMQuG6SGxeABr8C9aRdvvqrBk6IQRUeQKIh2AFcfOUTqLx_GxFMPW0P-ZXNd8d2qxyaXwmbTSg2kSp3wvP2X5ySqIqxCa1CYKNHW98ySAz9ppY5D4pyrnfbqZ26cd4rCHZE11XcC_O4uRhKpkIvYrYWVt5csC9T4mn9sAliSkQTl8lusmoCMm2TrcBt-K6am0Z0AuiuTdSkvbsoZBELnCXwbNXckL-1KbBPr0uQ2aof89RNml8pzt-YCBXw2EB8zg7DE1FOX8d1y46ao0qLbMoeVkRen4IKtHUO0rkKFMsLArfpQVO6yvuMUK2QLQr22DhC6PUZLkiKe-fZ425iPD4CVuFIDehRocGEbwkNWwGSwrR_ylUBYtKf2RmbTowRI1e8onVR3fmvIEXdRhIvHPaJJ6anSmNMyLtMtSY20Lks7eV8YyP1y8KXBtKthrj2R4vMdcVoQdpTmzpDw3Vu7Eqjk0AlUjn5jXaBNrcTNdDhQnbCXW9x-3h-fbKV8F5MdVRvptOF-RrudqcnkLP0ReEaWK_OU2DRG661LscDxBXGzm7f3p-ZYWZ8lFg_cWXlMs-ya604u1o-d6Qt0MaKLZxPn0Sv7nEMchjXUjZDp3cW26ty5BoIeUUBXW1JTN_D31cThNRB3vpVqr_VAX25zmli=w431-h657-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    // backgroundColor: 'transparent',
    // backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
    
}

const drillBodyOne = {
    // backgroundColor: '#333333', 
    height: '100vh', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}
  const drillbox = {
    // backgroundColor: 'transparent',
    width: '500px',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '10px',
    backgroundColor: 'rgba(172, 154, 123, 0.8)',
    borderRadius: '15px',
    flexWrap: 'wrap'
      
  }

  const drillLabel = {
      fontSize: '15px',
      margin: '5px'
  }


const buttonStyle = {
    backgroundColor: '#222222',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    width: '100px',
    height: '50px'
}

const RemoveTrainersButton = {
    backgroundColor: 'rgb(189, 113, 99)',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'

}




class MyTraining extends Component{
    constructor(){
        super()
        this.state ={
            myTrainersUrl: '/api/myTrainers',
            myTrainers: []

        }
    }

    componentDidMount(){
        
        this.rerender()
        
    
      }


      rerender= () => {
        const {myTrainersUrl} = this.state;
            
        axios.get(myTrainersUrl).then(results => {
            console.log(results)
          this.setState({myTrainers: results.data})
        }).catch(err => console.log(err))
      }


      removeTrainer = (trainer_id) => {

          axios.delete(`/api/removeTrainer/${trainer_id}`)
          .then(() => {
            this.rerender()
          }).catch(err => console.log(err))
      }




      

    render(){
        
        console.log(this.state.myTrainers)
        return(
            <div style= { drillBody}>
                <div style= {space}></div>
                
                {/* <div style= {drilltable}> */}
                <div style= {drilltable}>
                 <div style= {quoteBox}>
                 “With every triumph I am empowered, with every failure I am resolute—I will never quit!” ― Dale Comstock, former Army JSOC Operator

                </div>
                <div style= {buttonDiv}>
                <button style= {buttonStyle} onClick={() => this.props.history.push('/mydrills')}>my drills</button>
                </div>
                {/* <div style= { drillBodyOne}> */}
                    {this.state.myTrainers.map(myTrainers => {
                        return (
                            <div style= {drillbox}>

                                NAME: <h1 style= {drillLabel}>{myTrainers.name}</h1>
                                TRAINING SKILLS: <h1 style= {drillLabel}>{myTrainers.training_skills}</h1>
                                BIO:  <h1 style= {drillLabel}>{myTrainers.biography}</h1>
                                CREDENTIALS: <h1 style= {drillLabel}>{myTrainers.credentials}</h1>
                                LINKS: <a style= {drillLabel} href={myTrainers.links} target= '_blank'>{myTrainers.links}</a>
                                OFFERED TRAINING: <h1 style= {drillLabel}>{myTrainers.offeredtraining}</h1>
                                MEDIA: <h1 style= {drillLabel}>{myTrainers.media}</h1>
                                FACEBOOK: <a style= {drillLabel} href={myTrainers.facebook} target= '_blank'>{myTrainers.facebook}</a>
                                INSTAGRAM: <a style= {drillLabel} href={myTrainers.instagram} target= '_blank'>{myTrainers.instagram}</a>
                                PODCAST: <h1 style= {drillLabel}>{myTrainers.podcast}</h1>
                                YOUTUBE: <a style= {drillLabel} href={myTrainers.youtube} target= '_blank'> {myTrainers.youtube}
                                    </a>

                                <button style= {RemoveTrainersButton} onClick= {() => this.removeTrainer(myTrainers.trainer_id)}>Remove from My Trainers</button>
                            
                                
                            </div>
                        )
                    })}
                    
                <Footer/>
                </div>

                {/* </div> */}

        </div>
    )
}
}

export default (withRouter(MyTraining))