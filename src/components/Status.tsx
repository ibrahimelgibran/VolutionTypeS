type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fatched Succsessfuly!";
  } else if (props.status === "error") {
    message = "Error fatched data";
  }
  return (
    <div className="App">
      <h2>Status - {message}</h2>
    </div>
  );
};
