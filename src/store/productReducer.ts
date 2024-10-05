import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import apiServices from "services/RequestHandler";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "utils/localStore";

const favorites = getDataFromLocalStorage("favorites");

interface productsInterface {
  all_bread: any;
  single_bread: any;
  all_sandwich: any;
  all_wrap: any;
  all_drink: any;
  all_chicken: any;
  all_loadpotato: any;
  all_dessert: any;
  all_sauce: any;
  all_pizza: any;
  single_pizza: any;
  all_products: any;
  all_toppings: any;
  home_products: any;
  pizzas_without_store: any;
  toggle_favourite_products: any;
  goes_well_products: any;
  favourite_products: any;
  favorite_products_id: any;
  activity: boolean;
}

interface APIParams {
  end_point: string;
  body: any;
}

const initialState: productsInterface = {
  //bread
  all_bread: [],
  single_bread: {},
  all_sandwich: [],
  all_wrap: [],
  all_drink: [],
  all_chicken: [],
  all_loadpotato: [],
  all_dessert: [],
  all_sauce: [],
  all_pizza: [],
  single_pizza: {},
  all_products: [],
  all_toppings: [],
  home_products: {},
  pizzas_without_store: [],
  toggle_favourite_products: [],
  goes_well_products: [],
  favourite_products: [],
  favorite_products_id: favorites,
  activity: false,
};

export const get_all_bread = createAsyncThunk(
  "all/breads",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "breads");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_sandwich = createAsyncThunk(
  "all/sandwich",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "sandwiches");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_wrap = createAsyncThunk(
  "all/wrap",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "wrap");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_drink = createAsyncThunk(
  "all/drink",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "drink");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_chicken = createAsyncThunk(
  "all/chicken",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "chicken");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_loadpotato = createAsyncThunk(
  "all/loadpotato",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "loadpotato");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_dessert = createAsyncThunk(
  "all/dessert",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "dessert");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_sauce = createAsyncThunk(
  "all/sauce",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "sauce");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_pizza = createAsyncThunk(
  "all/pizza",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "pizza");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_pizza_without_store = createAsyncThunk(
  "all/pizzawithourstore",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "pizza");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_single_pizza = createAsyncThunk(
  "single/pizza",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(
        data.end_point,
        data.body,
        "pizza"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_all_products = createAsyncThunk(
  "all/products",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "pizza");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_home_page_products = createAsyncThunk(
  "homeproducts",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(
        data.end_point,
        "homeproducts"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_goes_well_products = createAsyncThunk(
  "goeswell",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, "goeswell");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const toggle_favorite_product = createAsyncThunk(
  "favoriteproducts",
  async (data: APIParams) => {
    try {
      let response = await apiServices.postFromApi(
        data.end_point,
        data.body,
        "favoriteproducts"
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_favorite_product = createAsyncThunk(
  "getfavoriteproducts",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, data.body);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const get_favorite_products_id = createAsyncThunk(
  "getfavoriteproductsid",
  async (data: APIParams) => {
    try {
      let response = await apiServices.getFromApi(data.end_point, data.body);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    set_single_pizza: (state: any, action) => {
      state.single_pizza = action?.payload;
    },
    add_favorite_products: (state: any, action) => {
      let favorites = state.favorite_products_id;
      const favorite = favorites?.findIndex(
        (x: any) => x?.product_id === action?.payload
      );
      if (favorite > -1) {
        favorites.splice(favorite, 1);
      } else {
        favorites = [...favorites, { product_id: action?.payload }];
      }
      state.favorite_products_id = favorites;
      saveDataToLocalStorage("favorites", favorites);
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(get_all_bread.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_bread.fulfilled, (state: any, { payload }: any) => {
        state.all_bread = payload?.data;
        state.activity = false;
      })

      .addCase(get_all_sandwich.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_sandwich.fulfilled, (state: any, { payload }: any) => {
        state.all_sandwich = payload?.data;
        state.activity = false;
      })

      // wrap
      .addCase(get_all_wrap.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_wrap.fulfilled, (state: any, { payload }: any) => {
        state.all_wrap = payload?.data;
        state.activity = false;
      })

      // drink
      .addCase(get_all_drink.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_drink.fulfilled, (state: any, { payload }: any) => {
        state.all_drink = payload?.data;
        state.activity = false;
      })

      // chicken
      .addCase(get_all_chicken.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_chicken.fulfilled, (state: any, { payload }: any) => {
        state.all_chicken = payload?.data;
        state.activity = false;
      })

      // loadpotato
      .addCase(get_all_loadpotato.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_loadpotato.fulfilled, (state: any, { payload }: any) => {
        state.all_loadpotato = payload?.data;
        state.activity = false;
      })

      // dessert
      .addCase(get_all_dessert.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_dessert.fulfilled, (state: any, { payload }: any) => {
        state.all_dessert = payload?.data;
        state.activity = false;
      })

      // sauce
      .addCase(get_all_sauce.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_sauce.fulfilled, (state: any, { payload }: any) => {
        state.all_sauce = payload?.data;
        state.activity = false;
      })

      // pizza
      .addCase(get_all_pizza.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_pizza.fulfilled, (state: any, { payload }: any) => {
        state.all_pizza = payload?.data;
        state.activity = false;
      })
      // pizza
      .addCase(
        get_all_pizza_without_store.pending,
        (state: any, { payload }: any) => {
          state.activity = true;
        }
      )
      .addCase(
        get_all_pizza_without_store.fulfilled,
        (state: any, { payload }: any) => {
          state.pizzas_without_store = payload?.data;
          state.activity = false;
        }
      )

      // sigle pizza
      .addCase(get_single_pizza.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_single_pizza.fulfilled, (state: any, { payload }: any) => {
        state.single_pizza = {
          ...payload?.data,
          date: moment(new Date()).format("YYYYMMDD"),
        };
        state.activity = false;
      })

      // all products
      .addCase(get_all_products.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(get_all_products.fulfilled, (state: any, { payload }: any) => {
        state.all_products = payload?.data;
        state.activity = false;
      })

      .addCase(
        get_home_page_products.pending,
        (state: any, { payload }: any) => {
          state.activity = true;
        }
      )
      .addCase(
        get_home_page_products.fulfilled,
        (state: any, { payload }: any) => {
          try {
            const products = payload?.data?.reduce(
              (acc: any, item: any, index: number) => {
                let code =
                  item?.type === "pizza" || item?.category_code === "pizza"
                    ? "osg_code"
                    : item?.type === "deals"
                    ? "deal_code"
                    : "product_code";
                const newItem = { ...item, [code]: item?.code, id: index };
                if (!acc[item.type]) {
                  acc[item.type] = [];
                }
                acc[item.type].push(newItem);
                return acc;
              },
              {}
            );
            state.home_products = products;
            state.activity = false;
          } catch (error) {
            console.log(error);
          }
        }
      )

      .addCase(
        get_goes_well_products.pending,
        (state: any, { payload }: any) => {
          state.activity = true;
        }
      )
      .addCase(
        get_goes_well_products.fulfilled,
        (state: any, { payload }: any) => {
          state.goes_well_products = payload?.data;
          state.activity = false;
        }
      )

      .addCase(
        toggle_favorite_product.pending,
        (state: any, { payload }: any) => {
          state.activity = false;
        }
      )
      .addCase(
        toggle_favorite_product.fulfilled,
        (state: any, { payload }: any) => {
          state.toggle_favourite_products = payload?.data;
          state.activity = false;
        }
      )

      .addCase(get_favorite_product.pending, (state: any, { payload }: any) => {
        state.activity = true;
      })
      .addCase(
        get_favorite_product.fulfilled,
        (state: any, { payload }: any) => {
          state.favourite_products = payload;
          state.activity = false;
        }
      )

      .addCase(
        get_favorite_products_id.pending,
        (state: any, { payload }: any) => {
          state.activity = false;
        }
      )
      .addCase(
        get_favorite_products_id.fulfilled,
        (state: any, { payload }: any) => {
          state.favorite_products_id = payload?.data;
          saveDataToLocalStorage("favorites", payload?.data || []);
          state.activity = false;
        }
      );
  },
});

export default productSlice.reducer;

export const { set_single_pizza, add_favorite_products } = productSlice.actions;
