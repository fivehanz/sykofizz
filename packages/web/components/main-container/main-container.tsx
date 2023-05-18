/* eslint-disable-next-line */
export interface MainContainerProps {
  children: React.ReactNode;
}

export function MainContainer(props: MainContainerProps) {
  const { children } = props;
  return (
    <div className="container px-4 my-6 flex justify-center items-center min-w-full">
      {children}
    </div>
  );
}

export default MainContainer;
