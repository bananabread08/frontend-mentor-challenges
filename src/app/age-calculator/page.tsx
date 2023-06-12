'use client';

import { useState } from 'react';
import arrow from './assets/images/icon-arrow.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export type FormInput = {
  day: number;
  month: number;
  year: number;
};

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function computeAge(year: number, month: number, day: number) {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();
  let initialYears = date.getFullYear() - year;

  const years = currentMonth < month ? initialYears - 1 : initialYears;

  let months =
    currentMonth < month ? 12 + currentMonth - month : currentMonth - month;
  if (currentDay - 1) months -= 1;
  let computedDay =
    currentDay < day
      ? daysInMonth(months === 1 ? 12 : month - 1, year) + (currentDay - day)
      : currentDay - day;
  return {
    day: computedDay,
    month: months,
    year: years,
  };
}

const AgeCalculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const [computed, setComputed] = useState<FormInput | null>(null);

  const formSubmit = (data: FormInput) => {
    setComputed({
      ...computeAge(data.year, data.month, data.day),
    });
  };

  return (
    <div className="bg-white shadow-xl md:w-[600px] rounded-2xl rounded-br-[5rem] m-2 p-8 grid grid-cols-1 gap-16 md:gap-4">
      <form
        action=""
        className="flex flex-col gap-16 md:gap-4"
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="w-full md:w-4/5 flex justify-center items-center gap-4">
          <div className="flex-1 grid gap-2 relative">
            <label
              className={
                'uppercase tracking-widest font-semibold ' +
                (errors.day ? 'text-red-400' : 'text-ac-smokeygrey')
              }
              htmlFor="day"
            >
              Day
            </label>
            <input
              className={
                'px-2 py-1 rounded-lg border text-[32px] font-bold ' +
                (errors.day ? 'border-red-400' : 'border-ac-lightgrey')
              }
              id="day"
              type="number"
              min={1}
              max={31}
              placeholder="DD"
              {...register('day', { required: true })}
            />
            {errors.day?.type === 'required' && (
              <p className="absolute bottom-[-2.5rem] md:bottom-[-1.5rem] text-xs text-red-400">
                This field is required
              </p>
            )}
          </div>
          <div className="flex-1 grid gap-2 w-full relative">
            <label
              className={
                'uppercase tracking-widest font-semibold ' +
                (errors.month ? 'text-red-400' : 'text-ac-smokeygrey')
              }
            >
              Month
            </label>
            <input
              className={
                'px-2 py-1 rounded-lg border text-[32px] font-bold ' +
                (errors.month ? 'border-red-400' : 'border-ac-lightgrey')
              }
              id="month"
              type="number"
              min={1}
              max={12}
              placeholder="MM"
              {...register('month', { required: true })}
            />
            {errors.month?.type === 'required' && (
              <p className="absolute bottom-[-2.5rem] md:bottom-[-1.5rem] text-xs text-red-400">
                This field is required
              </p>
            )}
          </div>
          <div className="flex-1 grid gap-2 relative">
            <label
              className={
                'uppercase tracking-widest font-semibold ' +
                (errors.year ? 'text-red-400' : 'text-ac-smokeygrey')
              }
              htmlFor="year"
            >
              Year
            </label>
            <input
              className={
                'px-2 py-1 rounded-lg border text-[32px] font-bold ' +
                (errors.year ? 'border-red-400' : 'border-ac-lightgrey')
              }
              id="year"
              type="number"
              min={1900}
              max={2023}
              placeholder="YYYY"
              {...register('year', { required: true })}
            />
            {errors.year?.type === 'required' && (
              <p className="absolute bottom-[-2.5rem] md:bottom-[-1.5rem] text-xs text-red-400">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="relative flex items-center justify-between">
          <hr className="w-full"></hr>
          <button className="bg-ac-purple rounded-full p-4 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 md:static md:translate-y-0 hover:bg-ac-offblack">
            <Image src={arrow} alt="arrow-icon" className="w-auto h-6" />
          </button>
        </div>
      </form>

      <div className="text-5xl font-extrabold italic">
        <p>
          <span className="text-ac-purple">
            {computed && computed.year ? computed.year : '--'}
          </span>{' '}
          years
        </p>
        <p>
          <span className="text-ac-purple">
            {computed && computed.month ? computed.month : '--'}
          </span>{' '}
          months
        </p>
        <p>
          <span className="text-ac-purple">
            {computed && computed.day ? computed.day : '--'}
          </span>{' '}
          days
        </p>
      </div>
    </div>
  );
};

export default AgeCalculator;
