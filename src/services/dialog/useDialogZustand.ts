import { create } from 'zustand';
import { DialogService } from './dialogTypes';

const useDialogStore = create<DialogService>(set => ({
  dialog: false,
  showDialog: () =>
    set({
      dialog: true,
    }),
  hideDialog: () =>
    set({
      dialog: false,
    }),
}));

export function useDialogZustand(): DialogService['dialog'] {
  return useDialogStore(state => state.dialog);
}

export function useDialogServiceZustand(): Pick<
  DialogService,
  'showDialog' | 'hideDialog'
> {
  const showDialog = useDialogStore(state => state.showDialog);
  const hideDialog = useDialogStore(state => state.hideDialog);

  return {
    showDialog,
    hideDialog,
  };
}
