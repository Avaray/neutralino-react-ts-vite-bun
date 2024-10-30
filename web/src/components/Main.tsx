interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex-1 flex overflow-auto w-full">
      {children}
    </div>
  );
};

export default Container;
