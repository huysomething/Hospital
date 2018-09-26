<template>
  <section class="container">
    <div>
      <app-logo/>
        <section class="textContainer">
        <at-input v-model="inputValue" placeholder="Username"></at-input> 
        </section>
        <section class="textContainer">
        <at-input v-model="password" type="password" placeholder="Password"></at-input>
        </section>
      <div class="links">
        <button v-on:click="onSignIn" class="btn btn-large btn-extended grey lighten-4 black-text">Log In</button>
        <nuxt-link to="/signup"> 
        <at-button size="large"  >Sign Up</at-button>
        </nuxt-link>
      </div>
    <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>

<meta name="google-signin-client_id" content="79211080622-dvn6hr7esbil545oabc8fn01k5lmq4os.apps.googleusercontent.com">
  <div style="margin-top: 12px" id="google-signin-btn"></div>

    </div>
      </section>
      
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import facebook from '~/components/facebook.vue'

export default {
  layout: 'blank',
  components: {
    AppLogo,
    facebook
  },
    methods: {
    onSignIn (user) {
            const profile = user.getBasicProfile()
          this.$Message.success('Signed in successfully as ' + profile.getName())
      console.log('Name: ' + profile.getName());
      //      signInWithEmailAndPassword(Username,Password)
}
},
  mounted() {
    gapi.signin2.render('google-signin-btn', { // this is the button "id"
      onsuccess: this.onSignIn // note, no "()" here
    })
  }

  }




</script>

<style scoped>
.container {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.textContainer {
padding-top: 10px
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}


.links {
  padding-top: 15px;
}
</style>

