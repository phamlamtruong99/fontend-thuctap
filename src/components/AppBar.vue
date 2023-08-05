<template>
    <v-app-bar color="white" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
  
        <v-app-bar-title
          ><v-img
            src="https://insight.lotusacademy.edu.vn/static/img/logo_new.png"
            width="150"
            heightq="150"
          ></v-img
        ></v-app-bar-title>
  
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-avater color="red" class="mx-1"
              ><v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              ></v-img
            ></v-avater>
            <h2>User</h2>
            <v-dialog v-model="dialog1" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="mx-1"
                  size="small"
                  icon="mdi-login"
                  background-color="gray"
                  v-bind="props"
                ></v-btn>
              </template>
              <v-card class="mx-auto px-6 py-8" width="600">
                <v-form v-model="form" @submit.prevent="onSubmit">
                  <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    clearable
                    label="Email"
                  ></v-text-field>
  
                  <v-text-field
                    v-model="password"
                    :readonly="loading"
                    :rules="[required]"
                    clearable
                    label="Password"
                    placeholder="Enter your password"
                  ></v-text-field>
                  <br />
                  <v-btn
                    :disabled="!form"
                    :loading="loading"
                    block
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                  >
                    Đăng Nhập
                  </v-btn>
                </v-form>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialog" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn
                  class="mx-1"
                  size="small"
                  icon="mdi-account-plus"
                  v-bind="props"
                  background-color="gray"
                ></v-btn>
              </template>
              <v-card class="mx-auto" width="600" title="Đăng Ký">
                <v-container>
                  <v-text-field
                    v-model="email"
                    color="primary"
                    label="Email"
                    variant="underlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    color="primary"
                    label="Password"
                    placeholder="Enter your password"
                    variant="underlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="passwordconfig"
                    color="primary"
                    label="Password Config"
                    placeholder="Enter your password"
                    variant="underlined"
                  ></v-text-field>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="success">
                    Xác nhận đăng ký
                    <v-icon icon="mdi-chevron-right" end></v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <router-link to="/login">
              <v-btn
              class="mx-1"
              size="small"
              icon="mdi-menu-down"
              background-color="gray"
            ></v-btn>
            </router-link>
          </div>
        </template>
      </v-app-bar>
  
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
    dialog: false,
    dialog1: false,
    rules: [
      (value) => !!value || "Không được bỏ trống",
      (value) => (value && value.length >= 3) || "Dài hơn 3 kí tự",
    ],
  }),
  methods: {
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

</style>