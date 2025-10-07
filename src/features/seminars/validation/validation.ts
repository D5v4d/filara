import * as yup from "yup";

const now = new Date();
const todayStr = now.toISOString().split('T')[0];
const currentTime = now.toTimeString().slice(0, 5);

export const editingAdding = yup.object({
  title: yup.string().required("Поле обязательно для заполнения"),
  description: yup.string().required("Поле обязательно для заполнения"),
  speaker: yup.string().required("Поле обязательно для заполнения"),
  specialization: yup.string().required("Поле обязательно для заполнения"),
  city: yup.string().required("Поле обязательно для заполнения"),
  date: yup
    .string()
    .required("Укажите дату")
    .test("not-past-date", "Дата не может быть в прошлом", (value) => {
      if (!value) return false;
      return value >= todayStr;
    }),

  time: yup
    .string()
    .required("Укажите время")
    .test("not-past-time", "Время не может быть в прошлом", function (value) {
      const { date } = this.parent;
      // Применяем строгую проверку ТОЛЬКО если выбрана сегодняшняя дата
      if (date === todayStr && value) {
        return value >= currentTime;
      }
      // Если дата — не сегодня (завтра и позже), любое время разрешено
      return true;
    }),
});

// yup равен yup {object, string и другие методы}
