function EducationForm({education,setEducation}){
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setEducation({...eduation,[name]:value})
    };
    return(
        <div>
            <h2>Education</h2>

            <label htmlFor="">School: </label>
            <input type="text" name="school" value={education.school} onChange={handleChange}/>
            <br /><br />

            <label htmlFor="">Degree: </label>
            <input type="text" name="degree" value={education.degree} onChange={handleChange}/>
            <br /><br />

            <label htmlFor="">Year: </label>
            <input type="text" name="year" value={education.year} onChange={handleChange}/>
        </div>
    );
}
export default EducationForm