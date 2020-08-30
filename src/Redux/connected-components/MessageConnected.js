import { bindActionCreators } from "redux";
import { messageAction } from "../actions/MessageAction";

const { connect } = require("react-redux");
const { MessageBox } = require("../../Components/MessageBox");

const mapStateToProps= (state)=>{
    return {message: state.first.message}
}

const mapActionToProps =(dispatch) =>{
    return  bindActionCreators({changeMessage: messageAction},dispatch);
}


   
export  const MessageBoxConnected  = connect(mapStateToProps,mapActionToProps)(MessageBox);