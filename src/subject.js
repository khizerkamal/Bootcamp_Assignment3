import React from 'react';

function Subject(props){
    return(
        <div>
            <h1>We have to study {props.subjectName} in {props.semester} semester</h1>
        </div>
    )
}
export default Subject;