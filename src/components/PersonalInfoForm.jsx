function PersonalInfoForm({personalInfo,setPersonalInfo}){
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setPersonalInfo({...PersonalInfoForm,[name]:value});
    };

    return(
       <div>

        <h2>Personal Information</h2>
        
        <label htmlFor="">Name: </label>
        <input type="text" name="name" value={personalInfo.name} onChange={handleChange}/>
        <br /><br />

        <label htmlFor="">Email: </label>
        <input type="email" name="email" value={personalInfo.email} onChange={handleChange}/>
        <br /><br />
        
        <label htmlFor="">Phone: </label>
        <input type="text" name="phone" value={personalInfo.phone} onChange={handleChange}/>
        
       </div> 
    );

}
export default PersonalInfoForm