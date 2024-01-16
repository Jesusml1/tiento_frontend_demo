type LoggingDetails = {
  endpoint: string;
  statusCode: number;
  error: Object | null;
};

export interface LoggingEvent {
  code: string;
  details: LoggingDetails;
}
