import React from "react";
import { useData } from "./ContextState";

const Participant = (participant) => (
  <li>
    {participant.participant_full_name} - {participant.participant_email}
  </li>
);

const Participants = ({ store }) => (
  <ul>
    {store.sow?.participants.map((participant) => (
      <Participant key={participant.id} {...participant} />
    ))}
  </ul>
);

export default useData(Participants);
