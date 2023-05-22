import { AuthForm } from '../../components/auth-form/auth-form';
import MainContainer from '../../components/main-container/main-container';

const AuthIndex = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <MainContainer>
        <div className="container flex items-center justify-center min-h-[70vh] px-6 mx-auto">
          <AuthForm />
        </div>
      </MainContainer>
    </section>
  );
};

export default AuthIndex;
