<template>
  <v-main>
    <div class="h-screen d-flex align-center">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" width="600" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Tài Khoản</div>
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Mật Khẩu
          <router-link
            to="/quenmk"
            class="text-caption text-decoration-none text-blue"
            rel="noopener noreferrer"
            target="_blank"
          >
            Quên mật khẩu?</router-link
          >
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn block class="mb-4" color="blue" size="large" variant="tonal">
          Đăng Nhập
        </v-btn>
        <v-card-text class="text-center">
          <router-link
            to="/register"
            rel="noopener noreferrer"
            target="_blank"
            class="text-blue text-decoration-none"
            >Đang ký ngay ! <v-icon icon="mdi-chevron-right"></v-icon
          ></router-link>
        </v-card-text>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>

<style></style>
