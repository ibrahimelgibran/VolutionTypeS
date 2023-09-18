type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggendIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggendIn
          ? `Welcome ${props.name}! you have ${messageCount}  unread message`
          : "Welcome Greet"}
      </h2>
    </div>
  );
};
