import React, { useEffect, useMemo } from "react";
import { Calendar } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getVacations } from "../redux/vacations/vacations";

export default function Calendario() {
  const dispatch = useDispatch();
  const vacations = useSelector((state) => state.vacations);

  useEffect(() => {
    dispatch(getVacations());
  }, [dispatch]);

  const vacationLookUp = useMemo(() => {
    const lookup = {};
    vacations.forEach((vacation) => {
      const start = moment(vacation.start_date);
      const end = moment(vacation.end_date);
      while (start.isBefore(end)) {
        const date = start.format("YYYY-MM-DD");
        lookup[date] = vacation;
        start.add(1, "day");
      }
    });
    return lookup;
  }, [vacations]);

  const DateCell = ({ date, vacation }) => {
    const cellClassName = vacation ? "vacation-cell" : "normal-cell";
    const cellContent = vacation ? (
      <>
        <div>
          <strong>{vacation.employee_name}</strong>
        </div>
        <div>{vacation.department}</div>
      </>
    ) : (
      date.date()
    );
    return <div className={cellClassName}>{cellContent}</div>;
  };

  const monthCellRender = (date) => {
    const month = date.month();
    const year = date.year();
    const start = moment([year, month]);
    const end = moment(start).endOf("month");
    const days = [];
    while (start.isBefore(end)) {
      const date = start.format("YYYY-MM-DD");
      const vacation = vacationLookUp[date];
      if (vacation) {
        days.push(
          <div key={date}>
            <strong>{start.date()}</strong> {vacation.employee_name}
          </div>
        );
      }
      start.add(1, "day");
    }
    return <div className="month-cell">{days}</div>;
  };

  const dateCellRender = (date) => {
    const dateStr = date.format("YYYY-MM-DD");
    const vacation = vacationLookUp[dateStr];
    if (!vacation) {
      return <div className="normal-cell">{date.date()}</div>;
    }
    return <DateCell date={date} vacation={vacation} />;
  };

  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
      style={{ padding: 50 }}
    />
  );
}
