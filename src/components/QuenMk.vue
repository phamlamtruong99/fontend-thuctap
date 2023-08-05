<template>
        <div class="h-screen d-flex align-center">
          <v-card class="mx-auto" width="600">
            <v-card-title class="text-h6 font-weight-regular justify-space-between">
              <span>{{ currentTitle }}</span>
              <v-avatar color="primary" size="24">{{ step }}</v-avatar>
            </v-card-title>
    
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-card-text>
                  <v-text-field
                    label="Email"
                    placeholder="Vui lòng nhập gmail của bạn"
                  ></v-text-field>
                  <span class="text-caption text-grey-darken-1">
                    Vui lòng nhập gmail bạn dùng để đăng nhập
                  </span>
                </v-card-text>
              </v-window-item>
    
              <v-window-item :value="2">
                <v-card-text>
                  <v-text-field label="Mã xác nhật" type="password"></v-text-field>
                  <v-text-field label="Mật khẩu" type="password"></v-text-field>
                  <v-text-field
                    label="Xác nhận mật khẩu"
                    type="password"
                  ></v-text-field>
                  <span class="text-caption text-grey-darken-1">
                    Vui lòng kiểm tra và xác nhận
                  </span>
                </v-card-text>
              </v-window-item>
    
              <v-window-item :value="3">
                <div class="pa-4 text-center">
                  <h3 class="text-h6 font-weight-light mb-2">
                    <v-icon size="x-large" color="green"
                      >mdi-check-circle-outline</v-icon
                    >
                  </h3>
                  <span class="text-caption text-grey"
                    >Đổi mật khẩu thành công!</span
                  >
                  <br />
                  <a
                    class="text-caption text-decoration-none text-blue"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Quay trở về đăng nhập</a
                  >
                </div>
              </v-window-item>
            </v-window>
    
            <v-divider></v-divider>
    
            <v-card-actions>
              <v-btn v-if="step > 1" variant="text" @click="step--"> Trước </v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
                Sau
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
</template>

<script>
export default {
 data:()=>({
    step: 1,
 }),
 computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Vui lòng nhập Gmail";
        case 2:
          return "Tạo mật khẩu mới cho tài khoản";
        default:
          return "Xác nhận và đăng nhập";
      }
    },
  },
}
</script>

<style>

</style>