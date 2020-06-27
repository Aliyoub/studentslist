import React, { useState } from "react";
import useFetch from "../hooks/useFetch"

const GetStudents = () => {
  const [data, loading, error] = useFetch({
    method: "get",
    url: "https://abimimi.com/api/etudiants"
    // url: "http://aliyou-env.eba-bpbfmzwr.us-east-2.elasticbeanstalk.com/api/etudiants"
  });
  return (
    <div>
      {/* <button>Get users</button> */}
      {loading && <p>Loading...</p>}
      {error && <p>Oops, une erreur est survenue :(</p>}
      {data
        ? data.map(Student => (
            <p key={Student.id}>
              {Student.firstName} {' '} 
              {Student.lastName} {' '} 
              {Student.description} {' '} 
            </p>
          ))
        : null}
    </div>
  );
};

export default GetStudents;
