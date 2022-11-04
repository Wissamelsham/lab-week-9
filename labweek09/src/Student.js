//import React from "react";
import React, {Component} from "react"

class Student extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <h5> Student info</h5>
            <p>Student First Name: {this.props.fnm}</p>
            <p>Student last Name: {this.props.nm}</p>
            <p>Student result:  {this.props.rsl}</p>
            <p>Student result:  {this.props.city}</p>
            </>
        )
    }
}
Student.defaultProps = {
    fnm: "no name",
    nm: "no last name",
    rsl: "no result",
    city: "Toronto",
}
export default Student;

