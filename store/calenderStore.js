import { create } from 'zustand';

const useCalendarStore = create((set) => ({
  bookingPeriod: { start: null, end: null },
  setBookingPeriod: (start, end) => set({ bookingPeriod: { start, end } }),
  clearBookingPeriod: () => set({ bookingPeriod: { start: null, end: null } }),
  isValidBooking: (date) => {
    const { start, end } = useCalendarStore.getState().bookingPeriod;
    if (!start || !end) return false;
    return date >= start && date <= end;
  },
}));

export default useCalendarStore;