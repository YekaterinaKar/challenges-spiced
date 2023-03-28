import { create } from "zustand";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    name: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    name: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    name: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    name: "Garage",
    isOn: false,
  },
  {
    id: 6,
    name: "Porch",
    isOn: false,
  },
  {
    id: 7,
    name: "Garden",
    isOn: false,
  },
  {
    id: 8,
    name: "Office",
    isOn: false,
  },
];

const useLightsStore = create((set) => ({
  lights: initialLights,
  toggleLight: (id) =>
    set((state) => {
      return {
        lights: state.lights.map((light) => {
          if (light.id === id) {
            light.isOn = !light.isOn;
          }
          return light;
        }),
      };
    }),
  turnAllLights: (bool) =>
    set((state) => {
      return {
        lights: state.lights.map((light) => {
          light.isOn = bool;
          return light;
        }),
      };
    }),
}));

export default useLightsStore;
