import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalProps {
  title?: string;
  description?: string;
  role?: string;
  timeline?: string;
  technologies?: string[];
  metrics?: {
    accuracyImprovement?: string;
    contextualUnderstanding?: string;
    datasetQuality?: string;
    customerAdoption?: string;
    timeToMarket?: string;
    teamProductivity?: string;
    machineUptime?: string;
    revenueLossReduction?: string;
    projectValue?: string;
  };
  achievements?: string[];
  recognition?: string[];
}

interface ModalState {
  isOpen: boolean;
  type: string | null;
  props: ModalProps | null;
}

const initialState: ModalState = {
  isOpen: false,
  type: null,
  props: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: string; props: ModalProps }>
    ) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.props = action.payload.props;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
      state.props = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
