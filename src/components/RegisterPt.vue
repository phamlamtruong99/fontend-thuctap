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
          Mật khẩu
        </div>
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Nhập mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Xác nhận mật khẩu
        </div>
        <v-text-field
          :append-inner-icon="visible1 ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible1 ? 'text' : 'password'"
          density="compact"
          placeholder="Xác nhận mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible1 = !visible1"
        ></v-text-field>

        <v-btn block class="mb-4" color="blue" size="large" variant="tonal">
          Đăng Ký
        </v-btn>
        <v-card-text class="text-center">
          <router-link
            to="/login"
            class="text-blue text-decoration-none"
            rel="noopener noreferrer"
            target="_blank"
          >
            Trở về đăng nhập<v-icon icon="mdi-chevron-right"></v-icon
          ></router-link>
        </v-card-text>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style></style>
