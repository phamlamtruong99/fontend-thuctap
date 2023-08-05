<template>
  <v-container
    class="rounded-lg mb-3"
    style="background-color: #f2caca"
    fluid
  >
    <h4>Home > Giám sát Đơn</h4>
    <h1>Giám sát Đơn</h1>

    <v-card class="mt-4 pa-5">
      <v-row>
        <v-col cols="3">
          <h2>Xác nhận đơn</h2>
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
            <th cols="1" class="text-center">Ngay GĐ</th>
            <th cols="3" class="text-center">NgayXL</th>
            <th cols="2" class="text-center">NgươiXL</th>
            <th cols="2" class="text-center">Đào Trang Id</th>
            <th cols="2" class="text-center">Phật Tử Id</th>
            <th cols="2" class="text-center">Trạng Thái </th>
          </tr>
        </thead>
        <tbody >
          <tr class="text-center" v-for="(items, index) in listxl" :key="index">
            <td>{{items.ngayguidon}}</td>
            <td>{{items.ngayxuly}}</td>
            <td>{{items.nguoixuly}}</td>
            <td>{{items.daotrangid}}</td>
            <td>{{items.phattuid}}</td>
            <td>{{items.trangthaidon}}</td>
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
  listxl:[],
}),
created(){
  this.getListXL();
},
methods: {
  getListXL(){
        axios.get("https://localhost:7187/api/DonDk/lay danh sach don dk")
        .then((response) => {
         console.log(response.data);
         this.listxl = response.data;
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
