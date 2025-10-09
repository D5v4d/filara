import { makeAutoObservable, runInAction } from "mobx";
import type { Ibrand } from "../types/brands";

class BrandsStore {
  brands: Ibrand[] = [];
  BrandId = "";

  constructor() {
    makeAutoObservable(this); // ← автоматически делает поля(переменные) observable, обычные методы — actions, для асинхронных функция что бы было обновление нужно оборачивать изменения в runInAction(() => { ... }).
  }

  brandID = (id: string) => { // у стрелочных функций берется у родителя this, если обявлена обычная функция и брать методы через деструктуризацию то this теряется
    this.BrandId = id;
  };

  editBrand = async (editedName: string, fileData: string | null) => {
    if (!editedName || !fileData || !this.BrandId) {
      console.error("введены не все данные");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/brands/${this.BrandId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editedName, icon: fileData }),
      });

      if (response.ok) {
        await this.getBrands();
        this.BrandId = "";
      } else {
        console.error("Не удалось обновить бренд", response.status);
      }
    } catch (error) {
      console.error("Ошибка при обновлении бренда:", error);
    }
  };

  postAddBrand = async (brand: Ibrand) => {
    const url = "http://localhost:3000/brands";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brand),
    });

    if (response.ok) {
      await this.getBrands();
    } else {
      console.error("Не удалось добавить бренд");
    }
  };

  getBrands = async () => {
    const response = await fetch("http://localhost:3000/brands");
    const json = await response.json();
    runInAction(() => {
      this.brands = json;
    });
  };

  deleteBrand = async (id: string) => {
    const response = await fetch(`http://localhost:3000/brands/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await this.getBrands();
    } else {
      console.error("Не удалось удалить бренд");
    }
  };
}

const brandsStore = new BrandsStore();
export default brandsStore;
