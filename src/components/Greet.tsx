type GreetProps = {
  name: string;
  messageCount: number;
  isLoggendIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggendIn
          ? `Welcome ${props.name}! you have ${props.messageCount}  unread message`
          : "Welcome Greet"}
      </h2>
    </div>
  );
};
