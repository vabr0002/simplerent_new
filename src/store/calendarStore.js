// src/store/calendarStore.js
"use client"; // if using Next.js app router, ensure "use client" at top

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCalendarStore = create(
  persist(
    (set, get) => ({
      bookingPeriod: { start: null, end: null },
      setBookingPeriod: (start, end) => set({ bookingPeriod: { start, end } }),
      clearBookingPeriod: () => set({ bookingPeriod: { start: null, end: null } }),
      isValidBooking: (date) => {
        const { start, end } = get().bookingPeriod;
        if (!start || !end) return false;
        return date >= start && date <= end;
      },
    }),
    {
      name: "calendar-storage", // The key (name) in localStorage
      // other optional config, e.g. partialize, version, etc.
    }
  )
);

export default useCalendarStore;