import React, { useState } from "react";

function TodoList(props) {
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    if (!job) return;

    setJobs((pre) => {
      const newJobs = [...pre, job];
      //save localstorage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      {jobs.map((job, index) => (
        <li key={index}>{job}</li>
      ))}
    </div>
  );
}

export default TodoList;
