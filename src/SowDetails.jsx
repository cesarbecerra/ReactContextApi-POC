import React, { useEffect } from "react";
import { useData } from "./ContextState";
import { loadSOW, loadParticipants } from "./reducers";
import Participants from "./Participants";

const SowDetails = ({ store, dispatch }) => {
  const loadData = async () => {
    const request = await fetch(
      "https://next.json-generator.com/api/json/get/4khY1t3Y_"
    );
    const sowData = await request.json();
    dispatch(loadSOW(sowData));
  };

  const loadParticipantsData = async () => {
    const request = await fetch(
      "https://next.json-generator.com/api/json/get/EJo_htnKO"
    );
    const participantsData = await request.json();
    dispatch(loadParticipants(participantsData));
  };

  useEffect(() => {
    loadData();
    loadParticipantsData();
  }, []);

  return (
    <>
      <div>
        <span>
          {store.sow?.data?._active_version?.title} -{" "}
          {store.sow?.data?.state_display}
        </span>
      </div>
      <br />
      <Participants />
    </>
  );
};

export default useData(SowDetails);
