export enum SelectDateChangeReason {
  date,
  time
}

export interface SelectDateChangeEventArgs {
  reason: SelectDateChangeReason;
  date: Date;
}
