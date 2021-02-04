<template>
  <div class="email">
    <v-container class="d-flex flex-column align-center mt-5">
      <p class="text-h5 text-sm-h4 font-weight-normal mb-1 grey--text text--darken-3">想對Share5說些什麼 快寄信來吧！？</p>

      <v-form @submit.stop.prevent="sendEmail" id="form" class="pt-5">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="姓名"
              type="text"
              v-model="fromName"
              name="fromName"
              prepend-icon="mdi-account"
              color="red darken-2"
              counter="15"
              maxlength="15"
              :rules="[rules.required, rules.counter]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="信箱"
              type="email"
              v-model="fromEmail"
              name="fromEmail"
              prepend-icon="mdi-mail"
              color="red darken-2"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-textarea
          label="內容"
          v-model="message"
          name="message"
          prepend-icon="mdi-playlist-edit"
          color="red darken-2"
          :rules="[rules.required]"
        ></v-textarea>
        <v-btn type="submit" class="mt-3 mb-5 px-5 d-block mx-auto red darken-2 white--text" small>
          寄信
          <v-icon right>mdi-send</v-icon>
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { init } from "emailjs-com";
init("user_6UdbwhuLOCmDTcr5ujX1q");
import emailjs from "emailjs-com";

export default {
  name: "Email",
  data() {
    return {
      fromEmail: "",
      fromName: "",
      message: "",
      rules: {
        required: value => !!value || "必填",
        counter: value => value.length <= 15 || "上限為15字"
      }
    };
  },
  methods: {
    sendEmail(e) {
      if (!this.fromName || !this.fromEmail || !this.message) {
        alert("請確保填寫所有欄位");
        return;
      }

      emailjs
        .sendForm(
          "service_ksb5un8",
          "template_o5hoxtk",
          e.target,
          "user_6UdbwhuLOCmDTcr5ujX1q"
        )
        .then(result => {
          if (result.text !== "OK") {
            alert("暫時無法寄出信件，請稍侯再試");
            return;
          }
          console.log("SUCCESS", result.status, result.text);
          this.$router.push({ name: "Thank" });
        })
        .catch(error => {
          console.log("FAIL", error);
        });
    }
  }
};
</script>

<style scoped>
#form {
  width: 75vw;
}

@media (min-width: 600px), print {
  #form {
    width: 60vw;
  }
}
</style>