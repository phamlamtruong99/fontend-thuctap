<template>
      <v-container
        class="rounded-lg mb-3"
        style="background-color: #f2caca"
        fluid
      >
        <h4>Home > Giám sát Đạo Tràng</h4>
        <h1>Giám sát Đạo Tràng</h1>
  
        <v-card class="mt-4 pa-5">
          <v-row>
            <v-col cols="3">
              <h2>Tìm kiếm Đạo Tràng</h2>
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
                label="Đạo Tràng Id"
                density="compact"
              ></v-text-field
            ></v-col>
            <v-col cols="4"
              ><v-text-field
                variant="solo"
                label="Nơi tổ chức"
                density="compact"
              ></v-text-field
            ></v-col>
            <v-col cols="4"
              ><v-text-field
                variant="solo"
                label="Người trụ trì"
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
                <th cols="1" class="text-center">ĐT Id</th>
                <th cols="2" class="text-center">Noi Dung</th>
                <th cols="2" class="text-center">Nơi TC</th>
                <th cols="2" class="text-center">STVTG</th>
                <th cols="2" class="text-center">TgTC</th>
                <th cols="2" class="text-center">Trụ trì</th>
                <th cols="1" class="text-center">Sua</th>
              </tr>
            </thead>
            <tbody >
              <tr class="text-center" v-for="(items, index) in listdt" :key="index">
                <td>{{items.daotrangid}}</td>
                <td>{{items.noidung}}</td>
                <td>{{items.noitochuc}}</td>
                <td>{{items.sothanhvienthamgia}}</td>
                <td>{{items.thoigiantochuc}}</td>
                <td>{{items.nguoitrutri}}</td>
                <td>
                    <div class="text-center">
                      <v-dialog
                        v-model="dialog"
                        width="auto"
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            color="primary"
                            v-bind="props"
                          >
                            Open Dialog
                          </v-btn>
                        </template>
                  
                        <v-card>
                          <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </v-card-text>
                          <v-card-actions>
                            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
      
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
      listdt:[],
     

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
      this.getListDT();
    },
    methods: {
      // SuaDaoTrang(items){
      //   this.items.tochuc=this.items.noitochuc
      // },
      getListDT(){
            axios.get("https://localhost:7187/api/DaoTrangControlles/lay danh sach dao trang")
            .then((response) => {
             console.log(response.data);
             this.listdt = response.data;
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
  