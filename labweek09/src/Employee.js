function Employee(props){
    return (

        <>
        <h1>Employee Details</h1>
        <p>{JSON.stringify(props)}</p>
        <p>Employee first name {props.emp.lnm}</p>
        <p>Employee last name {props.emp.nm}</p>
        <p>Employee city: {props.emp.city}</p>
        </>
    )
}
export default Employee