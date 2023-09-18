type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      Text contact goes here
    </div>
  );
};
