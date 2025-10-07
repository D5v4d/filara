import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { upModalWindow } from "../slice/seminarsSlice";
import { Modal, Box, ButtonBase } from "@mui/material";
import { useAuthForm } from "../hooks/useAuthForm";
import { FormProvider } from "react-hook-form";
import { InputForm } from "./InputForm";
import { InputLabels } from "./InputLabels";
import type { IForm } from "../types/form";
import { useAddSeminarMutation } from "../api/dataSidebar";

export const EditingAndAdding = () => {
  const form = useAuthForm();
  const { handleSubmit, reset } = form;
  const { isOpenModalWindow: open, data } = useSelector((state: RootState) => state.seminars);
  const [addSeminar] = useAddSeminarMutation();
  const dispatch = useDispatch();

  const onSubmit = async (formData: IForm) => {
    const id = data.users.find((e) => e.fullName === formData.speaker)?.id;
    const seminar = {
      id: `${data.seminars.length + 1}`,
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      userId: id,
      isLikes: false,
      status: "application",
    };
    addSeminar(seminar);
    reset();
  };

  const handleClose = () => {
    // Сбрасываем форму при закрытии модального окна
    reset();
    dispatch(upModalWindow({ isOpen: false }));
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: "640px", backgroundColor: "white", height: "100%" }}>
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ borderBottom: "1px solid #D0D3DA", p: "26px 40px", display: "flex", gap: "16px" }}>
                <ButtonBase
                  onClick={() => reset()}
                  sx={{
                    height: "48px",
                    textAlign: "center",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    width: "272px",
                    border: "1px solid #D0D3DA",
                    borderRadius: "8px",
                  }}
                >
                  Удалить
                </ButtonBase>
                <ButtonBase
                  type="submit"
                  component="button"
                  sx={{
                    height: "48px",
                    textAlign: "center",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    width: "272px",
                    bgcolor: "#C06ECC",
                    color: "#ffffff",
                    borderRadius: "8px",
                  }}
                >
                  Сохранить
                </ButtonBase>
              </Box>
              <Box sx={{ p: "16px 40px" }}>
                <InputForm type="title" text="Название*" placeholder="Название семинара" />
                <InputForm type="description" text="Описание*" placeholder="Опишите семинар" />
                <InputLabels name="speaker" placeholder="ФИО" title="Спикер" />
                <InputLabels name="specialization" placeholder="Название семинара" title="Специальность спикера" />
                <InputLabels name="city" placeholder="Название города" title="Город" />
                <Box sx={{ display: "flex", gap: "8px", mt: "8px" }}>
                  <InputForm type="date" text="Дата*" placeholder={""} />
                  <InputForm type="time" text="Время*" placeholder={""} />
                </Box>
              </Box>
            </form>
          </FormProvider>
        </Box>
      </Modal>
    </>
  );
};
