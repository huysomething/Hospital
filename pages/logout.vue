<template>
    <section>
        
    </section>
</template>

<script>
export default {
data () {
      return {
        logout: false,
      }
    },
    mounted() {
        this.modalConfirm();

    },
methods: {
      modalConfirm () {
        this.$Modal.confirm({
          title: 'Log out?',
          content: 'Are you sure you want to log out?'
        }).then(() => {
          this.logout = true; 
              var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
        window.location.href = '/';
        }).catch(() => {
          this.logout = false; 
        })
      }
    }
}
</script>

<style>

</style>
