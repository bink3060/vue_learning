<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup Page</h1>
        <v-form ref="signupUpForm" v-model="formValidity">
          <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
          <v-autocomplete :items="browsers" label="Which browser do you use ?"></v-autocomplete>
          <v-file-input label="Attach profil picture"></v-file-input>
          <v-text-field label="birthday" v-model="birthday" readonly></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox
            label="Agree terms & conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
          ></v-checkbox>
          <v-btn class="mr-4" type="submit" color="primary" :disabled="!formValidity">Submit</v-btn>
          <v-btn color="success" class="mr-4" @click="validateForm">Validate Form</v-btn>
          <v-btn class="mr-4" color="warning" @click="resetValidation">Reset Validation</v-btn>
          <v-btn color="error" @click="resetForm">Reset</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      agreeToTerms: false,
      agreeToTermsRules: [
        value => !!value || "You have to agree our terms and conditions!"
      ],
      browsers: ["Chrome", "Firefox", "safari", "Opera", "Brave"],
      birthday: "",
      email: "",
      emailRules: [
        value => value.indexOf("@") !== 0 || "Email should have a username.",
        value => value.includes("@") || "Email should include an @ symbol.",
        value =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "Email should contain a valid domain.",
        value => value.includes(".") || "Email should include a period symbol.",
        value =>
          value.indexOf(".") <= value.length - 3 ||
          "Email should contain a valid domain extension."
      ],
      formValidity: false
    };
  },
  methods: {
    resetValidation() {
      this.$refs.signUpForm.resetValidation();
    },
    resetForm() {
      this.$refs.signUpForm.resetForm();
    },
    validateForm() {
      this.$refs.signUpForm.validate();
    }
  }
};
</script>

<style>
</style>