import { createSlice } from "@reduxjs/toolkit";
import type { AppState, TableRow } from "../types/dataSeminars";

const seminarsSlice = createSlice({
  name: "seminars",
  initialState: {
    heading: {
      future: ["Название", "Спикер", "Дата"],
      history: ["Название", "Дата"],
      applications: ["Название семнара", "Пользователь", "Номер телефона", "Дата"],
    },
    limit: 5,
    limitStart: 0,
    limitEnd: 5,
    pageLimit: 0,
    page: 1,
    data: {
      seminars: [],
      users: [],
    },
    isOpenModalWindow: false,
    dataEditing: {},
    table: [], // текущая отображаемая таблица
    originalTable: [], // исходная таблица (без фильтрации)
  } as AppState,
  reducers: {
    getSeminars(state, action) {
      state.data.seminars = action.payload.seminars;
    },
    upLimit(state, action) {
      state.limit = action.payload;
      state.pageLimit = Math.ceil(state.table.length / state.limit);

      state.limitStart = (state.page - 1) * state.limit;
      state.limitEnd = state.page * state.limit;
    },
    setSearch(state, action) {
      const query = action.payload.toLowerCase();

      if (!query.trim()) {
        // Если поиск пустой — возвращаем оригинальную таблицу
        state.table = state.originalTable;
      } else {
        // Иначе фильтруем по `title`
        state.table = state.originalTable.filter((item) => item.title?.toLowerCase().includes(query));
      }
    },
    upPage(state, action) {
      state.page = action.payload;
      state.limitStart = (state.page - 1) * state.limit;
      state.limitEnd = state.page * state.limit;
    },
    getUsers(state, action) {
      state.data.users = action.payload.users;
    },
    upModalWindow(state, action) {
      state.isOpenModalWindow = action.payload.isOpen;
      if(action.payload.data){
        state.dataEditing = action.payload.data
      }
    },
    upTable(state, action) {
      let newTable: TableRow[] = [];

      if (action.payload === "history") {
        newTable = state.data.seminars
          .filter((seminar) => seminar.status == "history")
          .map((seminar) => ({
            id: seminar.id,
            title: seminar.title,
            date: seminar.date,
            likes: seminar.likes,
            isLiked: seminar.isLikes,
          }));
      } else if (action.payload === "future") {
        newTable = state.data.seminars
          .filter((seminar) => seminar.status == "upcoming")
          .map((seminar) => {
            const user = state.data.users.find((u) => u.id == seminar.userId);
            return {
              id: seminar.id,
              title: seminar.title,
              date: seminar.date,
              fullName: user ? user.fullName : "Неизвестный пользователь",
            };
          });
      } else if (action.payload === "application") {
        newTable = state.data.seminars
          .filter((seminar) => seminar.status === "application")
          .map((seminar) => {
            const user = state.data.users.find((u) => u.id == seminar.userId);
            return {
              id: seminar.id,
              title: seminar.title,
              date: seminar.date,
              fullName: user?.fullName,
              phone: user?.phone,
            };
          });
      }

      state.table = newTable;
      state.originalTable = [...newTable];
      state.pageLimit = Math.ceil(state.table.length / state.limit);
    },
  },
});

export const { getSeminars, upLimit, upPage, getUsers, upTable, setSearch, upModalWindow} = seminarsSlice.actions;

export { seminarsSlice };
