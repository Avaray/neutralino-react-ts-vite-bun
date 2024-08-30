interface ContainerProps {
  children: React.ReactNode; // Ensure this is typed correctly
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div style={{ width: '95vw', maxWidth: '100%', display: 'flex', flexDirection: 'column' }} className="container">{children}</div>;
};

export default Container;
