interface IreservationDto {
  date: string;
  time: string;
  userId: number;
  partySize: number;
  specialRequest?: string;
}

export default IreservationDto;
