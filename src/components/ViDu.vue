<template>
    <v-container>
      <div class="breadcumb">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <h5 class="text-h5 mb-3">Quản lý bài viết</h5>
      <v-card>
        <v-data-table :headers="headers" :items="desserts">
          <template v-slot:top>
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                single-line
                solo
                dense
                hide-details
                class="mr-3"
                label="Tìm kiếm"
              ></v-text-field>
              <v-dialog v-model="dialog">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" dark v-bind="attrs" v-on="on">
                    Thêm
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
  
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-icon>mdi-image</v-icon>
                          Hình ảnh bài viết
                        </v-col>
                        <v-col cols="12">
                          <input type="file" />
                        </v-col>
                        <v-col cols="6">
                          <label
                            ><span class="red--text">*</span>Tên bài viết:</label
                          >
                          <v-text-field
                            type="text"
                            solo
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <label
                            ><span class="red--text">*</span>Tên tác giả:</label
                          >
                          <v-text-field solo hide-details></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <label><span class="red--text">*</span>Chủ đề:</label>
                          <v-text-field
                            type="email"
                            solo
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-icon>mdi-image</v-icon>
                          Nội dung bài viết
                        </v-col>
                        <v-col cols="12">
                          <label>Nội dung ngắn:</label>
                          <v-textarea solo></v-textarea>
                        </v-col>
                        <v-col cols="12">
                          <label>Nội dung bài viết:</label>
  <v-textarea solo></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
  
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue white--text" @click="save"> Lưu </v-btn>
                    <v-btn color="red white--text" @click="close"> Hủy </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    ><v-icon class="me-2" color="yellow"
                      >mdi-alert-circle-outline</v-icon
                    >Bạn có chắc chắn muốn xóa?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary white--text" @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="red white--text" @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small color="primary" class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small color="red" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Quản lý bài viết",
          disabled: false,
          href: "/bai-viet",
        },
      ],
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "Tên bài viết", value: "tenBaiViet" },
        { text: "Thời gian tạo", value: "thoiGianTao" },
        { text: "Tên tác giả", value: "tenTacGia" },
        { text: "Chủ đề", value: "chuDe" },
        { text: "Tài khoản đăng", value: "taiKhoanDang" },
        { text: "Thao tác", value: "actions" },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        tenBaiViet: "",
        thoiGianTao: "",
        tenTacGia: "",
        chuDe: "",
        taiKhoanDang: "",
      },
    }),
  
    computed: {
      formTitle() {
        return this.editedIndex == -1 ? "Thêm bài viết" : "Cật nhật bài viết";
      },
    },
  
    created() {
      this.initialize();
    },
  
    methods: {
      initialize() {
        this.desserts = [
          {
            tenBaiViet: "Cell",
            thoiGianTao: "Cell",
            tenTacGia: "Cell",
            chuDe: "Cell",
            taiKhoanDang: "Cell",
          },
          {
            tenBaiViet: "Cell",
            thoiGianTao: "Cell",
            tenTacGia: "Cell",
            chuDe: "Cell",
            taiKhoanDang: "Cell",
        },
        {
          tenBaiViet: "Cell",
          thoiGianTao: "Cell",
          tenTacGia: "Cell",
          chuDe: "Cell",
          taiKhoanDang: "Cell",
        },
        {
          tenBaiViet: "Cell",
          thoiGianTao: "Cell",
          tenTacGia: "Cell",
          chuDe: "Cell",
          taiKhoanDang: "Cell",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
  },
};
</script>

<style scoped>
ul.v-breadcrumbs.theme--light {
  padding: 0;
  margin: 0;
}
</style>