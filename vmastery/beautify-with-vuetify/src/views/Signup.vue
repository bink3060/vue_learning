<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup Page</h1>
        <v-form>
          <v-text-field label="Email" type="email"></v-text-field>
          <v-autocomplete :items="browsers" label="Which browser do you use ?"></v-autocomplete>
          <v-file-input label="Attach profil picture"></v-file-input>
          <v-text-field label="birthday" v-model="birthday" readonly></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox label="Agree terms & conditions"></v-checkbox>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      browsers: ["Chrome", "Firefox", "safari", "Opera", "Brave"],
      birthday: ""
    };
  }
};
</script>

<style>
</style>