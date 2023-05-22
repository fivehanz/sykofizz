import { useForm, SubmitHandler } from 'react-hook-form';

/* eslint-disable-next-line */
export interface AuthFormProps {}

interface IFormInput {
  email: string;
}

export function AuthForm(props: AuthFormProps) {
  // const { register, handleSubmit } = useForm<IFormInput>();
  const submitForm = (data: any) => {
    data.preventDefault();
    console.log(data);
  };

  return (
    <form className="w-full max-w-md" onSubmit={submitForm}>
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
        sign In
      </h1>

      <div className="relative flex items-center mt-8">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>

        <input
          type="email"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email address"
        />
      </div>

      <div className="mt-6">
        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default AuthForm;
