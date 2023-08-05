<template>
  <div>
   <AppBar/>
   <NavCom/>
   <router-view></router-view>
  </div>
</template>
<script>
import AppBar from './AppBar.vue';
// //import DangNhap from './DangNhap.vue';
import NavCom from './NavCom.vue';
//import PhatTu from './PhatTu.vue';
//import ChuaCom from './ChuaCom.vue';
//import QuenMk from './QuenMk.vue';
export default {
  components: {
    AppBar,NavCom,
},
 
  data: () => ({
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
th,
td {
  border: 1px solid #ccc;
}
</style>
