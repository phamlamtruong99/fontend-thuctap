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
        <v-chip append-icon="mdi-chevron-down" variant="text">
          <v-dialog v-model="dialog1" activator="parent" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                class="hello"
                v-bind="props"
                size="small"
                variant="text"
                icon="mdi-account-plus"
                @click="AddItem(items)"
              ></v-btn>
            </template>
            <v-card>
              <v-card-title>Thêm thông tin người dùng </v-card-title>
              <v-card-item>
                <v-form>
                  <v-row>
                    <v-col cols="6"
                      ><v-text-field
                        variant="solo"
                        label="Email"
                        density="compact"
                        v-model="this.AddPT.email"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="6"
                      ><v-text-field
                        variant="solo"
                        label="pasword"
                        density="compact"
                        v-model="this.AddPT.password"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                </v-form>
              </v-card-item>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn prepend-icon="mdi-account-check" @click="SaveAdd()">
                  Xác Nhận
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-chip>
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
          <tr
            class="text-center"
            v-for="(items, phattuid) in listpt"
            :key="phattuid"
          >
            <td>{{ items.phattuid }}</td>
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
              <v-card variant="text"
              class="d-flex justify-center">
                <v-btn
                class="hello"
                v-bind="props"
                size="small"
                variant="text"
                icon="mdi-pen-plus"
                @click="EditItem(items)"
              ></v-btn>
              <v-btn
              size="small"
              variant="text"
              icon="mdi-delete"
              v-model="this.DeletePT.phattuid"
              @click="DeleteItem(items)"
            ></v-btn>
              </v-card>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <v-card
              variant="text"
              class="d-flex align-center"
            >
              <div class="d-flex" >
                <v-dialog v-model="dialog2" activator="parent" width="auto">
                  <v-card >
                    <v-card-title>Sửa thông tin người dùng </v-card-title>
                    <v-card-item>
                      <v-form>
                        <v-row>
                          <v-col cols="6"
                            ><v-text-field
                              variant="solo"
                              label="Email"
                              density="compact"
                              v-model="this.EditPT.email"
                            ></v-text-field
                          ></v-col>
                          <v-col cols="6"
                            ><v-text-field
                              variant="solo"
                              label="phapdanh"
                              density="compact"
                              v-model="this.EditPT.phapdanh"
                            ></v-text-field
                          ></v-col>
                        </v-row>
                      </v-form>
                    </v-card-item>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn prepend-icon="mdi-account-check" @click="SaveEdit()">
                        Xác Nhận
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-card>
            <v-card
            variant="text"
            class="d-flex align-center"
          >
            <div class="d-flex" >
              <v-dialog v-model="dialog" activator="parent" width="auto">
                <v-card >
                  <v-card-title>Xóa thông tin người dùng </v-card-title>
                  <v-card-item>
                    Bạn có muốn xóa thông tin người dùng 
                  </v-card-item>
                  <v-card-actions>
                    <v-btn prepend-icon="mdi-account-check" @click="dialog=false">
                      Bỏ
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn prepend-icon="mdi-account-check" @click="SaveDelete()">
                      Xác Nhận
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { VCard } from "vuetify/lib/components/index.mjs";
export default {
    data: () => ({
        listpt: [],
        dialog: false,
        dialog1: false,
        dialog2: false,
        rules: [
            (value) => !!value || "Không được bỏ trống",
            (value) => (value && value.length >= 3) || "Dài hơn 3 kí tự",
        ],
        EditPT: {
            phattuid: null,
            email: "",
            phapdanh: "",
        },
        AddPT: {
            email: "",
            password: "",
        },
        DeletePT:{
          phattuid: null,
        }
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
        SaveEdit() {
            axios
                .put("https://localhost:7187/api/PhatTu/sua thong tin phan tu", this.EditPT)
                .then((response) => {
                console.log(response.data);
                this.dialog2 = false;
                this.getListpt();
            });
        },
        SaveAdd() {
            axios
                .post("https://localhost:7187/api/PhatTu/DangKy", this.AddPT)
                .then((response) => {
                console.log(response.data);
                this.dialog1 = false;
                this.getListpt();
                this.AddPT.email="";
                this.AddPT.password="";
            });
        },
        SaveDelete() {
            axios
            .delete(`https://localhost:7187/api/PhatTu/Xoa phat tu/${this.DeletePT.phattuid}`)
                .then((response) => {
                console.log(response.data);
                this.dialog = false;
                this.getListpt();
                this.dialog=false;
            });
        },
        DeleteItem(items) {
            this.DeletePT.phattuid=items.phattuid;
            console.log(this.DeletePT.phattuid);
            this.dialog=true;
        },
        AddItem() {
            console.log("Hello");
        },
        EditItem(items) {
            this.EditPT.phattuid = items.phattuid;
            this.EditPT.email = items.email;
            this.EditPT.phapdanh = items.phapdanh;
            this.dialog2 = true;
        },
    },
    components: { VCard }
};
</script>

<style>
th,
td {
  border: 1px solid #ccc;
}
v-overlay__scrim{
  opacity: 0.1;
}
</style>
