import { Autocomplete, Container, InputLabel, TextField, Typography } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import type { IForm } from "../types/form";

const city = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Нижний Новгород",
  "Челябинск",
  "Самара",
  "Омск",
  "Ростов-на-Дону",
  "Уфа",
  "Красноярск",
  "Воронеж",
  "Пермь",
  "Волгоград",
];

const users = [
  "Иванова Мария Ивановна",
  "Петрова Елена Викторовна",
  "Сидоров Антон Павлович",
  "Кравцов Василий Дмитриевич",
  "Алёшина Наталья Георгиевна",
  "Ульянова Татьяна Сергеевна",
  "Смирнов Константин Леонидович",
  "Романова Светлана Олеговна",
  "Васильева Ольга Алексеевна",
  "Зайцев Игорь Владиславович",
];

const speciality = [
  "Косметолог-эстетист",
  "Дерматолог",
  "Аппаратный косметолог",
  "Врач-эстетист",
  "Специалист по контурной пластике",
  "Эксперт по anti-age терапии",
  "Дерматолог-акнеолог",
  "Косметолог по уходу за лицом",
  "Эксперт по антивозрастным методикам",
  "Трихолог",
];


export const InputLabels = ({ name, placeholder, title }: { name: keyof IForm; placeholder: string; title: string }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  const options = name === 'city' ? city : name === 'speaker' ? users : speciality;

  return (
    <Container disableGutters>
      <InputLabel sx={{ lineHeight: "24px", color: "#37393D" }} htmlFor={name}>
        {title}*
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            disablePortal
            options={options}
            value={value || null} // Autocomplete ожидает null при пустом значении
            onChange={(_, newValue) => {
              onChange(newValue || ""); // убедитесь, что значение — строка
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={placeholder}
                error={!!errors[name]} // ← добавьте это для корректной стилизации ошибки
                sx={{
                  marginTop: "8px",
                  height: "40px",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: "0 14px",
                    "& fieldset": {
                      borderColor: errors[name] ? "#d32f2f" : "#D0D3DA",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors[name] ? "#d32f2f" : "#D0D3DA",
                    },
                  },
                }}
              />
            )}
          />
        )}
      />
      {errors[name] && (
        <Typography sx={{ color: "red", mt: "4px", fontSize: "0.75rem" }}>
          {errors[name]?.message}
        </Typography>
      )}
    </Container>
  );
};