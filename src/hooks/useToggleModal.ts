import { ref } from 'vue';
export function useToggleModal(isShow: boolean) {
  const isShowModal = ref(isShow);
  const hideModal = () => {
    isShowModal.value = false;
  };
  const showModal = () => {
    isShowModal.value = true;
  };
  return {
    isShowModal,
    hideModal,
    showModal
  };
}
