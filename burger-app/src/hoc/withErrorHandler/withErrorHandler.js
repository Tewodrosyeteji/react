import React, { Component } from "react"
import Auxilary from "../Auxilary/Auxilary"
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandler=(WrappedComponent,axios)=>{

     return class extends Component{

        state={
            error:null,
        }

        componentWillMount(){
            this.reqInterceptors= axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            })
            this.resInterceptors=axios.interceptors.response.use(resp => resp,error =>{
             this.setState({error:error});
            })
        }

        componentWillUnmount=()=>{
               axios.interceptors.request.eject(this.reqInterceptors);
               axios.interceptors.response.eject(this.resInterceptors);
        }

        errorConfirmedHandler=()=>{
         this.setState({error:null})
        }
         render(){
            return(
                <Auxilary>
                    <Modal  
                        show={this.state.error} 
                        modalClosed={this.errorConfirmedHandler}> 
                        {this.state.error?this.state.error.message:null}
                        </Modal>
                    <WrappedComponent {...this.props}/>
                </Auxilary>
          
            ) 
         }

     }
    }

export default withErrorHandler;