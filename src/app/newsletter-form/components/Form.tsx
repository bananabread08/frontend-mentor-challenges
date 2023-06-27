'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormInput = {
  email: string;
};
export const NSForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const router = useRouter();
  const handleEmailSubmit = (data: FormInput) => {
    router.push(`/newsletter-form/${data.email}/success`);
  };
  return (
    <form
      className="flex flex-col gap-4 relative"
      onSubmit={handleSubmit(handleEmailSubmit)}
      noValidate
    >
      <div>
        <label htmlFor="email" className="font-semibold text-xs">
          Email Address
        </label>
        <input
          placeholder="email@company.com"
          className={
            'border border-nf-slate-300 w-full px-4 py-3 rounded-lg mt-2 ' +
            (errors.email ? 'border-red-500 bg-red-100' : '')
          }
          type="email"
          id="email"
          {...register('email', {
            validate: {
              maxLength: (v) =>
                v.length <= 50 || 'The email should have at most 50 characters',
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address',
            },
          })}
        />
        {errors.email?.message && (
          <small className="text-red-400 absolute top-0 right-0">
            {errors.email.message}
          </small>
        )}
      </div>
      <button className="bg-nf-slate-700 text-white px-4 py-3 w-full font-medium rounded-lg active:bg-gradient-to-r from-pink-500 via-nf-tomato to-orange-500 focus:outline-none focus:ring focus:ring-nf-tomato">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};
