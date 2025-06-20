import { Bounce, ToastContainer } from 'react-toastify';

type MessageContainserProps = {
  children: React.ReactNode;
};
export function MessageContainser({ children }: MessageContainserProps) {
  return (
    <>
      {children}
      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
