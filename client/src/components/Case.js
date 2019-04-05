import React, { Component } from 'react'
import axios from 'axios';

export default class Case extends Component {
  state={
    assignedLawyerEmail:'not assigned yet',
    assignedReviewerEmail:'not assigned yet',
    caseCreationDate:'',
    caseStatus:'',
    creatorInvestorEmail:'',
    creatorLawyerEmail:'',
    //missing
    form:'',
    //missing
    managers:'',
    //missing
    previouslyAssignedLawyers:'',
    //missing
    previouslyAssignedReviewers:''
  }
  async componentDidMount(){
    const{assignedLawyerId,assignedReviewerId,caseCreationDate,caseStatus,creatorInvestorId,
      creatorLawyerId,form,managers,previouslyAssignedLawyers,previouslyAssignedReviewers}=this.props.case;
      
      let getAssignedLawyer = '';
      let getAssignedReviewer = '';
      let getCreatorInvestor='';
      let  getCreatorLawyer ='';
      if(assignedLawyerId!==null){
        getAssignedLawyer =await axios.get(`http://localhost:5000/api/lawyers/${assignedLawyerId}`);
        this.setState({assignedLawyerEmail: getAssignedLawyer.data.data.email}); 
      }
      if(assignedReviewerId!==null){
        getAssignedReviewer =await axios.get(`http://localhost:5000/api/reviewers/${assignedReviewerId}`);
        this.setState({assignedReviewerEmail: getAssignedReviewer.data.data.email}); 
      }
      if(creatorLawyerId!==null){
        getCreatorLawyer =await axios.get(`http://localhost:5000/api/lawyers/${creatorLawyerId}`);
        this.setState({creatorLawyerEmail: getCreatorLawyer.data.data.email}); 
      }
      if(creatorInvestorId!==null){
        getCreatorInvestor =await axios.get(`http://localhost:5000/api/investors/${creatorInvestorId}`);
        this.setState({creatorInvestorEmail: getCreatorInvestor.data.email}); 
      }
      this.setState({caseStatus:caseStatus});
      this.setState({caseCreationDate:caseCreationDate});
      this.setState({form:form});
      this.setState({managers:managers});
      this.setState({previouslyAssignedLawyers:previouslyAssignedLawyers});
      this.setState({previouslyAssignedReviewers:previouslyAssignedReviewers});     
};
  render() {
    
    return (
      <div>

         <h4>caseCreationDate:{this.state.caseCreationDate}</h4>
         <h4>assignedLawyerEmail:{this.state.assignedLawyerEmail}</h4>
         <h4>assignedReviewerEmail:{this.state.assignedReviewerEmail}</h4>
         <h4>CreatorInvestorEmail:{this.state.creatorInvestorEmail}</h4>
         <h4>creatorLawyerEmail:{this.state.creatorLawyerEmail}</h4>
         <h4>caseStatus:{this.state.caseStatus}</h4>
      </div>
    )
  }
}
