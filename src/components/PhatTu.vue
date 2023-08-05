<template>
  <v-container class="rounded-lg mb-3" style="background-color: #f2caca" fluid>
    <h4>Home > Giám sát phật tử</h4>
    <h1>Giám Sát Phật Tử</h1>

    <v-card class="mt-4 pa-5">
      <v-row>
        <v-col cols="3">
          <h2>Tìm kiếm phật tử</h2>
        </v-col>
        <v-col cols="8"></v-col>
        <v-col style="text-align: right">
          <v-btn
            icon="mdi-magnify"
            style="background-color: #51c51a; color: #fff"
          >
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3"
          ><v-text-field
            variant="solo"
            label="Tên"
            density="compact"
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            variant="solo"
            label="Pháp danh"
            density="compact"
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-text-field
            variant="solo"
            label="Email"
            density="compact"
          ></v-text-field
        ></v-col>
        <v-col cols="3"
          ><v-combobox
            variant="solo"
            label="Giới tính"
            :items="['a', 'b']"
            density="compact"
          ></v-combobox
        ></v-col>
        <v-col cols="3"
          ><v-combobox
            variant="solo"
            label="Trạng thái phật tử"
            :items="['a', 'b']"
            density="compact"
          ></v-combobox
        ></v-col>
      </v-row>
    </v-card>
    <v-card class="mt-8 pa-5">
      <v-card variant="text" class="d-flex my-5">
        <v-chip variant="outlined" class="me-auto" label>
          Hiển thị 1-5 of 6</v-chip
        >
        <v-chip append-icon="mdi-chevron-down" variant="text"> Sắp Xếp </v-chip>
      </v-card>
      <v-table>
        <thead>
          <tr class="text-center">
            <th cols="1" class="text-center"></th>
            <th cols="4" class="text-center">Phật Tử</th>
            <th cols="2" class="text-center">Ngày Xuất Gia</th>
            <th cols="2" class="text-center">Ngày Sinh</th>
            <th cols="2" class="text-center">Pháp Danh</th>
            <th cols="1"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(items, index) in listpt" :key="index">
            <td><v-icon>mdi-account-circle</v-icon></td>
            <td>
              <v-card variant="text">
                <v-card-item prepend-icon="mdi-account" class="float-left">
                  <v-card-title>{{ items.email }}</v-card-title>
                  <v-card-subtitle>{{ items.email }}</v-card-subtitle>
                </v-card-item>
              </v-card>
            </td>
            <td>{{ items.ngaycapnhap }}</td>
            <td>{{ items.ngaysinh }}</td>
            <td>{{ items.phapdanh }}</td>
            <td>
              <v-card
                variant="text"
                class="d-flex justify-space-around align-center"
              >
                <div class="d-flex">
                  <v-dialog v-model="dialog2" activator="parent" width="auto">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        class="hello"
                        v-bind="props"
                        size="small"
                        variant="text"
                        icon="mdi-pen-plus"
                      ></v-btn>
                    </template>
                    <v-card>
                      <v-card-title>Thông tin người dùng </v-card-title>
                      <v-card-title>
                        <v-img
                          src="https://i.pinimg.com/736x/d9/8f/ae/d98faeb6883d04148058d55b4dfd7d87.jpg"
                          height="200px"
                          width="200"
                          cover
                        ></v-img>
                      </v-card-title>
                      <v-card-text
                        ><p class="mb-3">Ảnh đại diện người dùng</p>
                        <div class="btn-select_file">
                          <label for="select-img" class="bg-blue pa-2 mt-2"
                            >Chọn ảnh</label
                          >
                          <input type="file" id="select-img" class="d-none" />
                        </div>
                      </v-card-text>

                      <v-card-item>
                        <v-form>
                          <v-row>
                            <v-col cols="6"
                              ><v-text-field
                                variant="solo"
                                label="Họ Tên"
                                density="compact"
                              ></v-text-field
                            ></v-col>
                            <v-col cols="6"
                              ><v-text-field
                                variant="solo"
                                label="Pháp Danh"
                                density="compact"
                              ></v-text-field
                            ></v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="6"
                              ><v-text-field
                                variant="solo"
                                label="Email"
                                density="compact"
                              ></v-text-field
                            ></v-col>
                            <v-col cols="6"
                              ><v-text-field
                                variant="solo"
                                label="Số Điện Thoại"
                                density="compact"
                              ></v-text-field
                            ></v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="6"
                              ><v-text-field
                                variant="solo"
                                label="Ngày Sinh"
                                density="compact"
                                type="date"
                              ></v-text-field
                            ></v-col>
                            <v-col cols="6"
                              ><v-text-field
                                variant="solo"
                                label="Ngáy xuất giá"
                                density="compact"
                                type="date"
                              ></v-text-field
                            ></v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="4"
                              ><v-text-field
                                variant="solo"
                                label="Giới Tính"
                                density="compact"
                                type="number"
                              ></v-text-field
                            ></v-col>
                            <v-col cols="4"
                              ><v-text-field
                                variant="solo"
                                label="Hoàn Tục"
                                density="compact"
                                type="number"
                              ></v-text-field
                            ></v-col>
                            <v-col cols="4"
                              ><v-text-field
                                variant="solo"
                                label="Ngày Hoàn Tục"
                                density="compact"
                                type="date"
                              ></v-text-field
                            ></v-col>
                          </v-row>
                        </v-form>
                      </v-card-item>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn prepend-icon="mdi-account-check">
                          Xác Nhận
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
                <v-btn size="small" variant="text" icon="mdi-delete"></v-btn>
              </v-card>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    listpt: [],
    form: false,
    email: null,
    password: null,
    loading: false,
    dialog: false,
    dialog1: false,
    dialog2: false,
    rules: [
      (value) => !!value || "Không được bỏ trống",
      (value) => (value && value.length >= 3) || "Dài hơn 3 kí tự",
    ],
  }),
  created() {
    this.getListpt();
  },
  methods: {
    getListpt() {
      axios
        .get("https://localhost:7187/api/PhatTu/lay danh sach phat tu")
        .then((response) => {
          console.log(response.data);
          this.listpt = response.data;
        });
    },
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Không được bỏ trống";
    },
  },
};
</script>

<style>
th,
td {
  border: 1px solid #ccc;
}
</style>
