const defaultState = {
  cash: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const GET_CUSTOMER = 'GET_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customer: [...state.customer, action.payload] };

    case GET_CUSTOMER:
      return {
        ...state,
        customer: state.customer.filter(
          (customer) => customer.id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});

export const removeCustomerAction = (payload) => ({
  type: GET_CUSTOMER,
  payload,
});
