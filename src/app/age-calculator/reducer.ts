export type FormState = {
  day: number;
  month: number;
  year: number;
};

type Action = {
  type: 'onchange' | 'compute';
  field?: string;
  payload?: number;
};

export const initialFormState: FormState = {
  day: 1,
  month: 1,
  year: 1994,
};

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function formReducer(state: FormState, action: Action) {
  switch (action.type) {
    case 'onchange': {
      return { ...state, [`${action.field}`]: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
