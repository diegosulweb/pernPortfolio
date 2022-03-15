import { React, useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import EditIssue from "./EditIssue";

const ListIssues = () => {
  const [issues, setIssues] = useState([]);
  const getIssues = async () => {
    try {
      const response = await fetch("http://localhost:5001/issues");
      const jsonData = await response.json();
      setIssues(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const closeIssue = async (e, issue) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5001/issues/close/${issue.issue_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      window.location = "/issues";
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getIssues();
  }, []);
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Category</th>
          <th>Edit</th>
          <th>Close</th>
        </tr>
      </thead>
      <tbody>
        {issues.map((issue) => (
          <tr key={issue.issue_id}>
            <td>{issue.issue_id}</td>
            <td>{issue.title}</td>
            <td>{issue.description}</td>
            <td>{issue.created_on.split("T")[0]}</td>
            <td>{issue.category_id}</td>
            <td>
              <EditIssue
                issue_id={issue.issue_id}
                title={issue.title}
                description={issue.description}
                category_id={issue.category_id}
              />
            </td>
            <td>
              <Button variant="warning" onClick={(e) => closeIssue(e, issue)}>
                Close
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListIssues;
