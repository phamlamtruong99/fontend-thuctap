<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list>
      <v-list-item
        :prepend-icon="item.icon"
        :title="item.title"
        v-for="(item, i) in items"
        :key="i"
        :to="item.route"
        color="red"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menus: [{ title: "Đăng xuất", route: "/login" }],
      drawer: null,
      items: [
        { title: "Bảng tin", icon: "mdi-home", route: "/TrangTin" },
        {
          title: "Phật tử",
          icon: "mdi-account-circle",
          route: "/phat-tu",
        },
        {
          title: "Chùa",
          icon: "mdi-bank-plus",
          route: "/chua",
        },
        {
          title: "Đào trang",
          icon: "mdi-calendar-check",
          route: "/dao-trang",
        },
        {
          title: "Đơn đăng ký",
          icon: "mdi-format-list-bulleted-square",
          route: "/don-dang-ky",
        },
      ],
    };
  },
}
</script>

<style>

</style>