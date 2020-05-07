const LOAD_SOW_DATA = "LOAD_SOW_DATA";
const LOAD_PARTICIPANTS = "LOAD_PARTICIPANTS";

export const initialState = {
  data: null,
  participants: [],
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SOW_DATA:
      return {
        ...state,
        data: payload,
      };
    case LOAD_PARTICIPANTS:
      return {
        ...state,
        participants: payload,
      };
    default:
      return state;
  }
};

export const loadSOW = (data) => {
  return {
    type: LOAD_SOW_DATA,
    payload: data,
  };
};

export const loadParticipants = (participants) => {
  return {
    type: LOAD_PARTICIPANTS,
    payload: participants,
  };
};
