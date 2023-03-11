const URL = "https://vacations-n2qv.onrender.com/api/v1/vacations";

const GET_VACATIONS = "redux/vacations/vacations/GET_VACATIONS";

const vacationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_VACATIONS:
      return action.payload;
    default:
      return state;
  }
};

const getVacations = () => async (dispatch) => {
  const requestParams = {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("currentUser")).token,
    },
  };
  const fetchData = await fetch(URL, requestParams);
  const vacations = await fetchData.json();
  dispatch({ type: GET_VACATIONS, payload: vacations });
};

export { getVacations, vacationsReducer };
