<template>
    <v-container
      class="rounded-lg mb-3"
      style="background-color: #f2caca"
      fluid
    >
      <h4>Home > Giám sát chùa</h4>
      <h1>Giám sát chùa</h1>

      <v-card class="mt-4 pa-5">
        <v-row>
          <v-col cols="3">
            <h2>Tìm kiếm chùa</h2>
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
          <v-col cols="4"
            ><v-text-field
              variant="solo"
              label="Tên Chùa"
              density="compact"
            ></v-text-field
          ></v-col>
          <v-col cols="4"
            ><v-text-field
              variant="solo"
              label="Tên Trụ Trì"
              density="compact"
            ></v-text-field
          ></v-col>
          <v-col cols="4"
            ><v-text-field
              variant="solo"
              label="Địa Chỉ"
              density="compact"
            ></v-text-field
          ></v-col>
        </v-row>
      </v-card>
      <v-card class="mt-8 pa-5">
        <v-card variant="text" class="d-flex my-5">
          <v-chip variant="outlined" class="me-auto" label>
            Hiển thị 1-5 of 6</v-chip
          >
          <v-chip append-icon="mdi-chevron-down" variant="text">
            Sắp Xếp
          </v-chip>
        </v-card>
        <v-table>
          <thead>
            <tr class="text-center">
              <th cols="1" class="text-center"></th>
              <th cols="3" class="text-center">Cập nhập</th>
              <th cols="2" class="text-center">Địa chỉ</th>
              <th cols="2" class="text-center">Ngày thành lập</th>
              <th cols="2" class="text-center">Tên chùa</th>
              <th cols="2" class="text-center">Trụ trì</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="(items, index) in listchua" :key="index">
              <td><v-icon>mdi-account-circle</v-icon></td>
              <td>{{items.capnhat}}</td>
              <td>{{items.diachi}}</td>
              <td>{{items.ngaythanhlap}}</td>
              <td>{{items.tenchua}}</td>
              <td>{{items.trutri}}</td>
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
    listchua:[],
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
  created(){
      this.getListC();
  },
  methods: {
    getListC(){
            axios.get("https://localhost:7187/api/Chua/lay danh sach chua")
            .then((response) => {
             console.log(response.data);
             this.listchua = response.data;
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
